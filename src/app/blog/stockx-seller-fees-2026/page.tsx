export const metadata = {
    title: "StockX Seller Fees in 2026: Complete Guide (Updated Seller Levels + March Fee Changes)",
    description:
        "How much does StockX take per sale in 2026? Break down the 9%–7% transaction fee by seller level, 3% processing fee, shipping costs, Flex fees, and the March 2026 updates — plus 7 strategies to keep more of every sale.",
    keywords: [
        "StockX seller fees 2026",
        "how much does StockX take",
        "StockX fee structure 2026",
        "StockX seller levels fees",
        "StockX 9% fee",
        "StockX fee calculator",
        "StockX transaction fee",
        "StockX payment processing fee",
        "StockX profit calculator",
        "reduce StockX fees",
        "StockX seller level benefits",
        "StockX Flex fees 2026",
        "StockX vs eBay vs Grailed fees",
    ],
};

// 60-30-10 Color System
// 60% → #FFFFFF / #FAFAFA  (white/off-white — dominant backgrounds)
// 30% → #0D0D1A / #555     (dark text — structure and body)
// 10% → #1A7F5A            (StockX-green accent — highlights, CTAs, badges)

const A = "#1A7F5A";
const A_LIGHT = "#EDFAF4";
const A_MID = "#A8DECA";

export default function StockXFeesGuide() {
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
                StockX Seller Fees in 2026: Complete Guide (Updated Seller Levels + March Fee Changes)
            </h1>

            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.85, marginBottom: 28 }}>
                StockX fees aren&apos;t a single flat rate — they&apos;re a tiered system where your transaction fee drops the more you sell, on top of a fixed 3% payment processing charge on every sale. In March 2026, StockX also rolled out significant updates to its Flex program fees and shipping costs. This guide breaks down every charge, what changed, how your seller level affects what you actually keep, and exactly how to price for profit.
            </p>

            {/* ── AUTHOR ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: A_MID, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: A }}>F</div>
                <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0D0D1A", margin: 0 }}>Feescal Editorial Team</p>
                    <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>March 15, 2026 · 11 min read</p>
                </div>
            </div>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 44 }} />

            {/* ── TOC ── */}
            <div style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderLeft: `4px solid ${A}`, borderRadius: "0 16px 16px 0", padding: "24px 28px", marginBottom: 52 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>In This Guide</p>
                <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                    {[
                        ["#how-fees-work", "How StockX Fees Work"],
                        ["#seller-levels", "Seller Levels & Transaction Fee Tiers (2026)"],
                        ["#march-2026-changes", "March 2026 Fee Changes: What's New"],
                        ["#real-examples", "Real Profit Examples by Seller Level"],
                        ["#flex-program", "StockX Flex Fees Explained"],
                        ["#vs-competitors", "StockX Fees vs Grailed, eBay & Poshmark"],
                        ["#reduce-fees", "7 Ways to Reduce Your StockX Fees"],
                        ["#calculator", "How Feescal Makes the Math Instant"],
                    ].map(([href, label]) => (
                        <li key={href} style={{ fontSize: 14, color: "#555" }}>
                            <a href={href} style={{ color: "#555", textDecoration: "none" }}>{label}</a>
                        </li>
                    ))}
                </ol>
            </div>

            {/* ════════════════════════════════
          SECTION 1 — How Fees Work
      ════════════════════════════════ */}
            <section id="how-fees-work" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How StockX Fees Work: Two Charges on Every Sale
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Every successful StockX sale involves two deductions from your payout: a transaction fee that varies based on your seller level, and a flat 3% payment processing fee that applies to everyone regardless of level. Both are calculated on the final sale price.
                </p>

                {/* Two-column fee overview */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                    <div style={{ background: A_LIGHT, border: `1.5px solid ${A_MID}`, borderRadius: 16, padding: "24px 24px 20px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Transaction Fee</p>
                        <p style={{ fontSize: 40, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>7%–9%</p>
                        <p style={{ fontSize: 13, color: "#777", margin: 0, lineHeight: 1.65 }}>Depends on your seller level. New sellers start at 9%. Top-tier (Level 5) sellers pay 7%.</p>
                    </div>
                    <div style={{ background: "#FAFAFA", border: "1.5px solid #EBEBF5", borderRadius: 16, padding: "24px 24px 20px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Payment Processing Fee</p>
                        <p style={{ fontSize: 40, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>3%</p>
                        <p style={{ fontSize: 13, color: "#777", margin: 0, lineHeight: 1.65 }}>Fixed rate on every sale. Applied on top of the transaction fee, regardless of seller level.</p>
                    </div>
                </div>

                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Beyond these two core fees, sellers also need to account for:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {[
                        "Shipping fee: StockX provides prepaid labels to ship to their authentication center. As of March 2026, US domestic sellers pay $5 per standard shipment (increased from $4).",
                        "Flex storage fees: If you use StockX Flex (pre-verified storage), monthly storage fees apply to unsold items after 30 days.",
                        "Unfulfilled sale penalty: A $15 penalty applies if you fail to complete a sale. This is monitored monthly and charged the following month — Level 3–5 sellers only.",
                        "Minimum transaction fees: Regardless of sale price, minimum fees apply based on your local currency. Small-dollar items may pay a higher effective rate.",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, marginTop: 3, flexShrink: 0 }}>✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ════════════════════════════════
          SECTION 2 — Seller Levels
      ════════════════════════════════ */}
            <section id="seller-levels" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    StockX Seller Levels & Transaction Fee Tiers (2026)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    StockX&apos;s seller level system is the most important variable in your fee calculation. Your level is determined by your sales activity each calendar quarter — either by number of completed sales or total sales value in USD, whichever you hit first. Levels reset quarterly, so you must maintain volume to keep your lower rate.
                </p>

                {/* Seller levels table */}
                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: "#0D0D1A" }}>
                                {["Level", "Quarterly Sales (items)", "Quarterly Sales (value)", "Transaction Fee", "Total w/ Processing"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Level 1", "No minimum", "No minimum", "9.0%", "12.0%"],
                                ["Level 2", "12+ sales", "$1,500+", "8.5%", "11.5%"],
                                ["Level 3", "40+ sales", "$5,000+", "8.0%", "11.0%"],
                                ["Level 4", "200+ sales", "$25,000+", "7.5%", "10.5%"],
                                ["Level 5", "800+ sales", "$100,000+", "7.0%", "10.0%"],
                            ].map(([level, items, value, txFee, total], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 700, color: "#0D0D1A" }}>{level}</td>
                                    <td style={{ padding: "13px 16px", color: "#666" }}>{items}</td>
                                    <td style={{ padding: "13px 16px", color: "#666" }}>{value}</td>
                                    <td style={{ padding: "13px 16px", color: A, fontWeight: 600 }}>{txFee}</td>
                                    <td style={{ padding: "13px 16px", fontWeight: 700, color: "#0D0D1A" }}>{total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "16px 20px", fontSize: 14, color: "#0D4D35", lineHeight: 1.7 }}>
                    <strong>Important:</strong> Levels are assessed quarterly and reset. If you hit Level 3 in Q1 but sell nothing in Q2, you drop back to Level 1 in Q3. Consistency matters more than occasional volume spikes for maintaining lower fees long-term.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 3 — March 2026 Changes
      ════════════════════════════════ */}
            <section id="march-2026-changes" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    March 2026 Fee Changes: What&apos;s New on StockX
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    StockX updated its seller program effective March 1, 2026. These are the changes every active seller needs to know:
                </p>

                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14, marginBottom: 24 }}>
                    {[
                        {
                            tag: "Flex Change",
                            tagColor: A,
                            tagBg: A_LIGHT,
                            title: "Flex Fulfillment Fee Removed",
                            desc: "The $5 USD Flex fulfillment fee has been eliminated across all seller levels. This is a meaningful saving for high-volume Flex sellers who were previously paying this on every item sold through Flex.",
                        },
                        {
                            tag: "Flex Change",
                            tagColor: A,
                            tagBg: A_LIGHT,
                            title: "Flex Transaction Fees Increased by 2%",
                            desc: "To offset the removed fulfillment fee, Flex transaction fees increased by 2% across all levels. For sales under $250, StockX says the $5 fulfillment fee removal fully offsets the 2% increase — so earnings stay the same or improve. For higher-value Flex items, the net impact varies.",
                        },
                        {
                            tag: "Standard Change",
                            tagColor: A,
                            tagBg: "#F5F5F5",
                            title: "US Seller Shipping Fee: $4 → $5",
                            desc: "For standard (non-Flex) sales, the US domestic seller shipping fee increased from $4 to $5. Non-US seller shipping fees remain unchanged. This $1 increase applies on every standard domestic sale.",
                        },
                        {
                            tag: "Standard Change",
                            tagColor: A,
                            tagBg: "#F5F5F5",
                            title: "Flex Quick Sale Discount Removed",
                            desc: "The 1% Flex Quick Sale Discount, previously available to sellers who shipped quickly, has been removed. Sellers who relied on this for an extra percentage point off their fee will need to adjust their margin expectations.",
                        },
                        {
                            tag: "Payout Change",
                            tagColor: A,
                            tagBg: "#FFFBF0",
                            title: "Early Seller Payout No Longer Applies to Standard Sales",
                            desc: "Early Seller Payout — previously available to select sellers — no longer applies to standard non-Flex sales. This affects cash flow timing for sellers who used it to fund new inventory purchases.",
                        },
                    ].map(({ tag, tagColor, tagBg, title, desc }, i) => (
                        <div key={i} style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderRadius: 14, padding: "18px 20px" }}>
                            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                                <span style={{ background: tagBg, color: tagColor, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.06em", textTransform: "uppercase" as const }}>{tag}</span>
                            </div>
                            <p style={{ fontWeight: 600, color: "#0D0D1A", margin: "0 0 6px", fontSize: 15 }}>{title}</p>
                            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 4 — Real Examples
      ════════════════════════════════ */}
            <section id="real-examples" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Real Profit Examples by Seller Level
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    All examples below are for standard (non-Flex) US domestic sales and include the $5 shipping fee deducted from payout. Fees are calculated on the sale price only.
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 16 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                        <thead>
                            <tr style={{ background: "#0D0D1A" }}>
                                {["Sale Price", "Level 1 (12%)", "Level 2 (11.5%)", "Level 3 (11%)", "Level 4 (10.5%)", "Level 5 (10%)"].map(h => (
                                    <th key={h} style={{ padding: "13px 14px", textAlign: "left", fontWeight: 600, fontSize: 12, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["$75", "$61.00", "$61.38", "$61.75", "$62.13", "$62.50"],
                                ["$100", "$83.00", "$83.50", "$84.00", "$84.50", "$85.00"],
                                ["$150", "$127.00", "$127.75", "$128.50", "$129.25", "$130.00"],
                                ["$200", "$171.00", "$172.00", "$173.00", "$174.00", "$175.00"],
                                ["$300", "$259.00", "$260.50", "$262.00", "$263.50", "$265.00"],
                                ["$500", "$435.00", "$437.50", "$440.00", "$442.50", "$445.00"],
                                ["$1,000", "$875.00", "$880.00", "$885.00", "$890.00", "$895.00"],
                            ].map(([price, l1, l2, l3, l4, l5], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "12px 14px", fontWeight: 600, color: "#0D0D1A" }}>{price}</td>
                                    <td style={{ padding: "12px 14px", color: "#888" }}>{l1}</td>
                                    <td style={{ padding: "12px 14px", color: "#666" }}>{l2}</td>
                                    <td style={{ padding: "12px 14px", color: "#555" }}>{l3}</td>
                                    <td style={{ padding: "12px 14px", color: "#444" }}>{l4}</td>
                                    <td style={{ padding: "12px 14px", color: A, fontWeight: 600 }}>{l5}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 20 }}>
                    Payouts calculated as: Sale price − (transaction fee + 3% processing) − $5 shipping. Actual payouts may vary based on minimum fee thresholds and currency.
                </p>
                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "#0D4D35", lineHeight: 1.7 }}>
                    <strong>The level difference is real:</strong> On a $500 sale, a Level 5 seller takes home $10 more than a Level 1 seller. Across 100 sales per quarter, that&apos;s $1,000 in additional earnings — purely from maintaining seller level.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 5 — Flex Program
      ════════════════════════════════ */}
            <section id="flex-program" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    StockX Flex Fees Explained (Post-March 2026)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    StockX Flex lets eligible sellers store pre-verified inventory at StockX warehouses. When a Flex item sells, it ships immediately without the seller needing to send anything. This delivers a faster buyer experience — and historically, Flex sellers paid lower transaction fees to compensate for the storage cost and added step.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    After the March 2026 changes, here&apos;s the current Flex fee picture:
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14, marginBottom: 20 }}>
                    {[
                        { title: "No more $5 fulfillment fee", desc: "The flat $5 Flex fulfillment fee per sale has been removed. For sellers moving lots of Flex inventory, this eliminates a fixed drag on every transaction." },
                        { title: "Transaction fee increased by 2%", desc: "Flex transaction fees are now 2 percentage points higher than standard fees at each level. At Level 1, that's 11% Flex vs 9% standard. Combined with 3% processing, the total Flex rate is 14% at Level 1." },
                        { title: "Breakeven point: $250", desc: "For Flex sales under $250, StockX says the removal of the $5 fulfillment fee fully offsets the 2% fee increase. Above $250, sellers pay more per sale under the new structure than the old one." },
                        { title: "Storage fees still apply", desc: "Monthly storage fees apply to items held in Flex beyond 30 days. Fee amounts vary by region and duration. Factor these in when deciding which inventory to send to Flex." },
                    ].map(({ title, desc }, i) => (
                        <div key={i} style={{ display: "flex", gap: 16, padding: "18px 20px", background: "#FAFAFA", borderRadius: 14, border: "1px solid #EBEBF5" }}>
                            <span style={{ color: A, fontSize: 18, flexShrink: 0, marginTop: 1 }}>→</span>
                            <div>
                                <p style={{ fontWeight: 600, color: "#0D0D1A", margin: "0 0 6px", fontSize: 15 }}>{title}</p>
                                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 6 — Competitors
      ════════════════════════════════ */}
            <section id="vs-competitors" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    StockX Fees vs Grailed, eBay & Poshmark (2026)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    StockX sits in a unique position — its authentication-first model means fees are higher than some platforms, but the authenticated marketplace commands premium pricing that can offset the cost. Here&apos;s how it stacks up on a $250 sneaker or streetwear item:
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 16 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Platform", "Fee on $250 Sale", "You Keep", "Authentication?", "Best For"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["StockX (Lv1)", "~$35 (12% + $5 ship)", "~$210", "Yes", "Sneakers, hype items"],
                                ["StockX (Lv5)", "~$30 (10% + $5 ship)", "~$215", "Yes", "Sneakers, hype items"],
                                ["Grailed", "~$31.74 (~12.7%)", "~$218", "No", "Designer, streetwear"],
                                ["eBay", "~$34.40 (~13.8%)", "~$216", "No", "Broad audience"],
                                ["Poshmark", "$50.00 (20%)", "$200", "No", "Broad fashion"],
                                ["Depop", "~$25.00 (10%)", "~$225", "No", "Gen Z / vintage"],
                            ].map(([platform, fee, keep, auth, bestFor], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{platform}</td>
                                    <td style={{ padding: "13px 16px", color: "#DC2626", fontWeight: 500 }}>{fee}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{keep}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{auth}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{bestFor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 20 }}>
                    Estimates based on 2026 published fee rates. Actual fees vary by seller level, location, and item category.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    StockX&apos;s combined fees are higher than Grailed and comparable to eBay. But for authenticated goods — particularly sneakers and hype streetwear — StockX&apos;s buyer base will often pay a premium that more than compensates for the fee difference. The right platform depends on your item and audience, not just the lowest fee rate.
                </p>
            </section>

            {/* ════════════════════════════════
          SECTION 7 — Reduce Fees
      ════════════════════════════════ */}
            <section id="reduce-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    7 Ways to Reduce Your StockX Fees in 2026
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
                    StockX fees are structured to reward volume — the more consistently you sell, the lower your rate. Here&apos;s how to work the system effectively:
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
                    {[
                        {
                            num: "01",
                            title: "Prioritize Hitting Level 2 Fast",
                            desc: "Level 2 only requires 12 sales or $1,500 in quarterly revenue — achievable for most sellers in the first few weeks of a quarter. That one level jump saves 0.5% on every transaction. Three sales a week is all it takes.",
                        },
                        {
                            num: "02",
                            title: "Price With the Full 12%+ in Mind, Not Just 9%",
                            desc: "New sellers frequently price based on the 9% transaction fee headline and are surprised when their payout is lower. At Level 1, your real combined rate is 12% (9% + 3%) plus the $5 shipping deduction. Always calculate using the true total.",
                        },
                        {
                            num: "03",
                            title: "Maintain Quarterly Consistency Over Spikes",
                            desc: "Seller levels reset quarterly. A massive Q1 won't protect your Q3 rate if you go quiet in Q2. Build a sustainable selling cadence — even 3–4 sales per week keeps most sellers in Level 2–3 territory and protects a full percentage point off fees year-round.",
                        },
                        {
                            num: "04",
                            title: "Use Flex Strategically for Sub-$250 Items",
                            desc: "After the March 2026 changes, Flex is most advantageous on items under $250 where the $5 fulfillment fee removal offsets the 2% fee increase. For high-value items, run the numbers both ways before sending inventory to storage.",
                        },
                        {
                            num: "05",
                            title: "Set Asks Strategically With Fees Baked In",
                            desc: "When setting your Ask price, work backwards from your target payout. If you want to clear $180 on a sale at Level 1, you need to ask at least $206 ($180 ÷ 0.88) plus the $5 shipping deduction. Adjust for your level accordingly.",
                        },
                        {
                            num: "06",
                            title: "List Crossplatform to Reduce Dependency",
                            desc: "StockX&apos;s authentication premium means it&apos;s often the right venue for authenticated hype items — but not always. For items with strong Grailed or eBay demand, compare net payouts across platforms before committing to StockX's higher fee structure.",
                        },
                        {
                            num: "07",
                            title: "Calculate Net Profit Before Every Listing",
                            desc: "The most consistent mistake StockX sellers make is pricing based on comps without accounting for their specific seller level fees plus shipping. A $200 comp doesn't mean a $200 payout. Always calculate your exact net before you set your Ask.",
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
          SECTION 8 — Feescal CTA
      ════════════════════════════════ */}
            <section id="calculator" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How Feescal Makes StockX Fee Calculations Instant
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    StockX fees are more complex than most platforms. Your payout depends on your seller level, whether the sale is standard or Flex, your region&apos;s shipping cost, and whether minimum fee thresholds apply. Calculating this manually — let alone comparing it against Grailed, eBay, and Poshmark at the same time — is where most sellers either give up or make pricing mistakes.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Feescal handles all of it in one view. Enter your item price and instantly see:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                        "Your exact StockX payout by seller level — so you know what you actually keep",
                        "Side-by-side profit comparison across StockX, Grailed, eBay, Poshmark, Depop, and 3 more platforms",
                        "Which marketplace gives you the best net on that specific item and price point",
                        "Real-time updates as you adjust price, cost of goods, and shipping inputs",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, flexShrink: 0 }}>→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
                    For sneaker and streetwear sellers who crosslist across StockX, Grailed, and eBay, the cross-platform comparison is the most valuable part. Instead of calculating three separate fee structures on three tabs, you see every platform&apos;s payout side by side — and you know before you list where your margin is highest.
                </p>

                {/* CTA Block */}
                <div style={{ background: `linear-gradient(135deg, ${A} 0%, #2DB37E 100%)`, borderRadius: 20, padding: "52px 40px", textAlign: "center" as const }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 10px", lineHeight: 1.25 }}>
                        Know Your StockX Profit Before You List
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, margin: "0 0 28px", lineHeight: 1.65 }}>
                        Calculate your exact payout by seller level and compare across 8 platforms instantly — free, no account needed.
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
                    Bottom Line: StockX Fees Reward Consistency — Know Your Level, Know Your Rate
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    StockX isn&apos;t the lowest-fee marketplace for fashion resellers — Grailed and Depop both undercut it on commission. But for authenticated sneakers and hype streetwear, StockX&apos;s buyer base and price discovery model regularly deliver sale prices that more than compensate for the fee gap. The real question isn&apos;t just &quot;what does StockX charge&quot; — it&apos;s &quot;what do I actually keep after fees, and is that better than the alternative?&quot;
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    The sellers who maximize StockX profitability in 2026 are the ones who know their exact seller level rate, build fees into every Ask price before listing, maintain quarterly volume to protect their level, and use a cross-platform calculator to validate that StockX is the right venue for each specific item.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    Use the tables and strategies above as your reference — and let Feescal handle the math so every listing decision is backed by real numbers.
                </p>
            </section>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 24 }} />
            <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                Last updated: March 2026. StockX fee rates and seller level thresholds are subject to change. Always verify current rates in your StockX seller dashboard before listing.
            </p>
        </article>
    );
}