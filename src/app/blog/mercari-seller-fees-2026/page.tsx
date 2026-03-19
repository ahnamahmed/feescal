export const metadata = {
    title: "Mercari Seller Fees in 2026: Complete Guide (10% Fee, No Processing Charge + Jan Updates)",
    description:
        "How much does Mercari take per sale in 2026? A flat 10% on item price plus buyer-paid shipping — with no payment processing fee for sellers. Break down every charge, the 2025 fee reversal history, payout options, and 7 proven tips to protect your margins.",
    keywords: [
        "Mercari seller fees 2026",
        "how much does Mercari take",
        "Mercari fee structure 2026",
        "Mercari 10% fee",
        "Mercari fee calculator",
        "Mercari selling fees breakdown",
        "Mercari profit calculator",
        "reduce Mercari fees",
        "Mercari vs eBay fees",
        "Mercari vs Poshmark fees",
        "Mercari commission 2026",
        "how to sell on Mercari profitably",
        "Mercari payment processing fee 2026",
    ],
};

// 60-30-10 Color System
// 60% → #FFFFFF / #FAFAFA  (white/off-white — dominant backgrounds)
// 30% → #0D0D1A / #555     (dark text — structure and body)
// 10% → #E84060            (Mercari-red accent — highlights, CTAs, badges)

const A = "#6C47FF";
const A_LIGHT = "#F0F2FF";
const A_MID = "#B4A7FF";

export default function MercariFeesGuide() {
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
                Mercari Seller Fees in 2026: Complete Guide (10% Fee, No Processing Charge + January Updates)
            </h1>

            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.85, marginBottom: 28 }}>
                Mercari&apos;s fee structure has been through more changes in the past two years than most platforms see in a decade — zero fees, then fees back, then payment processing removed. In 2026, the structure is clean: a flat 10% selling fee on the combined item price and buyer-paid shipping, no payment processing charge for sellers, and free direct deposit withdrawals. Here&apos;s exactly what you pay, why it changed, and how to price every listing for maximum profit.
            </p>

            {/* ── AUTHOR ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: A_MID, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: A }}>F</div>
                <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0D0D1A", margin: 0 }}>Feescal Editorial Team</p>
                    <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>March 19, 2026 · 10 min read</p>
                </div>
            </div>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 44 }} />

            {/* ── TOC ── */}
            <div style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderLeft: `4px solid ${A}`, borderRadius: "0 16px 16px 0", padding: "24px 28px", marginBottom: 52 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>In This Guide</p>
                <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                    {[
                        ["#fee-structure", "Mercari's 2026 Fee Structure at a Glance"],
                        ["#fee-history", "The Fee Rollercoaster: 2024–2026 Explained"],
                        ["#shipping-fees", "How the 10% Fee Applies to Shipping"],
                        ["#payout-fees", "Withdrawal Fees: Direct Deposit vs Instant Pay"],
                        ["#real-examples", "Real Profit Examples at Every Price Point"],
                        ["#vs-competitors", "Mercari Fees vs eBay, Poshmark & Depop"],
                        ["#reduce-fees", "7 Ways to Maximize Your Mercari Profit"],
                        ["#calculator", "How Feescal Makes the Math Instant"],
                    ].map(([href, label]) => (
                        <li key={href} style={{ fontSize: 14, color: "#555" }}>
                            <a href={href} style={{ color: "#555", textDecoration: "none" }}>{label}</a>
                        </li>
                    ))}
                </ol>
            </div>

            {/* ════════════════════════════════
          SECTION 1 — Fee Structure
      ════════════════════════════════ */}
            <section id="fee-structure" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Mercari&apos;s 2026 Fee Structure at a Glance
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    As of January 6, 2025 (effective across all listings by February 2026), Mercari uses a single flat selling fee with no separate payment processing charge for sellers. It&apos;s one of the simplest structures in resale — but the &quot;10%&quot; headline has an important nuance most sellers miss.
                </p>

                {/* Core fee card */}
                <div style={{ background: A_LIGHT, border: `1.5px solid ${A_MID}`, borderRadius: 16, padding: "28px 28px 24px", marginBottom: 28 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Mercari Selling Fee — All Categories</p>
                    <p style={{ fontSize: 48, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>10%</p>
                    <p style={{ fontSize: 14, color: "#666", margin: 0, lineHeight: 1.65 }}>
                        Applied to the <strong>combined total</strong> of your item price plus any shipping the buyer pays. Not just the item price — the full transaction amount including shipping.
                    </p>
                </div>

                {/* Full fee table */}
                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 24 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Fee Type", "Rate", "Who Pays", "Notes"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Selling fee", "10%", "Seller", "On item price + buyer-paid shipping"],
                                ["Payment processing fee", "None ✓", "N/A", "Eliminated Jan 6, 2025"],
                                ["Buyer Protection fee", "3.6%", "Buyer", "On item + shipping — not your cost"],
                                ["Listing fee", "Free", "N/A", "No cost to list or relist"],
                                ["Direct deposit", "Free", "Seller", "$2 fee only on failed transactions"],
                                ["Instant Pay", "$3 flat", "Seller", "Funds to debit card within minutes"],
                                ["Authentication", "$5/item", "Seller", "+ $10 for digital certificate"],
                                ["Shipping (Mercari label)", "Discounted", "Varies", "54% savings vs. retail; includes $200 protection"],
                            ].map(([type, rate, pays, notes], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 500, color: "#0D0D1A" }}>{type}</td>
                                    <td style={{ padding: "13px 16px", color: rate.includes("None") || rate === "Free" ? "#16a34a" : A, fontWeight: 600 }}>{rate}</td>
                                    <td style={{ padding: "13px 16px", color: "#666" }}>{pays}</td>
                                    <td style={{ padding: "13px 16px", color: "#888", fontSize: 13 }}>{notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {[
                        "No listing fees — list as many items as you want at zero upfront cost.",
                        "No category-specific rates — electronics, clothing, collectibles, and everything else pays the same 10%.",
                        "No tiers or seller levels — a new seller and a power seller pay identical rates.",
                        "The buyer's 3.6% protection fee is charged on top of your listing price — it doesn't come out of your payout.",
                        "Mercari prepaid labels include up to $200 in shipping protection at no extra cost.",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, marginTop: 3, flexShrink: 0 }}>✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ════════════════════════════════
          SECTION 2 — Fee History
      ════════════════════════════════ */}
            <section id="fee-history" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    The Fee Rollercoaster: Mercari&apos;s 2024–2026 Changes Explained
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    Mercari has changed its fee structure more dramatically than any other major resale platform in the past two years. Understanding the history helps you understand why the current structure exists — and why some old listings may still show outdated fee information.
                </p>

                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14, marginBottom: 20 }}>
                    {[
                        {
                            date: "Before March 2024",
                            color: "#888",
                            bg: "#F5F5F5",
                            title: "Original structure: 10% selling fee + 2.9% + $0.50 processing",
                            desc: "Sellers paid a 10% commission plus a payment processing fee on every sale. Total effective rate was roughly 13%–14% per transaction.",
                        },
                        {
                            date: "March 27, 2024",
                            color: "#16a34a",
                            bg: "#F0FFF8",
                            title: "Zero seller fees introduced",
                            desc: "Mercari eliminated all seller fees entirely — a bold move to compete with Depop's zero-fee model. Sellers kept 100% of sale proceeds. The catch: buyer-side fees were introduced to compensate, making items more expensive for buyers.",
                        },
                        {
                            date: "Mid-2024",
                            color: "#DC2626",
                            bg: "#FFF5F5",
                            title: "Zero-fee experiment backfires",
                            desc: "The buyer-side fees made Mercari listings more expensive than competitors. Buyers compared prices and found better value elsewhere. Transaction volume dropped. Mercari acknowledged the model 'underserved buyers, wasn't helping sellers sell more, and ultimately negatively impacted Mercari.'",
                        },
                        {
                            date: "January 6, 2025",
                            color: A,
                            bg: A_LIGHT,
                            title: "Current structure launched: 10% seller fee, zero processing fee",
                            desc: "Mercari reinstated the 10% selling fee while permanently eliminating the payment processing fee for sellers. Buyers now pay a 3.6% protection fee instead of a higher buyer service fee. This reduced the buyer's total cost compared to the zero-fee era, improving conversion rates.",
                        },
                        {
                            date: "January 2026",
                            color: A,
                            bg: A_LIGHT,
                            title: "Updated prepaid label rates — 54% average savings vs retail",
                            desc: "Mercari updated all prepaid label pricing effective January 20, 2026, and applied them automatically to all listings by February 16, 2026. The new rates reflect updated 2026 carrier pricing but still offer an average 54% savings vs. retail label costs.",
                        },
                    ].map(({ date, color, bg, title, desc }, i) => (
                        <div key={i} style={{ background: bg, borderRadius: 14, border: "1px solid #EBEBF5", padding: "18px 20px" }}>
                            <span style={{ background: "white", color, fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 100, letterSpacing: "0.06em", border: `1px solid ${color}30`, display: "inline-block", marginBottom: 10 }}>{date}</span>
                            <p style={{ fontWeight: 600, color: "#0D0D1A", margin: "0 0 6px", fontSize: 15 }}>{title}</p>
                            <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ background: "#FFFBF0", borderLeft: "4px solid #FFB830", borderRadius: "0 12px 12px 0", padding: "14px 18px", fontSize: 14, color: "#7a5c00", lineHeight: 1.7 }}>
                    <strong>⚠ If you have old listings:</strong> Any listing created before January 6, 2025 that hasn&apos;t been updated may still operate under the old fee structure (10% + 2.9% + $0.50). Update or relist to ensure you&apos;re on the new, more favorable 10%-only structure.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 3 — Shipping Fees
      ════════════════════════════════ */}
            <section id="shipping-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How the 10% Fee Applies to Shipping — The Detail That Surprises Most Sellers
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    This is the most important and most misunderstood aspect of Mercari&apos;s fee structure. The 10% selling fee is <strong style={{ color: "#0D0D1A" }}>not calculated on your item price alone</strong> — it&apos;s calculated on the combined total of item price plus any shipping the buyer pays.
                </p>

                {/* Example breakdown */}
                <div style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderRadius: 16, padding: "24px", marginBottom: 24 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#888", letterSpacing: "0.06em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>Worked Example: $50 Item, Buyer Pays $8 Shipping</p>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                        {[
                            ["Item price", "$50.00", false],
                            ["Buyer-paid shipping", "$8.00", false],
                            ["Total transaction amount", "$58.00", false],
                            ["Mercari 10% fee (on $58.00)", "−$5.80", true],
                            ["Your payout", "$52.20", false],
                        ].map(([label, value, isDeduction], i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 10, borderBottom: i < 4 ? "1px solid #F0F0F8" : "none" }}>
                                <span style={{ fontSize: 14, color: "#555" }}>{label}</span>
                                <span style={{ fontSize: 14, fontWeight: 600, color: isDeduction ? "#DC2626" : i === 4 ? "#16a34a" : "#0D0D1A" }}>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    Compare that to what many sellers expect — 10% of $50 = $5.00. The real fee is $5.80. On higher shipping amounts or expensive items, this gap grows. Here&apos;s how shipping affects what you actually keep:
                </p>

                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {[
                        {
                            title: "Free shipping: You pay the label, Mercari still charges 10% of the item price",
                            desc: "If you offer free shipping and absorb a $9 label cost, Mercari charges 10% on your item price only (since the buyer paid $0 shipping). But you're out $9 for the label. Free shipping only makes sense when it demonstrably increases your sell price by more than the label cost.",
                        },
                        {
                            title: "Buyer-paid shipping: Mercari takes 10% of the shipping too",
                            desc: "When buyers pay for shipping, that amount is added to your item price before the 10% is calculated. On a $10 shipping charge, you effectively pay $1 in fees on shipping alone. For lightweight items, keep your shipping price lean.",
                        },
                        {
                            title: "Mercari prepaid labels: 54% cheaper than retail, includes tracking",
                            desc: "Using Mercari's prepaid labels gives you discounted rates across USPS, FedEx, and UPS for packages up to 50 lbs. Labels include up to $200 in Shipping Protection. Updated January 2026 rates still offer significant savings over buying labels independently.",
                        },
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
          SECTION 4 — Payout Fees
      ════════════════════════════════ */}
            <section id="payout-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Withdrawal Fees: Direct Deposit vs Instant Pay
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Once your earnings are available (after the buyer rates the transaction or 3 days pass), you have two ways to access your money. The right choice depends on how urgently you need the funds.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                    <div style={{ background: "#F0FFF8", border: "1.5px solid #A8DECA", borderRadius: 16, padding: "24px 22px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Direct Deposit (ACH)</p>
                        <p style={{ fontSize: 36, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>Free</p>
                        <p style={{ fontSize: 13, color: "#777", margin: 0, lineHeight: 1.65 }}>Standard bank transfer. One withdrawal per day. $2 fee only if the transaction fails. 1–3 business days to arrive.</p>
                    </div>
                    <div style={{ background: "#FAFAFA", border: "1.5px solid #EBEBF5", borderRadius: 16, padding: "24px 22px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Instant Pay</p>
                        <p style={{ fontSize: 36, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>$3/use</p>
                        <p style={{ fontSize: 13, color: "#777", margin: 0, lineHeight: 1.65 }}>Funds reach your debit card within minutes. Costs $3 per transaction regardless of amount.</p>
                    </div>
                </div>
                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "#0D0D1A", lineHeight: 1.7 }}>
                    <strong>Tip:</strong> At high volumes, Instant Pay at $3 per withdrawal adds up fast. A seller withdrawing daily over 30 days pays $90/month just in withdrawal fees. Batch your withdrawals and use Direct Deposit unless you genuinely need the funds immediately.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 5 — Real Examples
      ════════════════════════════════ */}
            <section id="real-examples" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Real Profit Examples at Every Price Point
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    All examples below assume buyer-paid shipping of $8.00 (approximate Mercari label for a 1–2 lb item). Fee = 10% of (item price + $8.00 shipping).
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Sale Price", "Total w/ Shipping", "Mercari Fee (10%)", "You Receive", "Effective Rate on Item"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 12, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["$10", "$18.00", "$1.80", "$8.20", "18.0%"],
                                ["$20", "$28.00", "$2.80", "$17.20", "14.0%"],
                                ["$30", "$38.00", "$3.80", "$26.20", "12.7%"],
                                ["$50", "$58.00", "$5.80", "$44.20", "11.6%"],
                                ["$75", "$83.00", "$8.30", "$66.70", "11.1%"],
                                ["$100", "$108.00", "$10.80", "$89.20", "10.8%"],
                                ["$150", "$158.00", "$15.80", "$134.20", "10.5%"],
                                ["$200", "$208.00", "$20.80", "$179.20", "10.4%"],
                                ["$500", "$508.00", "$50.80", "$449.20", "10.2%"],
                            ].map(([price, total, fee, receive, effectiveRate], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{price}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{total}</td>
                                    <td style={{ padding: "13px 16px", color: A, fontWeight: 500 }}>{fee}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{receive}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{effectiveRate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "#0D0D1A", lineHeight: 1.7 }}>
                    <strong>Key insight:</strong> Because the 10% fee applies to shipping too, low-priced items carry a disproportionately high effective rate. A $10 item with $8 shipping pays 18% effective on the item price — far higher than the headline. Price low-cost items carefully and consider whether Mercari is the right venue for very cheap goods.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 6 — Competitors
      ════════════════════════════════ */}
            <section id="vs-competitors" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Mercari Fees vs eBay, Poshmark & Depop (2026)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Mercari&apos;s flat 10% is straightforward to compare — no tiers, no categories, no surprises. Here&apos;s how it stacks up on a $75 item with $8 buyer-paid shipping:
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 16 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Platform", "Fee on $75 Sale", "You Keep", "Fee on Shipping?", "Verdict"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Mercari", "$8.30 (10% of $83)", "$66.70", "Yes", "Flat, predictable, mid-range"],
                                ["Depop (US)", "$3.22 (3.3% + $0.45)", "$71.78", "Yes", "Lowest fees for US sellers"],
                                ["eBay", "~$10.68 (13.6%+$0.40)", "$64.32", "Yes", "Higher, but huge audience"],
                                ["Poshmark", "$15.00 (20%)", "$60.00", "No", "Most expensive option"],
                                ["Grailed", "~$9.93 (~12.7%)", "$65.07", "Yes", "Lower for fashion/designer"],
                            ].map(([platform, fee, keep, onShipping, verdict], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{platform}</td>
                                    <td style={{ padding: "13px 16px", color: A, fontWeight: 500 }}>{fee}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{keep}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{onShipping}</td>
                                    <td style={{ padding: "13px 16px", color: "#666", fontSize: 13 }}>{verdict}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 20 }}>
                    Estimates based on 2026 published fee rates. Always verify current rates before listing.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    Mercari sits comfortably in the middle of the fee landscape — lower than eBay and Poshmark, higher than Depop. Its real advantage is simplicity: one flat rate, no category exceptions, no seller tiers. For general merchandise sellers who want predictable fees without managing complex pricing across categories, Mercari is one of the most straightforward options available.
                </p>
            </section>

            {/* ════════════════════════════════
          SECTION 7 — Reduce Fees
      ════════════════════════════════ */}
            <section id="reduce-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    7 Ways to Maximize Your Mercari Profit in 2026
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
                    Mercari&apos;s flat fee means there are no tier games to play or subscription decisions to make. But there&apos;s still significant room to optimize your take-home on every sale.
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
                    {[
                        {
                            num: "01",
                            title: "Price Using the Full Transaction Amount — Not Just the Item Price",
                            desc: "The single most common Mercari pricing mistake: calculating 10% of your item price and missing the fee on shipping. If your item is $50 and shipping is $9, the fee is $5.90 — not $5.00. Build your minimum price from the full transaction total. Always.",
                        },
                        {
                            num: "02",
                            title: "Update All Old Listings to the 2026 Fee Structure",
                            desc: "Listings created before January 6, 2025 may still operate under the old 10% + 2.9% + $0.50 structure — a 13%+ effective rate. Simply editing or relisting brings them onto the new 10%-only structure immediately. Check your listings and update any that haven't been refreshed recently.",
                        },
                        {
                            num: "03",
                            title: "Use Direct Deposit for Withdrawals — Not Instant Pay",
                            desc: "Instant Pay at $3 per transaction sounds small but accumulates fast. A seller making 60 withdrawals a month spends $180 just accessing their own money. Batch your withdrawals and use the free ACH option unless you have a genuine cash flow emergency.",
                        },
                        {
                            num: "04",
                            title: "Be Strategic with Free Shipping Offers",
                            desc: "Offering free shipping lowers the fee base (since the buyer pays $0 shipping), but you absorb the label cost in full. Free shipping only improves your net if it meaningfully raises your sale price or sell-through rate. Test both approaches on similar items before making it a default.",
                        },
                        {
                            num: "05",
                            title: "Use Mercari Prepaid Labels for Maximum Savings",
                            desc: "Mercari's prepaid labels offer an average 54% savings vs. retail carrier rates — updated as of January 2026. Every label includes tracking and up to $200 in Shipping Protection. Unless you have a negotiated commercial shipping rate that beats Mercari's discounts, prepaid labels are almost always the right choice.",
                        },
                        {
                            num: "06",
                            title: "Avoid Listing Very Low-Priced Items Unless COGS Are Near Zero",
                            desc: "The 10% fee applies to the full transaction including shipping, which means a $10 item with $8 shipping pays an 18% effective fee on the item price. Sub-$15 items on Mercari are often unprofitable once fees and label costs are included. Bundle low-value items or price them higher.",
                        },
                        {
                            num: "07",
                            title: "Calculate Your Exact Payout Before Every Listing — Not After",
                            desc: "Mercari's simplicity makes this tempting to skip. Don't. Price your item, add the buyer's shipping cost, multiply by 1.10 to get your minimum sell price — then add your desired profit margin on top. A fee calculator does this in seconds and catches mistakes before they cost you money.",
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
                    How Feescal Makes Mercari Fee Calculations Instant
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Mercari&apos;s 10% flat fee sounds simple — but the fee on shipping catches sellers out, and the critical question of &quot;is Mercari actually the best platform for this specific item?&quot; still requires comparing against eBay, Depop, Poshmark, and others. Doing that math manually before every listing isn&apos;t realistic.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Feescal solves both problems at once. Enter your item price and shipping, and instantly see:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                        "Your exact Mercari payout after the 10% fee — calculated on the full transaction including shipping",
                        "Side-by-side profit comparison across Mercari, eBay, Poshmark, Depop, Grailed, StockX, Whatnot, and TikTok Shop",
                        "Which marketplace gives you the highest net margin on that specific item and price",
                        "Real-time results as you adjust price, shipping cost, and cost of goods",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, flexShrink: 0 }}>→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
                    For crosslisting sellers who use Mercari alongside eBay and Poshmark, seeing all three payouts side by side before choosing where to list is the fastest way to make sure you&apos;re always maximizing your margin — not just defaulting to the platform you&apos;re most familiar with.
                </p>

                {/* CTA Block */}
                <div style={{ background: `linear-gradient(135deg, ${A} 100%)`, borderRadius: 20, padding: "52px 40px", textAlign: "center" as const }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 10px", lineHeight: 1.25 }}>
                        Know Your Mercari Profit Before You List
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, margin: "0 0 28px", lineHeight: 1.65 }}>
                        Calculate your exact payout after all fees and compare across 8 platforms instantly — free, no account needed.
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
                    Bottom Line: Mercari&apos;s 10% Is Simple — But Only If You Know What It Applies To
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Mercari&apos;s 2026 fee structure is genuinely one of the most straightforward in resale: one flat 10% rate, no processing fee, no categories, no tiers. The catch that trips up most sellers is that the 10% applies to the full transaction including shipping — not just the item price. On every sale, your effective fee on the item alone is slightly higher than 10%.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    At 10%, Mercari sits competitively between Depop (3.5% for US sellers) and eBay (13%+). It&apos;s not the cheapest option available — but it offers a large buyer base, flexible shipping, and the most predictable fee structure of any major general merchandise platform. For sellers who value simplicity and consistency over chasing the absolute lowest rate, Mercari delivers.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    Use the tables and strategies above as your reference, update any old listings to the 2026 fee structure, and let Feescal handle the cross-platform math so every pricing decision is backed by real numbers.
                </p>
            </section>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 24 }} />
            <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                Last updated: March 2026. Mercari fee rates and shipping label pricing are subject to change. Always verify current rates in your Mercari Seller Dashboard before listing.
            </p>
        </article>
    );
}