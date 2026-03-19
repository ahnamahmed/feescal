export const metadata = {
    title: "TikTok Shop Seller Fees in 2026: Complete Guide (Referral, Processing, FBT & Affiliate Costs)",
    description:
        "How much does TikTok Shop take per sale in 2026? Break down the 6% referral fee, 1%–2.2% processing fee, FBT fulfillment costs, affiliate commissions, refund penalties, and the March 2026 changes — plus 7 strategies to protect your margins.",
    keywords: [
        "TikTok Shop seller fees 2026",
        "how much does TikTok Shop take",
        "TikTok Shop fee structure 2026",
        "TikTok Shop 6% commission",
        "TikTok Shop fee calculator",
        "TikTok Shop referral fee",
        "TikTok Shop selling fees breakdown",
        "TikTok Shop FBT fees",
        "TikTok Shop affiliate commission",
        "TikTok Shop profit calculator",
        "reduce TikTok Shop fees",
        "TikTok Shop vs Amazon fees",
        "TikTok Shop new seller promotion",
    ],
};

// 60-30-10 Color System
// 60% → #FFFFFF / #FAFAFA  (white/off-white — dominant backgrounds)
// 30% → #0D0D1A / #555     (dark text — structure and body)
// 10% → #EE1D52            (TikTok-red accent — highlights, CTAs, badges)

const A = "#EE1D52";
const A_LIGHT = "#FFF0F3";
const A_MID = "#FFBDCA";

export default function TikTokShopFeesGuide() {
    return (
        <article style={{ maxWidth: 768, margin: "0 auto", padding: "64px 24px", color: "#0D0D1A", fontFamily: "inherit" }}>

            {/* ── BADGE ── */}
            <div style={{ marginBottom: 20 }}>
                <span style={{
                    background: A_LIGHT,
                    color: A,
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "5px 14px",
                    borderRadius: 100,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                }}>
                    Marketplace Strategies
                </span>
            </div>

            {/* ── TITLE ── */}
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 800, color: "#0D0D1A", lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.5px" }}>
                TikTok Shop Seller Fees in 2026: Every Charge Explained (Referral, Processing, FBT & Affiliate)
            </h1>

            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.85, marginBottom: 28 }}>
                TikTok Shop&apos;s 6% referral fee makes it sound like one of the cheapest marketplaces to sell on. But most sellers discover too late that their real cost is far higher — add payment processing, FBT fulfillment fees, creator affiliate commissions, and refund penalties and the effective rate can climb to 20%–30%+ on affiliate-driven sales. Here&apos;s exactly what you pay in 2026, what changed recently, and how to price for profit before a single order ships.
            </p>

            {/* ── AUTHOR ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: A_MID, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: A }}>F</div>
                <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0D0D1A", margin: 0 }}>Feescal Editorial Team</p>
                    <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>March 19, 2026 · 12 min read</p>
                </div>
            </div>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 44 }} />

            {/* ── TOC ── */}
            <div style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderLeft: `4px solid ${A}`, borderRadius: "0 16px 16px 0", padding: "24px 28px", marginBottom: 52 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>In This Guide</p>
                <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                    {[
                        ["#referral-fee", "The 6% Referral Fee (And the 3% New Seller Promo)"],
                        ["#processing-fee", "Payment Processing Fee: 1%–2.2% on Top"],
                        ["#fbt-fees", "FBT Fulfillment Fees (Updated Jan 2026)"],
                        ["#affiliate-commissions", "Affiliate Commissions: The Hidden Cost That Changes Everything"],
                        ["#refund-penalties", "Refund Administration Fees"],
                        ["#real-examples", "Real Profit Examples: Organic vs Affiliate Sales"],
                        ["#vs-competitors", "TikTok Shop Fees vs Amazon, eBay & Etsy"],
                        ["#reduce-fees", "7 Ways to Protect Your TikTok Shop Margins"],
                        ["#calculator", "How Feescal Makes the Math Instant"],
                    ].map(([href, label]) => (
                        <li key={href} style={{ fontSize: 14, color: "#555" }}>
                            <a href={href} style={{ color: "#555", textDecoration: "none" }}>{label}</a>
                        </li>
                    ))}
                </ol>
            </div>

            {/* ════════════════════════════════
          SECTION 1 — Referral Fee
      ════════════════════════════════ */}
            <section id="referral-fee" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    The 6% Referral Fee — And the 3% New Seller Promotion
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    TikTok Shop&apos;s core charge is a referral fee — its term for the marketplace commission. For US sellers in 2026, the standard rate is <strong style={{ color: "#0D0D1A" }}>6% on most product categories</strong>, calculated on the item price before shipping and tax. There are no listing fees, no monthly subscription fees, and no per-item insertion fees.
                </p>

                {/* Two cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                    <div style={{ background: "#FAFAFA", border: `1.5px solid "#EBEBF5"`, borderRadius: 16, padding: "24px 24px 20px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Standard Rate (US)</p>
                        <p style={{ fontSize: 42, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>6%</p>
                        <p style={{ fontSize: 13, color: "#777", margin: 0, lineHeight: 1.65 }}>Most US categories. Calculated on item price before shipping and taxes.</p>
                    </div>
                    <div style={{ background: "#FAFAFA", border: "1.5px solid #EBEBF5", borderRadius: 16, padding: "24px 24px 20px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>New Seller Promo</p>
                        <p style={{ fontSize: 42, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>3%</p>
                        <p style={{ fontSize: 13, color: "#777", margin: 0, lineHeight: 1.65 }}>First 30 days after your first sale — if you make that sale within 60 days of onboarding.</p>
                    </div>
                </div>

                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Critical nuances about how the referral fee is calculated:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {[
                        "Fee is calculated on item price only — not on shipping costs or sales tax collected from the buyer.",
                        "When TikTok co-funds a platform discount (e.g. 'Deals For You' vouchers), the discount is added back into your commission base. You still pay 6% on the full pre-discount price — TikTok reimburses the voucher value separately.",
                        "Seller-issued coupons DO reduce your commission base. A seller coupon dropping a $30 item to $25 means commission is calculated on $25.",
                        "UK sellers pay 9% (since September 2024). EU5 markets (Germany, Spain, France, Italy, Ireland) also moved to 9% in January 2026. New EU sellers get a temporary 4% rate for 60 days.",
                        "Some categories have reduced rates — check your specific Seller Center for any category-level exceptions in your market.",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, marginTop: 3, flexShrink: 0 }}>✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ════════════════════════════════
          SECTION 2 — Processing Fee
      ════════════════════════════════ */}
            <section id="processing-fee" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Payment Processing Fee: 1%–2.2% Added on Top
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    On top of the referral fee, TikTok Shop charges a payment processing fee on every completed order. This covers payment authorization, fraud prevention, and fund transfer. The rate varies by region and seller type:
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Region / Seller Type", "Processing Fee", "Combined with 6% Referral"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["US — Standard sellers", "1.02%–2.2%", "~7.02%–8.2% total"],
                                ["US — Unified fee structure*", "Included in 6%", "6% all-in"],
                                ["UK sellers", "~2.0%", "~11% total (9% + processing)"],
                                ["EU5 markets", "~2.0%", "~11% total (9% + processing)"],
                                ["Other regions", "1.5%–3.78%", "Varies by market"],
                            ].map(([region, proc, combined], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 500, color: "#0D0D1A" }}>{region}</td>
                                    <td style={{ padding: "13px 16px", color: "#0D0D1A", fontWeight: 600 }}>{proc}</td>
                                    <td style={{ padding: "13px 16px", color: "#555" }}>{combined}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 16 }}>
                    *Some US seller accounts operate under a unified 6% fee that includes payment processing. Check your Seller Center for your specific structure.
                </p>
                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "#7a0b22", lineHeight: 1.7 }}>
                    <strong>The blended effective rate for most US sellers is ~7%–8.2%</strong> — not 6%. If you&apos;ve been pricing based on the 6% headline, you&apos;ve been consistently receiving less than expected. Use the combined rate for all pricing decisions.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 3 — FBT Fees
      ════════════════════════════════ */}
            <section id="fbt-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    FBT Fulfillment Fees: Updated January 2026
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    Fulfilled by TikTok (FBT) is TikTok Shop&apos;s warehouse-to-door fulfillment service. After March 31, 2026, independent shipping ended for US sellers — all sellers must now use FBT, Upgraded TikTok Shipping (UTS), or Collections by TikTok (CBT). FBT is therefore no longer optional for most US sellers.
                </p>

                {/* FBT key updates */}
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14, marginBottom: 24 }}>
                    {[
                        {
                            tag: "Jan 2026 Update",
                            tagColor: A,
                            tagBg: A_LIGHT,
                            title: "Multi-unit fulfillment fees reduced by up to 24%",
                            desc: "Starting January 12, 2026, FBT fees for 2–4+ unit orders in the 0–4 lbs weight tier dropped by up to 24%. Single-unit fees remain unchanged. This makes bundling and multi-item orders significantly more cost-effective.",
                        },
                        {
                            tag: "Jan 2026 Update",
                            tagColor: A,
                            tagBg: A_LIGHT,
                            title: "Storage fees reduced 14%–43% for items stored up to 270 days",
                            desc: "Effective December 15, 2025, TikTok reduced FBT storage fees for inventory held up to 270 days, with discounts ranging from 14% to 43%. Longer-stored inventory still incurs escalating costs — but the relief window is significantly extended.",
                        },
                        {
                            tag: "June 2025 (Ongoing)",
                            tagColor: A,
                            tagBg: A_LIGHT,
                            title: "Free shipping now default for all FBT products",
                            desc: "Since June 16, 2025, all FBT products automatically qualify for TikTok's free shipping program with no minimum order value. Sellers who opt out face a $5.99 buyer-paid shipping fee on orders under $30 — which suppresses conversion — but receive a $0.75 per-item rebate.",
                        },
                        {
                            tag: "Pricing Reference",
                            tagColor: A,
                            tagBg: A_LIGHT,
                            title: "FBT base fulfillment starts at ~$3.58–$4.28 per unit",
                            desc: "Single-unit fulfillment for standard products (1–5 oz) starts around $3.58/unit and rises with weight. A single lightweight t-shirt order runs approximately $4.28 in fulfillment fees. Heavier items and orders without multi-unit discounts cost proportionally more.",
                        },
                    ].map(({ tag, tagColor, tagBg, title, desc }, i) => (
                        <div key={i} style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderRadius: 14, padding: "18px 20px" }}>
                            <span style={{ background: tagBg, color: tagColor, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.06em", textTransform: "uppercase" as const, display: "inline-block", marginBottom: 10 }}>{tag}</span>
                            <p style={{ fontWeight: 600, color: "#0D0D1A", margin: "0 0 6px", fontSize: 15 }}>{title}</p>
                            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 4 — Affiliate Commissions
      ════════════════════════════════ */}
            <section id="affiliate-commissions" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Affiliate Commissions: The Hidden Cost That Changes Everything
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    This is the number most TikTok Shop fee guides skip over — and it&apos;s the most important variable in your unit economics. When creators promote your products through TikTok&apos;s affiliate program and generate a sale, you pay them a commission <em>on top of</em> all platform fees. You set this rate yourself, but competitive pressure pushes most sellers toward 10%–20%.
                </p>

                {/* Impact table */}
                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Sale Type", "Platform Fee", "Affiliate Commission", "Total Cost", "You Keep"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Organic (no affiliate)", "~7%", "0%", "~7%", "~93%"],
                                ["Affiliate at 10%", "~7%", "10%", "~17%", "~83%"],
                                ["Affiliate at 15%", "~7%", "15%", "~22%", "~78%"],
                                ["Affiliate at 20%", "~7%", "20%", "~27%", "~73%"],
                                ["Affiliate at 30%", "~7%", "30%", "~37%", "~63%"],
                            ].map(([type, platform, affiliate, total, keep], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 500, color: "#0D0D1A" }}>{type}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{platform}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{affiliate}</td>
                                    <td style={{ padding: "13px 16px", color: "#0D0D1A", fontWeight: 600 }}>{total}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{keep}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "16px 20px", fontSize: 14, color: "#7a0b22", lineHeight: 1.7, marginBottom: 20 }}>
                    <strong>The critical insight:</strong> A 15% affiliate commission turns TikTok Shop from a 7% fee platform into a 22% cost platform. On a $50 sale, that&apos;s $11 in combined fees vs $3.50 for organic sales. Affiliate-driven revenue requires meaningfully higher product margins to remain profitable.
                </div>

                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    There is also a <strong style={{ color: "#0D0D1A" }}>30-day affiliate commission lock</strong> — once you set a commission rate on a product, you cannot reduce it for 30 days. If a video goes viral and drives thousands of sales at a commission rate you set casually, you&apos;re locked into paying that rate for a full month. Set affiliate rates deliberately, not reactively.
                </p>
            </section>

            {/* ════════════════════════════════
          SECTION 5 — Refund Penalties
      ════════════════════════════════ */}
            <section id="refund-penalties" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Refund Administration Fees: The Charge Most Sellers Don&apos;t Expect
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    When a buyer returns an item, TikTok doesn&apos;t simply reverse the transaction. You&apos;re charged a refund administration fee for the processing cost, even though you&apos;re losing the sale.
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                    {[
                        {
                            title: "Refund administration fee: 20% of original referral fee, capped at $5/SKU",
                            desc: "Updated May 2025. On a $50 item where you paid $3 in referral fees, the refund admin fee is $0.60. On a $200 item where the referral fee was $12, the admin fee is $2.40 — but it's capped at $5 regardless of order size.",
                        },
                        {
                            title: "FBT sellers pay an additional $3 return handling fee per order",
                            desc: "If you use FBT, returns trigger a $3.00 flat return handling fee on top of the refund admin fee. This covers TikTok's cost to inspect, grade, and restock (or dispose of) the returned item.",
                        },
                        {
                            title: "Shop Performance Score affects your return shipping cost",
                            desc: "Sellers with a Shop Performance Score (SPS) of 4 or higher only pay 20% of return shipping costs on change-of-mind returns. Standard sellers pay 50%. Maintaining a high SPS is directly profitable — not just reputational.",
                        },
                        {
                            title: "High-return categories compound fee impact",
                            desc: "Apparel, shoes, and home goods typically see 15%–25% return rates on social commerce platforms. Factor return costs into your pricing from day one, especially in these categories. A 20% return rate means you're paying refund fees on 1 in 5 orders.",
                        },
                    ].map(({ title, desc }, i) => (
                        <div key={i} style={{ display: "flex", gap: 16, padding: "18px 20px", background: "#FAFAFA", borderRadius: 14, border: "1px solid #EBEBF5" }}>
                            <span style={{ color: A, fontSize: 18, flexShrink: 0, marginTop: 1 }}>⚠</span>
                            <div>
                                <p style={{ fontWeight: 600, color: "#0D0D1A", margin: "0 0 6px", fontSize: 15 }}>{title}</p>
                                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 6 — Real Examples
      ════════════════════════════════ */}
            <section id="real-examples" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Real Profit Examples: Organic vs Affiliate Sales
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    All examples below assume a US seller at the standard 6% referral fee + 1.02% processing fee = 7.02% combined platform fee. FBT fulfillment at ~$4.28 for lightweight items. No return costs included.
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                            <tr style={{ background: "#0D0D1A" }}>
                                {["Sale Price", "Platform Fee", "FBT Fee", "Organic Payout", "10% Affiliate Payout", "20% Affiliate Payout"].map(h => (
                                    <th key={h} style={{ padding: "13px 14px", textAlign: "left", fontWeight: 600, fontSize: 12, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["$15", "$1.05", "$4.28", "$9.67", "$8.17", "$6.67"],
                                ["$25", "$1.76", "$4.28", "$18.96", "$16.46", "$13.96"],
                                ["$35", "$2.46", "$4.28", "$28.26", "$24.76", "$21.26"],
                                ["$50", "$3.51", "$4.28", "$42.21", "$37.21", "$32.21"],
                                ["$75", "$5.27", "$4.28", "$65.45", "$57.95", "$50.45"],
                                ["$100", "$7.02", "$4.28", "$88.70", "$78.70", "$68.70"],
                                ["$150", "$10.53", "$4.28", "$135.19", "$120.19", "$105.19"],
                                ["$200", "$14.04", "$4.28", "$181.68", "$161.68", "$141.68"],
                            ].map(([price, platform, fbt, organic, aff10, aff20], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "12px 14px", fontWeight: 600, color: "#0D0D1A" }}>{price}</td>
                                    <td style={{ padding: "12px 14px", color: "#888" }}>{platform}</td>
                                    <td style={{ padding: "12px 14px", color: "#888" }}>{fbt}</td>
                                    <td style={{ padding: "12px 14px", color: "#16a34a", fontWeight: 600 }}>{organic}</td>
                                    <td style={{ padding: "12px 14px", color: "#555", fontWeight: 500 }}>{aff10}</td>
                                    <td style={{ padding: "12px 14px", color: A, fontWeight: 500 }}>{aff20}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                    FBT fee shown as ~$4.28 (lightweight single unit). Actual FBT fees vary by weight and unit count. Affiliate payouts show your earnings after platform fee + FBT + affiliate commission.
                </p>
            </section>

            {/* ════════════════════════════════
          SECTION 7 — Competitors
      ════════════════════════════════ */}
            <section id="vs-competitors" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    TikTok Shop Fees vs Amazon, eBay & Etsy (2026)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    On base platform fees alone, TikTok Shop is one of the most competitive marketplaces. The picture changes dramatically once affiliate commissions are included. Here&apos;s how the full cost stacks up on a $50 item:
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 16 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Platform", "Base Fee on $50", "With Fulfillment", "You Keep (no affiliate)", "You Keep (15% affiliate)"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 12, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["TikTok Shop", "~$3.51 (7%)", "+ $4.28 FBT", "~$42.21", "~$34.71"],
                                ["Amazon (FBA)", "~$7.50 (15%)", "+ ~$3.22 FBA", "~$39.28", "N/A"],
                                ["eBay", "~$7.20 (13.6%+)", "Seller ships", "~$42.80", "N/A"],
                                ["Etsy", "~$3.25 + $0.20 listing", "Seller ships", "~$46.55", "N/A"],
                                ["Poshmark", "$10.00 (20%)", "Buyer pays", "~$40.00", "N/A"],
                            ].map(([platform, base, fulfillment, organic, affiliate], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{platform}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{base}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{fulfillment}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{organic}</td>
                                    <td style={{ padding: "13px 16px", color: i === 0 ? "#16a34a" : "#ccc", fontWeight: i === 0 ? 600 : 400 }}>{affiliate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 20 }}>
                    Estimates based on 2026 published fee rates. Always verify current rates in your Seller Center.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    TikTok Shop&apos;s organic payout is competitive with eBay and better than Amazon on a $50 item. But the 15% affiliate commission swings the comparison dramatically — your $42.21 organic payout drops to $34.71 with affiliates, making TikTok&apos;s effective cost higher than every comparison platform. That&apos;s the trade-off: affiliate-driven volume at a higher per-unit cost, vs. slower organic traffic at lower cost.
                </p>
            </section>

            {/* ════════════════════════════════
          SECTION 8 — Reduce Fees
      ════════════════════════════════ */}
            <section id="reduce-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    7 Ways to Protect Your TikTok Shop Margins in 2026
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
                    TikTok Shop&apos;s fee structure rewards sellers who understand every layer — and punishes those who price on the 6% headline rate alone. Here&apos;s how to stay profitable:
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
                    {[
                        {
                            num: "01",
                            title: "Price Using the 7%+ Combined Rate, Not Just 6%",
                            desc: "The referral fee is 6%, but the blended effective rate including processing is 7%–8.2% for most US sellers. Add FBT fulfillment (~$4.28 for lightweight items) and your true cost-per-order is significantly higher. Build your minimum price around the full all-in cost, not the headline.",
                        },
                        {
                            num: "02",
                            title: "Capitalize on the New Seller 3% Promotion",
                            desc: "If you're new to TikTok Shop, make your first sale within 60 days of onboarding to unlock the 3% referral rate for your first 30 days. This is effectively a 3% margin improvement on every sale during the promotional period — use it to test products and build sales velocity.",
                        },
                        {
                            num: "03",
                            title: "Set Affiliate Commissions Deliberately — and Tiered",
                            desc: "Don't set a single commission rate for all affiliates. Set a base open-program rate of 8%–10% for general creators, and negotiate 15%–20% only for proven high-converters. The 30-day commission lock means a casually-set high rate locks you in — be intentional before publishing.",
                        },
                        {
                            num: "04",
                            title: "Use FBT Multi-Unit Pricing to Your Advantage",
                            desc: "Since January 2026, FBT multi-unit fulfillment fees dropped by up to 24% for 2–4+ item orders. Bundle products, offer volume discounts, and encourage buyers to add more items to their cart. The $0.30 fixed component in processing fees is also shared across bundle items, not charged per unit.",
                        },
                        {
                            num: "05",
                            title: "Reduce Returns to Avoid Compounding Fee Losses",
                            desc: "Returns cost you the sale, the referral fee (minus admin fee), the FBT return handling fee ($3), and potentially outbound shipping. High-return categories like apparel need crystal-clear sizing guides, accurate photos, and detailed descriptions. Every return prevented saves you 4+ compounding costs.",
                        },
                        {
                            num: "06",
                            title: "Maintain a High Shop Performance Score (SPS)",
                            desc: "An SPS of 4+ cuts your change-of-mind return shipping cost from 50% to 20% — a direct margin improvement on every return. SPS is driven by on-time shipment, low cancellation rate, and buyer satisfaction. Treat it as a financial metric, not just a reputation score.",
                        },
                        {
                            num: "07",
                            title: "Calculate Full Unit Economics Before Every Product Launch",
                            desc: "Before adding a product to TikTok Shop, calculate your break-even price at three scenarios: organic only, 10% affiliate, and 20% affiliate. Products with thin margins that work at 7% fees may be unprofitable the moment an affiliate gets involved. Know your numbers before you go live.",
                        },
                    ].map(({ num, title, desc }) => (
                        <div key={num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                            <span style={{ fontSize: 30, fontWeight: 800, color: A_MID, lineHeight: 1, flexShrink: 0, width: 40, paddingTop: 2 }}>{num}</span>
                            <div>
                                <p style={{ fontWeight: 600, color: "#0D0D1A", margin: "0 0 6px", fontSize: 15 }}>{title}</p>
                                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 9 — Feescal CTA
      ════════════════════════════════ */}
            <section id="calculator" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How Feescal Makes TikTok Shop Fee Calculations Instant
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    TikTok Shop has the most complex fee structure of any major resale platform. Referral fee + processing fee + FBT fulfillment + affiliate commission + return risk — all variable, all interacting. Calculating your true unit economics manually for every product, at every possible affiliate commission level, before deciding whether to list on TikTok Shop vs eBay vs Etsy is simply not realistic.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Feescal is built for exactly this problem. Enter your price, and instantly see:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                        "Your exact TikTok Shop payout after referral and processing fees",
                        "Side-by-side profit comparison across TikTok Shop, eBay, Poshmark, Grailed, StockX, Whatnot, and 2 more platforms",
                        "Which marketplace gives you the highest net margin on that specific item and price point",
                        "Real-time results as you adjust price, cost of goods, and shipping inputs",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, flexShrink: 0 }}>→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
                    For sellers deciding whether TikTok Shop&apos;s affiliate volume justifies the higher per-unit cost vs. a static listing on eBay, the cross-platform comparison gives you the answer before you commit inventory. You&apos;ll know in seconds which platform maximizes your margin — not after three weeks of sales and a disappointing payout report.
                </p>

                {/* CTA Block */}
                <div style={{ background: `linear-gradient(135deg, ${A} 0%, #FF6B8A 100%)`, borderRadius: 20, padding: "52px 40px", textAlign: "center" as const }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 10px", lineHeight: 1.25 }}>
                        Know Your TikTok Shop Profit Before You List
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, margin: "0 0 28px", lineHeight: 1.65 }}>
                        Calculate your true payout after all fees and compare across 8 platforms instantly — free, no account needed.
                    </p>
                    <a
                        href="/calculator"
                        style={{ display: "inline-block", background: "white", color: A, fontWeight: 700, padding: "14px 32px", borderRadius: 12, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                    >
                        Try Feescal Free →
                    </a>
                </div>
            </section>

            {/* ── CONCLUSION ── */}
            <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Bottom Line: TikTok Shop&apos;s 6% Is Just the Starting Point
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    TikTok Shop&apos;s 6% referral fee is genuinely competitive for a platform with TikTok&apos;s reach and social commerce capabilities. But it&apos;s not the number that determines whether your business is profitable — the affiliate commission rate you set, the FBT fees on every order, the refund costs on returns, and the processing fee on top of the referral rate are what determine your actual margin.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    The sellers who profit consistently on TikTok Shop in 2026 are the ones who price using the full 7%+ combined platform rate, set affiliate commissions deliberately with the 30-day lock in mind, maintain a high Shop Performance Score to reduce return costs, and know in advance whether organic or affiliate traffic makes their specific products viable.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    Use the tables and strategies above as your reference — and let Feescal do the cross-platform math so every product decision is backed by real numbers before the first unit ships.
                </p>
            </section>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 24 }} />
            <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                Last updated: March 2026. TikTok Shop fee rates, FBT pricing, and promotional programs are subject to change. Always verify current rates in your TikTok Seller Center before listing.
            </p>
        </article>
    );
}