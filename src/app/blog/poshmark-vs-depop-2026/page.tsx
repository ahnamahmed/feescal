export const metadata = {
    title: "Poshmark vs Depop in 2026: Which Platform Pays Sellers More? (Fee Comparison)",
    description:
        "Poshmark charges 20% on every sale. Depop charges 0% for US/UK sellers — just a 3.3% + $0.45 processing fee. But which platform actually puts more money in your pocket in 2026? A complete side-by-side breakdown.",
    keywords: [
        "Poshmark vs Depop 2026",
        "Poshmark vs Depop fees",
        "which is better Poshmark or Depop",
        "Depop seller fees 2026",
        "Poshmark seller fees 2026",
        "Depop 0% fee",
        "Poshmark 20% fee",
        "Poshmark vs Depop which pays more",
        "best platform to sell clothes 2026",
        "Depop vs Poshmark for resellers",
        "Poshmark vs Depop comparison",
        "sell clothes online fees comparison",
    ],
};

// 60-30-10 Color System
// 60% → #FFFFFF / #FAFAFA  (white/off-white — dominant backgrounds)
// 30% → #0D0D1A / #555     (dark text — structure and body)
// 10% → #6C47FF            (Feescal indigo — highlights, CTAs, verdict badges)

const A = "#FFB830";
const A_LIGHT = "#FFF4E5";
const A_MID = "#FFE0A0";

// Platform colors for side-by-side
const POSH = "#FF6B6B";
const POSH_LIGHT = "#FFF0F0";
const DEPOP = "#FF4040";
const DEPOP_LIGHT = "#FFF5F0";

export default function PoshmarkVsDepopGuide() {
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
                    Platform Comparison
                </span>
            </div>

            {/* ── TITLE ── */}
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 800, color: "#0D0D1A", lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.5px" }}>
                Poshmark vs Depop in 2026: Which Platform Pays Sellers More?
            </h1>

            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.85, marginBottom: 28 }}>
                The fee gap between Poshmark and Depop has never been wider. Poshmark charges a flat 20% on every sale over $15. Depop eliminated its 10% commission entirely for US and UK sellers in July 2024 — leaving only a 3.3% + $0.45 processing fee. On paper, Depop wins by a landslide. But fees alone don&apos;t determine which platform puts more money in your pocket. Audience size, sell-through rate, buyer behavior, and shipping costs all factor in. Here&apos;s the full, honest comparison for 2026.
            </p>

            {/* ── AUTHOR ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: A_MID, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: A }}>F</div>
                <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0D0D1A", margin: 0 }}>Feescal Editorial Team</p>
                    <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>March 19, 2026 · 11 min read</p>
                </div>
            </div>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 44 }} />

            {/* ── TOC ── */}
            <div style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderLeft: `4px solid ${A}`, borderRadius: "0 16px 16px 0", padding: "24px 28px", marginBottom: 52 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>In This Guide</p>
                <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                    {[
                        ["#fee-snapshot", "Fee Snapshot: Poshmark vs Depop at a Glance"],
                        ["#poshmark-fees", "Poshmark Fees in 2026: Full Breakdown"],
                        ["#depop-fees", "Depop Fees in 2026: Full Breakdown"],
                        ["#head-to-head", "Head-to-Head: Payout Comparison at Every Price"],
                        ["#shipping", "Shipping: Where the Real Difference Hides"],
                        ["#which-wins", "Which Platform Pays More? (It Depends on This)"],
                        ["#best-for", "Poshmark vs Depop: What Each Platform Is Best For"],
                        ["#calculator", "How Feescal Gives You the Answer in Seconds"],
                    ].map(([href, label]) => (
                        <li key={href} style={{ fontSize: 14, color: "#555" }}>
                            <a href={href} style={{ color: "#555", textDecoration: "none" }}>{label}</a>
                        </li>
                    ))}
                </ol>
            </div>

            {/* ════════════════════════════════
          SECTION 1 — Fee Snapshot
      ════════════════════════════════ */}
            <section id="fee-snapshot" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Fee Snapshot: Poshmark vs Depop at a Glance
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    The headline difference is dramatic. Here&apos;s how the two platforms compare across the key fee categories before we go deeper:
                </p>

                {/* Side-by-side comparison cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                    {/* Poshmark */}
                    <div style={{ background: POSH_LIGHT, border: `1.5px solid #FFD6D6`, borderRadius: 16, padding: "24px 22px" }}>
                        <p style={{ fontSize: 12, fontWeight: 800, color: POSH, letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>🛍 Poshmark</p>
                        {[
                            ["Commission", "20% (sales ≥$15)"],
                            ["Flat fee", "$2.95 (sales <$15)"],
                            ["Processing fee", "Included in 20%"],
                            ["Listing fee", "Free"],
                            ["Shipping", "Buyer pays $8.27"],
                        ].map(([label, value]) => (
                            <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid #FFD6D6" }}>
                                <span style={{ fontSize: 13, color: "#777" }}>{label}</span>
                                <span style={{ fontSize: 13, fontWeight: 700, color: "#0D0D1A" }}>{value}</span>
                            </div>
                        ))}
                    </div>
                    {/* Depop */}
                    <div style={{ background: "#F0FFF8", border: "1.5px solid #A8DECA", borderRadius: 16, padding: "24px 22px" }}>
                        <p style={{ fontSize: 12, fontWeight: 800, color: "#16a34a", letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>🏷 Depop (US/UK)</p>
                        {[
                            ["Commission", "0% ✓"],
                            ["Flat fee", "None ✓"],
                            ["Processing fee", "3.3% + $0.45 (US)"],
                            ["Listing fee", "Free"],
                            ["Shipping", "Buyer pays (variable)"],
                        ].map(([label, value]) => (
                            <div key={label} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid #A8DECA" }}>
                                <span style={{ fontSize: 13, color: "#777" }}>{label}</span>
                                <span style={{ fontSize: 13, fontWeight: 700, color: value.includes("✓") ? "#16a34a" : "#0D0D1A" }}>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "#0D0D1A", lineHeight: 1.7 }}>
                    <strong>The headline:</strong> For US sellers, Depop&apos;s effective fee rate is roughly 3.5%–4.5% per sale. Poshmark&apos;s is 20%. That&apos;s a gap of 15+ percentage points on every transaction — one of the largest fee differentials between any two major fashion resale platforms.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 2 — Poshmark Fees
      ════════════════════════════════ */}
            <section id="poshmark-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Poshmark Fees in 2026: Full Breakdown
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Poshmark uses a two-tier commission model with no listing fees, no monthly subscriptions, and no separate payment processing charges — everything is bundled into the commission.
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Fee Type", "Rate", "Applies To", "Notes"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Commission", "20%", "Sales ≥ $15", "Includes payment processing"],
                                ["Flat fee", "$2.95", "Sales < $15", "~37% effective rate on $8 item"],
                                ["Listing fee", "$0", "All listings", "Free to list and relist"],
                                ["Shipping", "Buyer pays $8.27", "All sales", "USPS Priority Mail, up to 5 lbs"],
                                ["Shipping discount", "Seller absorbs", "Optional", "Used to close offers or attract buyers"],
                                ["International fee", "+1.65%", "Cross-border sales", "On top of standard commission"],
                            ].map(([type, rate, applies, notes], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 500, color: "#0D0D1A" }}>{type}</td>
                                    <td style={{ padding: "13px 16px", color: POSH, fontWeight: 600 }}>{rate}</td>
                                    <td style={{ padding: "13px 16px", color: "#666" }}>{applies}</td>
                                    <td style={{ padding: "13px 16px", color: "#888", fontSize: 13 }}>{notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {[
                        "The 20% commission is calculated on item price only — not on the $8.27 shipping that buyers pay.",
                        "No separate payment processing charge — Poshmark bundles everything into the 20%.",
                        "Seller performance penalties (+6% for Below Standard accounts) can push your effective rate to 26%.",
                        "Category-specific surcharges don't exist on Poshmark — all items are treated equally.",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: POSH, marginTop: 3, flexShrink: 0 }}>✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ════════════════════════════════
          SECTION 3 — Depop Fees
      ════════════════════════════════ */}
            <section id="depop-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Depop Fees in 2026: Full Breakdown
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Depop eliminated its 10% selling commission for US and UK sellers effective July 15, 2024 — a permanent change made to compete with Vinted&apos;s zero-fee seller model. In 2026, US sellers pay only a payment processing fee plus optional boosting charges.
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Fee Type", "Rate", "Applies To", "Notes"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Selling commission", "0%", "US & UK sellers", "Eliminated July 2024"],
                                ["Selling commission", "10%", "Non-US/UK sellers", "Still applies outside US/UK"],
                                ["Processing fee (US)", "3.3% + $0.45", "All US transactions", "Applied on total incl. shipping"],
                                ["Processing fee (UK)", "2.9% + £0.30", "All UK transactions", "Applied on total incl. shipping"],
                                ["Boosted listing fee", "8% (US/AU)", "Boosted sales only", "Optional; 28-day attribution window"],
                                ["Boosted listing fee", "12% (UK)", "Boosted sales only", "On top of processing fee"],
                                ["Listing fee", "$0", "All listings", "Free to list, no insertion fee"],
                            ].map(([type, rate, applies, notes], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 500, color: "#0D0D1A" }}>{type}</td>
                                    <td style={{ padding: "13px 16px", color: rate === "0%" ? "#16a34a" : rate === "10%" ? POSH : POSH, fontWeight: 600 }}>{rate}</td>
                                    <td style={{ padding: "13px 16px", color: "#666" }}>{applies}</td>
                                    <td style={{ padding: "13px 16px", color: "#888", fontSize: 13 }}>{notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Boost warning */}
                <div style={{ background: "#FFFBF0", borderLeft: `4px solid ${A_MID}`, borderRadius: "0 12px 12px 0", padding: "16px 20px", fontSize: 14, color: "#0D0D1A", lineHeight: 1.7 }}>
                    <strong>⚠ The Boost 28-Day Attribution Rule:</strong> If a buyer clicks your boosted listing today but purchases 3 weeks later after you&apos;ve turned off the boost, you still pay the 8% boost fee. Depop attributes the sale to the original boosted impression. Always factor this in before boosting.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 4 — Head to Head
      ════════════════════════════════ */}
            <section id="head-to-head" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Head-to-Head: Payout Comparison at Every Price Point
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    All examples below assume a US seller. Depop processing fee: 3.3% of total transaction (item price + buyer-paid shipping) + $0.45. Poshmark commission: 20% of item price only. Shipping is buyer-paid on both platforms.
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Sale Price", "Poshmark Fee", "Poshmark Payout", "Depop Fee (US)", "Depop Payout", "Depop Advantage"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 12, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["$10", "$2.95", "$7.05", "$0.78", "$9.22", "+$2.17"],
                                ["$15", "$3.00", "$12.00", "$0.94", "$14.06", "+$2.06"],
                                ["$25", "$5.00", "$20.00", "$1.27", "$23.73", "+$3.73"],
                                ["$40", "$8.00", "$32.00", "$1.77", "$38.23", "+$6.23"],
                                ["$50", "$10.00", "$40.00", "$2.10", "$47.90", "+$7.90"],
                                ["$75", "$15.00", "$60.00", "$2.93", "$72.07", "+$12.07"],
                                ["$100", "$20.00", "$80.00", "$3.75", "$96.25", "+$16.25"],
                                ["$150", "$30.00", "$120.00", "$5.40", "$144.60", "+$24.60"],
                                ["$200", "$40.00", "$160.00", "$7.06", "$192.94", "+$32.94"],
                                ["$500", "$100.00", "$400.00", "$17.04", "$482.96", "+$82.96"],
                            ].map(([price, pFee, pPay, dFee, dPay, diff], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "12px 16px", fontWeight: 600, color: "#0D0D1A" }}>{price}</td>
                                    <td style={{ padding: "12px 16px", color: POSH, fontWeight: 500 }}>{pFee}</td>
                                    <td style={{ padding: "12px 16px", color: "#555" }}>{pPay}</td>
                                    <td style={{ padding: "12px 16px", color: "#16a34a", fontWeight: 500 }}>{dFee}</td>
                                    <td style={{ padding: "12px 16px", color: "#16a34a", fontWeight: 600 }}>{dPay}</td>
                                    <td style={{ padding: "12px 16px", fontWeight: 700, color: A }}>{diff}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 16 }}>
                    Depop fee calculated as 3.3% × (sale price + $8.27 assumed buyer shipping) + $0.45. Actual fees vary by shipping amount charged to buyer.
                </p>
                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "#0D0D1A", lineHeight: 1.7 }}>
                    <strong>The numbers are stark:</strong> On a $100 sale, Depop puts $16.25 more in your pocket than Poshmark. On a $200 sale, the gap is $32.94. For a seller doing 50 sales a month at an average of $50, choosing Depop over Poshmark is worth roughly <strong>$395/month</strong> — $4,740/year — in additional earnings, purely from the fee difference.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 5 — Shipping
      ════════════════════════════════ */}
            <section id="shipping" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Shipping: Where the Real Difference Hides
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Poshmark&apos;s flat $8.27 Priority Mail label is one of the platform&apos;s most underrated advantages. Depop&apos;s shipping is more complex — and for heavier items, it can erode Depop&apos;s fee advantage significantly.
                </p>

                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14, marginBottom: 24 }}>
                    {[
                        {
                            platform: "Poshmark",
                            color: POSH,
                            title: "Flat $8.27 for everything up to 5 lbs",
                            desc: "Buyers pay a flat $8.27 regardless of item weight (up to 5 lbs). This makes Poshmark exceptional for heavier items — coats, boots, denim, handbags. A 3 lb coat costs the buyer the same to ship as a lightweight tee. Seller pays nothing for shipping unless offering a discount.",
                        },
                        {
                            platform: "Depop",
                            color: "#16a34a",
                            title: "Weight-based pricing — great for lightweight items",
                            desc: "Depop uses weight-based shipping rates. Lightweight items (under 1 lb) can ship for as little as $4–5 — meaningfully cheaper than Poshmark's $8.27. For heavy items, Depop shipping costs climb quickly and can make your listing less competitive vs. Poshmark's flat rate.",
                        },
                        {
                            platform: "Depop",
                            color: "#DC2626",
                            title: "Processing fee applies to shipping too",
                            desc: "Depop's 3.3% + $0.45 processing fee is calculated on the total transaction including shipping. If a buyer pays $9 shipping, you pay an additional ~$0.30 in processing fees on that shipping amount. It's small — but it's worth knowing when pricing.",
                        },
                        {
                            platform: "Poshmark",
                            color: POSH,
                            title: "Poshmark doesn't charge fees on shipping",
                            desc: "Poshmark calculates its 20% commission on the item price only — not on the $8.27 shipping charge. This slightly narrows the real fee gap between the platforms compared to the headline numbers.",
                        },
                    ].map(({ platform, color, title, desc }, i) => (
                        <div key={i} style={{ display: "flex", gap: 16, padding: "18px 20px", background: "#FAFAFA", borderRadius: 14, border: "1px solid #EBEBF5" }}>
                            <span style={{ background: color + "20", color, fontSize: 10, fontWeight: 800, padding: "4px 8px", borderRadius: 6, letterSpacing: "0.06em", textTransform: "uppercase" as const, flexShrink: 0, height: "fit-content", marginTop: 2 }}>{platform}</span>
                            <div>
                                <p style={{ fontWeight: 600, color: "#0D0D1A", margin: "0 0 6px", fontSize: 15 }}>{title}</p>
                                <p style={{ color: "#666", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ background: "#FAFAFA", borderRadius: 14, border: "1px solid #EBEBF5", padding: "20px 22px" }}>
                    <p style={{ fontWeight: 700, color: "#0D0D1A", margin: "0 0 10px", fontSize: 15 }}>Shipping Verdict by Item Type</p>
                    {[
                        ["Lightweight items (under 1 lb)", "Depop", "Cheaper shipping, much lower fees"],
                        ["Mid-weight items (1–3 lbs)", "Depop", "Still wins on combined fees + shipping"],
                        ["Heavy items (3–5 lbs)", "Poshmark", "Flat $8.27 label is a meaningful advantage"],
                        ["Items over 5 lbs", "Depop", "Poshmark charges extra over 5 lbs; Depop scales"],
                    ].map(([category, winner, reason], i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < 3 ? "1px solid #EBEBF5" : "none" }}>
                            <span style={{ fontSize: 13, color: "#555", flex: 1 }}>{category}</span>
                            <span style={{ background: winner === "Depop" ? "#F0FFF8" : POSH_LIGHT, color: winner === "Depop" ? "#16a34a" : POSH, fontWeight: 700, fontSize: 11, padding: "3px 10px", borderRadius: 100, flexShrink: 0 }}>{winner} wins</span>
                            <span style={{ fontSize: 12, color: "#aaa", flex: 1, textAlign: "right" as const }}>{reason}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 6 — Which Wins
      ════════════════════════════════ */}
            <section id="which-wins" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Which Platform Pays More? (It Depends on This)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    On fee structure alone, Depop wins — and it isn&apos;t close. But the platform that puts more money in your pocket over a month of selling depends on more than just the fee rate. Here&apos;s what actually determines your outcome:
                </p>

                <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
                    {[
                        {
                            factor: "Sell-through rate",
                            poshmark: "Large, active buyer base. Items typically sell faster — especially mainstream fashion brands.",
                            depop: "Smaller but highly targeted buyer base. Niche, vintage, and Gen Z-aligned inventory sells exceptionally well. Mainstream basics may sit longer.",
                            winner: "Depends on inventory",
                        },
                        {
                            factor: "Average sale price",
                            poshmark: "Buyers expect and accept higher prices. The platform skews toward brand-name and premium items.",
                            depop: "Buyers are more price-sensitive. The zero-fee advantage may be partially offset by needing to price lower to compete.",
                            winner: "Poshmark for premium",
                        },
                        {
                            factor: "Fee per transaction",
                            poshmark: "20% on everything. No exceptions, no level system.",
                            depop: "3.3% + $0.45 for US sellers. Roughly 4%–5% effective rate. Dramatically lower.",
                            winner: "Depop — by far",
                        },
                        {
                            factor: "Shipping experience",
                            poshmark: "Flat $8.27 buyer-paid label. Simple, predictable for both parties.",
                            depop: "Weight-based. Cheaper for light items, more expensive for heavy ones.",
                            winner: "Poshmark for heavy items",
                        },
                        {
                            factor: "Item type / niche",
                            poshmark: "Athleisure, branded basics, handbags, shoes. Broad fashion audience.",
                            depop: "Vintage, Y2K, streetwear, designer, thrifted, aesthetic fashion. Gen Z audience.",
                            winner: "Platform-specific",
                        },
                    ].map(({ factor, poshmark, depop, winner }, i) => (
                        <div key={i} style={{ background: "#FAFAFA", borderRadius: 14, border: "1px solid #EBEBF5", padding: "20px 22px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                                <p style={{ fontWeight: 700, color: "#0D0D1A", margin: 0, fontSize: 15 }}>{factor}</p>
                                <span style={{ background: A_LIGHT, color: A, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100 }}>{winner}</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                <div>
                                    <p style={{ fontSize: 11, fontWeight: 700, color: POSH, margin: "0 0 6px", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Poshmark</p>
                                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, margin: 0 }}>{poshmark}</p>
                                </div>
                                <div>
                                    <p style={{ fontSize: 11, fontWeight: 700, color: "#16a34a", margin: "0 0 6px", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Depop</p>
                                    <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65, margin: 0 }}>{depop}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 7 — Best For
      ════════════════════════════════ */}
            <section id="best-for" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Poshmark vs Depop: What Each Platform Is Best For
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Rather than a single winner, the right answer for most sellers is: <strong style={{ color: "#0D0D1A" }}>list on both and let the fee difference work in your favor.</strong> But if you have to choose, here&apos;s the honest breakdown:
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                    <div style={{ background: POSH_LIGHT, border: `1.5px solid #FFD6D6`, borderRadius: 16, padding: "24px 22px" }}>
                        <p style={{ fontSize: 13, fontWeight: 800, color: POSH, margin: "0 0 16px", letterSpacing: "0.04em" }}>Choose Poshmark if you sell…</p>
                        {[
                            "Name-brand fashion (Nike, Levi's, Free People)",
                            "Handbags, shoes, accessories",
                            "Heavy items like coats, boots, denim",
                            "Items priced $50+ where buyers expect to pay more",
                            "Mainstream brands with broad buyer appeal",
                            "Items where fast sell-through matters more than max margin",
                        ].map((item, i) => (
                            <p key={i} style={{ fontSize: 13, color: "#555", margin: "0 0 8px", display: "flex", gap: 8, lineHeight: 1.6 }}>
                                <span style={{ color: POSH, flexShrink: 0 }}>→</span>{item}
                            </p>
                        ))}
                    </div>
                    <div style={{ background: "#F0FFF8", border: "1.5px solid #A8DECA", borderRadius: 16, padding: "24px 22px" }}>
                        <p style={{ fontSize: 13, fontWeight: 800, color: "#16a34a", margin: "0 0 16px", letterSpacing: "0.04em" }}>Choose Depop if you sell…</p>
                        {[
                            "Vintage and thrifted clothing",
                            "Y2K, streetwear, indie, or aesthetic fashion",
                            "Lightweight items where shipping is cheap",
                            "Lower-priced items where 20% is devastating",
                            "Niche or curated inventory with a specific aesthetic",
                            "Items targeting Gen Z and millennial buyers",
                        ].map((item, i) => (
                            <p key={i} style={{ fontSize: 13, color: "#555", margin: "0 0 8px", display: "flex", gap: 8, lineHeight: 1.6 }}>
                                <span style={{ color: "#16a34a", flexShrink: 0 }}>→</span>{item}
                            </p>
                        ))}
                    </div>
                </div>

                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "16px 20px", fontSize: 14, color: "#0D0D1A", lineHeight: 1.7 }}>
                    <strong>Best strategy for most resellers:</strong> List on both simultaneously. When an item sells on one platform, delist from the other. This maximizes your reach without duplicating effort — and on every sale, you benefit from whichever platform&apos;s buyer found you first. For items that sell on Depop, you keep 15%+ more than if that same sale had happened on Poshmark.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 8 — Feescal CTA
      ════════════════════════════════ */}
            <section id="calculator" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How Feescal Gives You the Answer in Seconds
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Reading a comparison guide is useful. But the real question every seller faces is specific: &quot;For this item, at this price, which platform gives me a better payout right now?&quot; That answer changes with every item — and doing the math manually every time you list is not realistic.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Feescal solves this in one view. Enter your item price and instantly see:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                        "Your exact payout on Poshmark and Depop side by side — before you list",
                        "Profit comparison across 8 platforms simultaneously including eBay, Grailed, StockX, Mercari, Whatnot, and TikTok Shop",
                        "Which marketplace gives you the highest net margin on that specific item",
                        "Real-time results as you adjust price, shipping, and cost of goods",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, flexShrink: 0 }}>→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
                    Instead of running the Poshmark vs Depop math in your head every time you list, Feescal does it instantly — and shows you six more platforms at the same time. You&apos;ll know before your first listing goes live exactly where your margin is highest, and why.
                </p>

                {/* CTA Block */}
                <div style={{ background: `linear-gradient(135deg, ${A} 100%)`, borderRadius: 20, padding: "52px 40px", textAlign: "center" as const }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 10px", lineHeight: 1.25 }}>
                        Compare Poshmark vs Depop Instantly
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, margin: "0 0 28px", lineHeight: 1.65 }}>
                        Enter your price and see your exact payout on both platforms — plus 6 others — in seconds. Free, no account needed.
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
                    The Verdict: Depop Wins on Fees, Poshmark Wins on Audience — You Can Have Both
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    If the only variable that mattered was fee rate, Depop would win every comparison. A 3.5%–4.5% effective rate vs Poshmark&apos;s 20% isn&apos;t a close call — it&apos;s a fundamentally different business model. On a $100 sale, Depop puts $16 more in your pocket. At volume, that difference becomes your salary.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    But Poshmark&apos;s larger buyer base, flat-rate shipping advantage for heavy items, and higher average sale prices mean it genuinely outperforms Depop for certain inventory types. Neither platform is universally better — they&apos;re complementary.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    The smartest approach in 2026: crosslist on both, use Feescal to calculate your true payout before pricing each item, and let the data — not the platform — decide where each listing goes live.
                </p>
            </section>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 24 }} />
            <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                Last updated: March 2026. Poshmark and Depop fee rates are subject to change. Always verify current rates in each platform&apos;s Seller Hub before listing.
            </p>
        </article>
    );
}