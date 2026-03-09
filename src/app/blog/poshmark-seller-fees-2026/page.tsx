export const metadata = {
    title: "Poshmark Seller Fees in 2026: Complete Guide (Updated Fee Structure)",
    description:
        "Exactly how much does Poshmark take in 2026? Break down the $2.95 flat fee, 20% commission, shipping costs, and the 2024 fee controversy — plus 7 proven tips to protect your margins on every sale.",
    keywords: [
        "Poshmark seller fees 2026",
        "how much does Poshmark take",
        "Poshmark fee structure 2026",
        "Poshmark 20% fee",
        "Poshmark fee calculator",
        "Poshmark selling fees breakdown",
        "how much does Poshmark charge",
        "Poshmark profit calculator",
        "reduce Poshmark fees",
        "Poshmark vs eBay fees",
        "Poshmark commission 2026",
    ],
};

// 60-30-10 Color System
// 60% → #FFFFFF / #FAFAFA  (white/off-white backgrounds — dominant)
// 30% → #0D0D1A / #555     (dark text — secondary, structure)
// 10% → #FF6B6B            (accent — highlights, CTAs, badges)

const A = "#FF6B6B";          // accent (10%)
const A_LIGHT = "#FFF0F0";    // accent tint for subtle backgrounds
const A_MID = "#FFD6D6";      // accent mid for borders

export default function PoshmarkFeesGuide() {
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
                    Fee Comparisons
                </span>
            </div>

            {/* ── TITLE ── */}
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 800, color: "#0D0D1A", lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.5px" }}>
                Poshmark Seller Fees in 2026: How Much Does Poshmark Actually Take?
            </h1>

            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.85, marginBottom: 28 }}>
                Poshmark&apos;s fee structure is one of the simplest in resale — but simple doesn&apos;t mean small. At 20% on most sales, it&apos;s also one of the highest. After the chaotic 2024 fee experiment that sellers revolted against, Poshmark reverted to its original model. Here&apos;s exactly what you&apos;re paying in 2026, where it hurts most, and how to price strategically to protect your profit.
            </p>

            {/* ── AUTHOR ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: A_MID, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: A }}>F</div>
                <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0D0D1A", margin: 0 }}>Feescal Editorial Team</p>
                    <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>March 3, 2026 · 9 min read</p>
                </div>
            </div>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 44 }} />

            {/* ── TOC ── 60% bg, 10% accent left border */}
            <div style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderLeft: `4px solid ${A}`, borderRadius: "0 16px 16px 0", padding: "24px 28px", marginBottom: 52 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>In This Guide</p>
                <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                    {[
                        ["#fee-structure", "Poshmark's 2026 Fee Structure"],
                        ["#fee-controversy", "The 2024 Fee Controversy"],
                        ["#real-examples", "Real Profit Examples at Every Price Point"],
                        ["#shipping", "How Shipping Affects Your Profit"],
                        ["#vs-competitors", "Poshmark Fees vs eBay, Mercari & Depop"],
                        ["#reduce-fees", "7 Ways to Reduce Poshmark Fees"],
                        ["#calculator", "How Feescal Takes the Math Off Your Plate"],
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
                    Poshmark&apos;s 2026 Fee Structure: Two Tiers, No Surprises
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
                    Poshmark uses a straightforward two-tier fee model. No listing fees, no subscription costs, no payment processing charges stacked on top — the fee you see when a sale completes is the only fee you pay.
                </p>

                {/* Tier cards — 60% white base, 10% accent on left card */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
                    <div style={{ background: A_LIGHT, border: `1.5px solid ${A_MID}`, borderRadius: 16, padding: "24px 24px 20px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Sales Under $15</p>
                        <p style={{ fontSize: 42, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>$2.95</p>
                        <p style={{ fontSize: 13, color: "#777", margin: 0, lineHeight: 1.65 }}>Flat fee regardless of price. On a $10 sale, that&apos;s an effective rate of nearly 30%.</p>
                    </div>
                    <div style={{ background: "#FAFAFA", border: "1.5px solid #EBEBF5", borderRadius: 16, padding: "24px 24px 20px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Sales $15 and Above</p>
                        <p style={{ fontSize: 42, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>20%</p>
                        <p style={{ fontSize: 13, color: "#777", margin: 0, lineHeight: 1.65 }}>Commission on item price only — not shipping, not taxes. You keep 80%.</p>
                    </div>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {[
                        "Fees are calculated on the item price only — not on the shipping amount buyers pay.",
                        "There are no listing fees, so you can list hundreds of items at zero cost.",
                        "Relisting expired items is also free — no penalty for refreshing inventory.",
                        "Promoted Listings are optional and charged separately, only if you choose to use them.",
                        "Poshmark includes payment processing in its commission, unlike platforms that add a separate percentage on top.",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, marginTop: 3, flexShrink: 0 }}>✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ════════════════════════════════
          SECTION 2 — 2024 Controversy
      ════════════════════════════════ */}
            <section id="fee-controversy" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    The 2024 Fee Controversy: What Happened and Why It Still Matters
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    In late 2024, Poshmark rolled out a dramatic fee overhaul that sent sellers into a full revolt. The new structure replaced the familiar 20% commission with a 5.99% seller fee — which sounds better on the surface. But Poshmark simultaneously introduced a &quot;buyer protection fee&quot; of 5.99% charged to buyers, plus tiered order fees on top of both.
                </p>

                {/* Warning callout — 60% tinted bg, 30% text, amber left border (not accent) */}
                <div style={{ background: "#FFFBF0", borderLeft: "4px solid #FFB830", borderRadius: "0 12px 12px 0", padding: "20px 24px", marginBottom: 20 }}>
                    <p style={{ fontWeight: 700, color: "#0D0D1A", margin: "0 0 12px", fontSize: 14 }}>What the 2024 structure actually looked like:</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 6 }}>
                        {[
                            "Seller fee: 5.99% of the order total",
                            "Buyer protection fee: 5.99% (charged to buyers)",
                            "Additional order fee: $1 (under $15), $2 ($15–$50), $3 (over $50)",
                            "Buyer still paid shipping on top of all this",
                        ].map((item, i) => (
                            <li key={i} style={{ fontSize: 14, color: "#666", display: "flex", gap: 8 }}>
                                <span style={{ color: "#FFB830", flexShrink: 0 }}>•</span>{item}
                            </li>
                        ))}
                    </ul>
                </div>

                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Sellers immediately pointed out that the buyer-facing fees would kill conversion. Reddit, TikTok, and Facebook reseller groups filled with complaints. Power sellers threatened to leave. Within weeks, Poshmark reversed the changes entirely.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    Why does this matter in 2026? Because it happened once — and Poshmark has given no guarantees it won&apos;t happen again. Smart sellers now treat fee stability as a risk factor and factor platform diversification into their strategy.
                </p>
            </section>

            {/* ════════════════════════════════
          SECTION 3 — Real Examples
      ════════════════════════════════ */}
            <section id="real-examples" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Real Profit Examples at Every Price Point
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    The 20% fee is predictable — but its impact on your actual take-home varies dramatically. Here&apos;s how the numbers look across common resale price points:
                </p>

                {/* Table — 60% white rows, 30% dark header, 10% accent on fee column */}
                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: "#0D0D1A" }}>
                                {["Sale Price", "Poshmark Fee", "You Receive", "Effective Rate"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["$8.00", "$2.95 (flat)", "$5.05", "36.9%"],
                                ["$12.00", "$2.95 (flat)", "$9.05", "24.6%"],
                                ["$15.00", "$3.00 (20%)", "$12.00", "20.0%"],
                                ["$25.00", "$5.00 (20%)", "$20.00", "20.0%"],
                                ["$50.00", "$10.00 (20%)", "$40.00", "20.0%"],
                                ["$100.00", "$20.00 (20%)", "$80.00", "20.0%"],
                                ["$200.00", "$40.00 (20%)", "$160.00", "20.0%"],
                                ["$500.00", "$100.00 (20%)", "$400.00", "20.0%"],
                            ].map(([price, fee, receive, rate], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{price}</td>
                                    <td style={{ padding: "13px 16px", color: A, fontWeight: 500 }}>{fee}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{receive}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{rate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Callout — accent tint bg */}
                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "#7A2020", lineHeight: 1.7 }}>
                    <strong>Key takeaway:</strong> The flat $2.95 fee is most punishing on low-priced items. Selling an $8 item means Poshmark takes nearly 37%. Avoid listing items under $10 unless your cost of goods was essentially zero.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 4 — Shipping
      ════════════════════════════════ */}
            <section id="shipping" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How Shipping Works on Poshmark (and When It Costs You)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Poshmark&apos;s standard shipping setup is one of its most seller-friendly features — but there are scenarios where it starts costing you.
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                    {[
                        { title: "Standard shipping: Buyer pays", desc: "Buyers pay a flat $8.27 for USPS Priority Mail on all standard orders. You pay nothing for shipping unless you choose to discount it." },
                        { title: "Shipping discounts: Your choice, your cost", desc: "If you offer free shipping, you absorb the full $8.27 label cost. Reserve discounts as a closing tool — not a default on every listing." },
                        { title: "Overweight packages: Your cost", desc: "Poshmark's flat label covers packages up to 5 lbs. Exceed that and you're charged an upgrade fee. Always weigh heavy items before listing." },
                        { title: "Poshmark doesn't charge fees on shipping", desc: "Unlike eBay, Poshmark calculates its 20% on item price only — not the full transaction. A meaningful advantage when selling heavier items." },
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
          SECTION 5 — Competitors
      ════════════════════════════════ */}
            <section id="vs-competitors" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Poshmark Fees vs eBay, Mercari & Depop (2026)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Poshmark&apos;s 20% commission is consistently higher than most competing platforms. Here&apos;s how it stacks up on a $50 item sale:
                </p>

                {/* Table — accent header this time as a visual separator */}
                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 16 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Platform", "Fee on $50 Sale", "You Keep", "Fee on Shipping?"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Poshmark", "$10.00 (20%)", "$40.00", "No"],
                                ["eBay", "~$7.20 (13.6% + $0.40)", "~$42.40", "Yes"],
                                ["Mercari", "~$6.50 (13%)", "~$43.50", "Yes"],
                                ["Depop", "~$5.00 (10%)", "~$45.00", "Yes"],
                                ["StockX", "~$4.75–9.50 (varies)", "~$40.50–45.25", "No"],
                            ].map(([platform, fee, keep, onShipping], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{platform}</td>
                                    <td style={{ padding: "13px 16px", color: A, fontWeight: 500 }}>{fee}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{keep}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{onShipping}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 16 }}>
                    Estimates based on 2026 published fee rates. Always verify current rates before listing.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    On a $50 sale, Poshmark keeps $10 vs eBay&apos;s ~$7.20 — a difference of nearly $3 per item. Across 100 sales a month, that&apos;s $300 staying on Poshmark instead of in your pocket. Poshmark&apos;s massive buyer base and ease of use offset this for many sellers — but it&apos;s a trade-off worth understanding before you price.
                </p>
            </section>

            {/* ════════════════════════════════
          SECTION 6 — Reduce Fees
      ════════════════════════════════ */}
            <section id="reduce-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    7 Ways to Reduce the Impact of Poshmark Fees
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
                    You can&apos;t lower Poshmark&apos;s commission rate — but you can structure your selling strategy so the fee takes a smaller bite out of your actual profit.
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
                    {[
                        { num: "01", title: "Price Above $15 Whenever Possible", desc: "The $2.95 flat fee on sub-$15 items is disproportionately expensive. Bundle low-priced items or price them at $15+ to drop to the standard 20% rate." },
                        { num: "02", title: "Build the 20% Into Your Sourcing Price", desc: "Before buying inventory, work backwards from your target sale price. If you want $40 after fees on Poshmark, you need to sell for $50." },
                        { num: "03", title: "Use Shipping Discounts Strategically", desc: "Reserve shipping discounts as a closing tool — offer them in response to lowball offers rather than preemptively discounting every listing." },
                        { num: "04", title: "List Higher-Value Items on Lower-Fee Platforms", desc: "For items over $100, the difference between Poshmark's 20% and eBay's ~13.6% is significant. A $150 item nets $120 on Poshmark vs ~$129 on eBay." },
                        { num: "05", title: "Focus on Faster Turnover", desc: "High-volume, fast-moving inventory works well here — the more you sell, the more 20% becomes a predictable cost rather than a margin killer." },
                        { num: "06", title: "Never Accept Offers Without Recalculating Fees", desc: "When a buyer sends an offer, recalculate your net at that price before accepting. A drop below $15 switches you to the $2.95 flat fee." },
                        { num: "07", title: "Calculate Profit Before You List — Not After", desc: "The most common mistake Poshmark sellers make is pricing without accounting for the 20%. Calculate first, list second. A fee calculator removes all the math in seconds." },
                    ].map(({ num, title, desc }) => (
                        <div key={num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                            {/* Number — accent color, large, subtle */}
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
          SECTION 7 — Feescal CTA
      ════════════════════════════════ */}
            <section id="calculator" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How Feescal Makes Poshmark Fee Calculations Instant
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Poshmark&apos;s fee structure is simple enough to calculate manually — but manual calculation only tells you what Poshmark takes. It doesn&apos;t tell you whether Poshmark is the right platform for that item in the first place. That&apos;s the problem Feescal solves. Enter your item price once, and instantly see:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                        "Your exact Poshmark fee and net earnings",
                        "Side-by-side profit comparison across Poshmark, eBay, Mercari, Depop, StockX, and 3 other platforms",
                        "Which marketplace gives you the highest take-home on that specific item",
                        "How shipping discounts affect your actual profit before you offer them",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, flexShrink: 0 }}>→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
                    For sellers crosslisting across multiple platforms, knowing which platform to list on first is just as important as knowing the fee. Feescal gives you that answer in one view, before you spend time on a listing that might pay you $12 less than the alternative.
                </p>

                {/* CTA — 10% accent as background, white text */}
                <div style={{ background: `linear-gradient(135deg, ${A} 0%, #FF9A9A 100%)`, borderRadius: 20, padding: "52px 40px", textAlign: "center" as const }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 10px", lineHeight: 1.25 }}>
                        Know Your Poshmark Profit Before You List
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, margin: "0 0 28px", lineHeight: 1.65 }}>
                        Instantly compare your net earnings across Poshmark and 7 other platforms — free, no account needed.
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
                    Bottom Line: Poshmark&apos;s 20% Is Predictable — Use That to Your Advantage
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Poshmark&apos;s fee structure is refreshingly simple in a world of complicated, layered marketplace charges. Two tiers, no hidden costs, no subscriptions. The trade-off is that 20% is a real number — higher than most competitors — and on lower-priced items the flat $2.95 fee can be even more punishing.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    The sellers who thrive on Poshmark in 2026 are the ones who price with the 20% already accounted for, source inventory at margins that survive it, and know exactly when it makes more sense to list on a competing platform. Use the tables and tips above as your reference, and let Feescal handle the cross-platform math so you can focus on finding great inventory and making sales.
                </p>
            </section>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 24 }} />
            <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                Last updated: March 2026. Poshmark fee rates are subject to change. Always verify current rates in your Poshmark app before listing.
            </p>
        </article>
    );
}