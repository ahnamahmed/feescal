import { generateResults } from './src/lib/feeEngine';

const inputStandard = {
    price: 100,
    shipping: 10,
    cost: 50,
    sellerPaysShipping: true,
    tiktokAffiliatePercent: 0,
    stockxSellerLevel: 1,
    isNonStandardCategory: false
};

const results = generateResults(inputStandard);

console.log("--- TikTok Shop (Standard) ---");
console.log("Platform Fee (6%):", results.tiktok.platformFee); // Expected: 6
console.log("Processing Fee (1.02%):", results.tiktok.procFee); // Expected: 1.02
console.log("Total Fee:", results.tiktok.fee);

console.log("\n--- StockX (Level 1) ---");
console.log("Platform Fee (9% + $5):", results.stockx.platformFee); // Expected: 9 + 5 = 14
console.log("Processing Fee (3%):", results.stockx.procFee); // Expected: 3
console.log("Total Fee (with $5):", results.stockx.fee);

const isTikTokOk = results.tiktok.platformFee === 6 && results.tiktok.procFee === 1.02;
const isStockXOk = results.stockx.platformFee === 14 && results.stockx.procFee === 3;

if (isTikTokOk && isStockXOk) {
    console.log("\nVERIFICATION SUCCESS: Fee splits are correct.");
} else {
    console.log("\nVERIFICATION FAILED:");
    if (!isTikTokOk) console.log("- TikTok split incorrect.");
    if (!isStockXOk) console.log("- StockX split incorrect.");
}
