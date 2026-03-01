export type FeeRule = {
    commissionPercent?: number;
    commissionFixed?: number;
    processingPercent?: number;
    processingFixed?: number;
    appliesToShipping?: boolean;
    tiered?: (price: number) => number;
};

export type PlatformConfig = {
    name: string;
    rule: FeeRule;
};

export const feeDatabase: Record<string, PlatformConfig> = {
    ebay: {
        name: "eBay",
        rule: {
            commissionPercent: 0.135,
            processingFixed: 0.30,
            appliesToShipping: true,
        },
    },
    poshmark: {
        name: "Poshmark",
        rule: {
            tiered: (price: number) => (price < 15 ? 2.95 : price * 0.20),
        },
    },
    vinted: {
        name: "Vinted",
        rule: {}, // 0% Seller Fee
    },
    mercari: {
        name: "Mercari",
        rule: {
            commissionPercent: 0.10,
        },
    },
    depop: {
        name: "Depop",
        rule: {
            processingPercent: 0.033,
            processingFixed: 0.45,
            appliesToShipping: true,
        },
    },
    whatnot: {
        name: "Whatnot",
        rule: {
            commissionPercent: 0.08,
            processingPercent: 0.029,
            processingFixed: 0.30,
            appliesToShipping: true,
        },
    },
    stockx: {
        name: "StockX",
        rule: {
            commissionPercent: 0.09,
            processingPercent: 0.03,
        },
    },
    tiktok: {
        name: "TikTok Shop",
        rule: {
            commissionPercent: 0.06,
            processingPercent: 0.0102,
        },
    },
};

export interface FeeCalculationsInput {
    salePrice: number;
    itemCost: number;
    shippingCost: number;
    sellerPaysShipping: boolean;
    isProMode: boolean;
    tiktokAffiliatePercent: number;
    stockxSellerLevel: 1 | 2 | 3 | 4 | 5;
}

export interface PlatformResult {
    id: string;
    name: string;
    isPro: boolean;
    sellingFee: number;
    procFee: number;
    totalFee: number;
    profit: number;
    roi: number; // This is actually Margin in the new spec, but let's keep consistency for now or align with ROI? 
    // Spec says margin = (profit / price) * 100. Previous code called it ROI (profit / cost * 100).
    // I will call it margin in the internal function as requested.
    note?: string;
}

const round = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export function calculateFees(input: {
    price: number;
    shipping: number;
    cost: number;
    sellerPaysShipping: boolean;
    rule: FeeRule;
}) {
    const price = Number(input.price) || 0;
    const shipping = Number(input.shipping) || 0;
    const cost = Number(input.cost) || 0;
    const { sellerPaysShipping, rule } = input;

    // Safety: If price <= 0, fee and margin are 0
    if (price <= 0) {
        const sellerShipping = sellerPaysShipping ? shipping : 0;
        return {
            fee: 0,
            profit: round(0 - cost - sellerShipping),
            margin: 0
        };
    }

    // 1. Commission base
    let base = price;
    if (rule.appliesToShipping) {
        base += shipping;
    }

    // 2. Commission
    let commission = 0;
    if (rule.tiered) {
        const tieredVal = rule.tiered(price);
        commission = typeof tieredVal === "number" && !isNaN(tieredVal) ? tieredVal : 0;
    } else {
        commission = (rule.commissionPercent || 0) * base + (rule.commissionFixed || 0);
    }

    // 3. Processing
    const processing = (rule.processingPercent || 0) * base + (rule.processingFixed || 0);

    // 4. Total fee
    const fee = round((commission || 0) + (processing || 0));

    // 5. Seller shipping cost
    const sellerShippingCost = sellerPaysShipping ? shipping : 0;

    // 6. Profit
    const profit = round(price - cost - sellerShippingCost - fee);

    // 7. Margin
    const margin = price > 0 ? round((profit / price) * 100) : 0;

    return {
        fee: isNaN(fee) ? 0 : fee,
        profit: isNaN(profit) ? 0 : profit,
        margin: isNaN(margin) ? 0 : margin
    };
}

export function generateResults(input: {
    price: number;
    shipping: number;
    cost: number;
    sellerPaysShipping: boolean;
    tiktokAffiliatePercent?: number;
    stockxSellerLevel?: number;
}) {
    const price = Number(input.price) || 0;
    const shipping = Number(input.shipping) || 0;
    const cost = Number(input.cost) || 0;
    const { sellerPaysShipping, tiktokAffiliatePercent, stockxSellerLevel } = input;

    const results: Record<string, { fee: number; profit: number; margin: number }> = {};

    Object.keys(feeDatabase).forEach((id) => {
        const platform = feeDatabase[id];
        let rule = { ...platform.rule };

        // Handle Dynamic Overrides
        if (id === "tiktok" && tiktokAffiliatePercent) {
            rule.commissionPercent = (rule.commissionPercent || 0) + (Number(tiktokAffiliatePercent) / 100);
        }

        if (id === "stockx" && stockxSellerLevel) {
            const sxLevelFees: Record<number, number> = { 1: 0.09, 2: 0.085, 3: 0.08, 4: 0.075, 5: 0.07 };
            rule.commissionPercent = sxLevelFees[stockxSellerLevel] || 0.09;
        }

        const calculation = calculateFees({
            price,
            shipping,
            cost,
            sellerPaysShipping,
            rule
        });

        // Specialized Adjustment for StockX (Flat $5 shipping)
        if (id === "stockx" && price > 0) {
            const sxProfit = round(calculation.profit - 5.00);
            const sxTotalFee = round(calculation.fee + 5.00);
            results[id] = {
                fee: isNaN(sxTotalFee) ? 0 : sxTotalFee,
                profit: isNaN(sxProfit) ? 0 : sxProfit,
                margin: price > 0 ? round((sxProfit / price) * 100) : 0
            };
        } else {
            results[id] = calculation;
        }
    });

    return results;
}

export function calculateAllPlatforms(input: FeeCalculationsInput): PlatformResult[] {
    const {
        salePrice: price,
        itemCost: cost,
        shippingCost: shipping,
        sellerPaysShipping,
        isProMode,
        tiktokAffiliatePercent,
        stockxSellerLevel
    } = input;

    const rawResults = generateResults({
        price: Number(price) || 0,
        shipping: Number(shipping) || 0,
        cost: Number(cost) || 0,
        sellerPaysShipping,
        tiktokAffiliatePercent: Number(tiktokAffiliatePercent) || 0,
        stockxSellerLevel
    });

    const platforms: PlatformResult[] = [];

    Object.keys(rawResults).forEach(id => {
        const platform = feeDatabase[id];
        const res = rawResults[id];

        const isPro = id === "whatnot" || id === "tiktok" || id === "stockx";
        if (isPro && !isProMode) return;

        const platformResult: PlatformResult = {
            id,
            name: platform.name,
            isPro,
            sellingFee: res.fee,
            procFee: 0,
            totalFee: res.fee,
            profit: res.profit,
            roi: res.margin,
        };

        // UI Detail Splitting Logic (Approximated for backward compatibility)
        if (id === "stockx") {
            platformResult.procFee = round(5.00 + (res.fee * 0.03));
            platformResult.sellingFee = round(res.fee - platformResult.procFee);
            platformResult.note = "Includes flat $5 shipping fee";
        }
        if (id === "vinted") platformResult.note = "Buyer pays Protection Fee";
        if (id === "mercari") platformResult.note = "0% Seller Fees";
        if (id === "tiktok" && tiktokAffiliatePercent && Number(tiktokAffiliatePercent) > 0) {
            platformResult.note = `Includes ${tiktokAffiliatePercent}% affiliate`;
        }

        platforms.push(platformResult);
    });

    return platforms.sort((a, b) => b.profit - a.profit);
}
