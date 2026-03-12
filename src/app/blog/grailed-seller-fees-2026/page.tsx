export const metadata = {
    title: "Grailed Seller Fees in 2026: The Complete Breakdown (Commission + Processing)",
    description:
        "How much does Grailed take per sale in 2026? Break down the 9% commission, Stripe processing fees, how shipping costs affect your payout, and 7 proven strategies to protect your margins on every sale.",
    keywords: [
        "Grailed seller fees 2026",
        "how much does Grailed take",
        "Grailed fee structure 2026",
        "Grailed 9% commission",
        "Grailed fee calculator",
        "Grailed selling fees breakdown",
        "Grailed payment processing fee",
        "Grailed profit calculator",
        "reduce Grailed fees",
        "Grailed vs Poshmark fees",
        "Grailed vs eBay fees",
        "Grailed commission 2026",
        "how to sell on Grailed fees",
    ],
};

// 60-30-10 Color System
// 60% → #FFFFFF / #FAFAFA  (white/off-white — dominant backgrounds)
// 30% → #0D0D1A / #555     (dark text — structure and body)
// 10% → #2D9B6F            (Grailed-adjacent green accent — highlights, CTAs)

const A = "#2D9B6F";
const A_LIGHT = "#F0FAF5";
const A_MID = "#B2DFD0";

export default function GrailedFeesGuide() {
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
                Grailed Seller Fees in 2026: The Complete Breakdown (Commission + Processing)
            </h1>

            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.85, marginBottom: 28 }}>
                Grailed is the go-to marketplace for designer, streetwear, and luxury fashion resellers — and its fee structure is one of the most competitive in the space. But the headline 9% commission is only part of what you actually pay. Add Stripe processing fees, understand how shipping costs factor in, and the real rate lands between 12% and 16% depending on your setup. Here&apos;s exactly how it all works in 2026.
            </p>

            {/* ── AUTHOR ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: A_MID, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: A }}>F</div>
                <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0D0D1A", margin: 0 }}>Feescal Editorial Team</p>
                    <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>March 10, 2026 · 10 min read</p>
                </div>
            </div>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 44 }} />

            {/* ── TOC ── */}
            <div style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderLeft: `4px solid ${A}`, borderRadius: "0 16px 16px 0", padding: "24px 28px", marginBottom: 52 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>In This Guide</p>
                <ol style={{ margin: 0, padding: "0 0 0 18px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                    {[
                        ["#commission", "The 9% Grailed Commission Fee"],
                        ["#processing", "Payment Processing Fees (Stripe)"],
                        ["#real-examples", "Real Profit Examples at Every Price Point"],
                        ["#shipping", "How Shipping Affects Your Grailed Payout"],
                        ["#vs-competitors", "Grailed Fees vs Poshmark, eBay & Depop"],
                        ["#reduce-fees", "7 Ways to Reduce Grailed Fee Impact"],
                        ["#calculator", "How Feescal Removes the Guesswork"],
                    ].map(([href, label]) => (
                        <li key={href} style={{ fontSize: 14, color: "#555" }}>
                            <a href={href} style={{ color: "#555", textDecoration: "none" }}>{label}</a>
                        </li>
                    ))}
                </ol>
            </div>

            {/* ════════════════════════════════
          SECTION 1 — Commission
      ════════════════════════════════ */}
            <section id="commission" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    The 9% Grailed Commission Fee
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Every sale on Grailed carries a flat 9% marketplace commission. This applies uniformly — no category exceptions, no tiered rates based on price, no differences between domestic and international sales. It&apos;s the same 9% whether you&apos;re selling a $30 vintage tee or a $2,000 designer jacket.
                </p>

                {/* Commission card */}
                <div style={{ background: A_LIGHT, border: `1.5px solid ${A_MID}`, borderRadius: 16, padding: "28px 28px 24px", marginBottom: 28 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Grailed Commission Fee — All Sales</p>
                    <p style={{ fontSize: 48, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>9%</p>
                    <p style={{ fontSize: 14, color: "#666", margin: 0, lineHeight: 1.65 }}>
                        Applied to the total transaction amount — item price plus any shipping the buyer pays. Same rate for all categories, all regions, all price points.
                    </p>
                </div>

                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Key things to understand about how this commission is applied:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {[
                        "The 9% is calculated on the full transaction total — if the buyer pays $10 shipping on a $90 item, Grailed takes 9% of $100, not $90.",
                        "There are no listing fees. You can add as many items as you want without paying anything upfront.",
                        "The commission is the same regardless of whether your buyer is domestic or international.",
                        "No category surcharges — sneakers, designer, streetwear, and vintage are all treated identically.",
                        "Grailed does not charge insertion or relisting fees, making it free to refresh slow-moving inventory.",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, marginTop: 3, flexShrink: 0 }}>✓</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ════════════════════════════════
          SECTION 2 — Processing Fees
      ════════════════════════════════ */}
            <section id="processing" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Payment Processing Fees: The Variable You Need to Know
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    On top of the 9% commission, every Grailed sale carries a payment processing fee. This is where it gets slightly more complex — the rate depends on three factors: your Stripe onboarding status, your location, and the buyer&apos;s location.
                </p>

                {/* Processing fee table */}
                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 24 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: "#0D0D1A" }}>
                                {["Seller Status", "Sale Type", "Processing Fee"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Stripe-onboarded (eligible country)", "Domestic", "3.49% + $0.49"],
                                ["Stripe-onboarded (eligible country)", "International", "4.99% + $0.49"],
                                ["Not onboarded (Stripe-eligible country)", "Domestic", "3.49% + $0.99"],
                                ["Not onboarded (Stripe-eligible country)", "International", "5.49% + $0.99"],
                                ["Stripe-ineligible country", "All transactions", "4.99% + $0.49"],
                            ].map(([status, type, fee], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", color: "#555", fontSize: 13 }}>{status}</td>
                                    <td style={{ padding: "13px 16px", color: "#888", fontSize: 13 }}>{type}</td>
                                    <td style={{ padding: "13px 16px", color: A, fontWeight: 600, fontSize: 13 }}>{fee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Stripe tip callout */}
                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
                    <p style={{ fontWeight: 700, color: "#0D0D1A", margin: "0 0 6px", fontSize: 14 }}>
                        💡 Complete Stripe onboarding — it saves real money
                    </p>
                    <p style={{ fontSize: 14, color: "#555", margin: 0, lineHeight: 1.7 }}>
                        The difference between onboarded and non-onboarded is $0.50 per transaction on the fixed fee. For a seller moving 50 items a month, that&apos;s $25/month — $300/year — just from not completing a one-time account setup. If you&apos;re Stripe-eligible, there&apos;s no reason not to onboard.
                    </p>
                </div>

                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    Adding the 9% commission to standard domestic processing fees (3.49% + $0.49) gives most US-based, Stripe-onboarded sellers a combined effective rate of roughly <strong style={{ color: "#0D0D1A" }}>12.5%–13.5%</strong> per sale. International or non-onboarded sellers can see rates push toward 14%–16%.
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
                    All examples below assume a US-based, Stripe-onboarded seller with buyer-paid shipping. Processing fee: 3.49% + $0.49.
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: "#0D0D1A" }}>
                                {["Sale Price", "9% Commission", "Processing Fee", "Total Fees", "You Receive"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["$30", "$2.70", "$1.54", "$4.24", "$25.76"],
                                ["$50", "$4.50", "$2.24", "$6.74", "$43.26"],
                                ["$75", "$6.75", "$3.11", "$9.86", "$65.14"],
                                ["$100", "$9.00", "$3.98", "$12.98", "$87.02"],
                                ["$150", "$13.50", "$5.73", "$19.23", "$130.77"],
                                ["$200", "$18.00", "$7.47", "$25.47", "$174.53"],
                                ["$350", "$31.50", "$12.71", "$44.21", "$305.79"],
                                ["$500", "$45.00", "$17.94", "$62.94", "$437.06"],
                                ["$1,000", "$90.00", "$35.39", "$125.39", "$874.61"],
                            ].map(([price, comm, proc, total, receive], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{price}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{comm}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{proc}</td>
                                    <td style={{ padding: "13px 16px", color: "#DC2626", fontWeight: 500 }}>{total}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{receive}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                    Processing fee calculated as 3.49% of sale price + $0.49. Assumes buyer-paid shipping. Actual fees may vary based on Stripe status and buyer location.
                </p>
            </section>

            {/* ════════════════════════════════
          SECTION 4 — Shipping
      ════════════════════════════════ */}
            <section id="shipping" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How Shipping Affects Your Grailed Payout
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Shipping is where many Grailed sellers get caught off guard. Unlike Poshmark, which calculates fees on item price only, Grailed applies its 9% commission to the <strong style={{ color: "#0D0D1A" }}>total transaction amount — including whatever the buyer pays for shipping</strong>.
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                    {[
                        {
                            title: "Buyer-paid shipping: Still affects your fee",
                            desc: "If a buyer pays $12 shipping on a $100 item, Grailed's 9% commission applies to $112 — costing you $10.08 in commission rather than $9.00. The extra $0.99 is small on one sale but compounds at scale.",
                        },
                        {
                            title: "Free shipping: Compounds the fee impact",
                            desc: "If you offer free shipping and absorb a $12 label cost, you've already reduced your effective sale price. The 9% then takes a bite from your full listing price, which was inflated to cover shipping. Price carefully if using free shipping as a selling strategy.",
                        },
                        {
                            title: "Grailed Labels (US domestic)",
                            desc: "Grailed offers prepaid USPS labels for domestic US sales and select Canada-to-US transactions. Buyers pay for these at checkout, so you don't pay out of pocket — but the label cost is part of the total transaction that Grailed fees are calculated on.",
                        },
                        {
                            title: "International shipping: Higher processing too",
                            desc: "Cross-border sales trigger the international processing fee (4.99% + $0.49 for onboarded sellers). Combined with the 9% commission, international sales carry a combined rate of roughly 14%+. Factor this in when setting international shipping prices.",
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
          SECTION 5 — Competitors
      ════════════════════════════════ */}
            <section id="vs-competitors" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Grailed Fees vs Poshmark, eBay & Depop (2026)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Among fashion and streetwear platforms, Grailed&apos;s fee structure is one of the most competitive. Here&apos;s how it stacks up on a $200 designer item:
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 16 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Platform", "Fee on $200 Sale", "You Keep", "Fee on Shipping?", "Audience"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Grailed", "~$25.47 (~12.7%)", "~$174.53", "Yes", "Designer/streetwear"],
                                ["Poshmark", "$40.00 (20%)", "$160.00", "No", "Broad fashion"],
                                ["eBay", "~$27.60 (~13.8%)", "~$172.40", "Yes", "Broad marketplace"],
                                ["Depop", "~$20.00 (10%)", "~$180.00", "Yes", "Gen Z / vintage"],
                                ["StockX", "~$19–38 (varies)", "~$162–181", "No", "Sneakers / hype"],
                            ].map(([platform, fee, keep, onShipping, audience], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{platform}</td>
                                    <td style={{ padding: "13px 16px", color: "#DC2626", fontWeight: 500 }}>{fee}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{keep}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{onShipping}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{audience}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 20 }}>
                    Estimates based on 2026 published fee rates. Always verify current rates before listing.
                </p>

                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "16px 20px", fontSize: 14, color: "#1a5c42", lineHeight: 1.7 }}>
                    <strong>Key takeaway:</strong> Grailed&apos;s ~12.7% effective rate is significantly lower than Poshmark&apos;s 20% and slightly lower than eBay&apos;s. On a $200 item, Grailed puts $14.53 more in your pocket than Poshmark. For fashion resellers with a buyer audience that fits Grailed&apos;s niche, the fee advantage is real and meaningful.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 6 — Reduce Fees
      ════════════════════════════════ */}
            <section id="reduce-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    7 Ways to Reduce the Impact of Grailed Fees
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
                    Grailed&apos;s fees are already among the lowest for fashion resellers — but there&apos;s still room to optimize. Here&apos;s how experienced Grailed sellers protect their margins:
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
                    {[
                        {
                            num: "01",
                            title: "Complete Stripe Onboarding Immediately",
                            desc: "This is the single easiest way to reduce your per-transaction cost. Onboarding with Stripe saves $0.50 per sale on the fixed processing fee and lowers your international rate from 5.49% to 4.99%. Do this before your first listing.",
                        },
                        {
                            num: "02",
                            title: "Price With the Full 13% in Mind, Not Just 9%",
                            desc: "Many sellers see '9%' and price accordingly — then are surprised when their payout is lower. For domestic Stripe-onboarded sales, the real rate is closer to 12.5–13.5%. Always calculate using the combined fee, not the headline commission.",
                        },
                        {
                            num: "03",
                            title: "Be Strategic With Free Shipping Offers",
                            desc: "Offering free shipping can improve sell-through, but Grailed's 9% applies to the full transaction including shipping. If you build a $12 shipping cost into your price and offer 'free shipping', the commission applies to the inflated price. Run the numbers both ways before deciding.",
                        },
                        {
                            num: "04",
                            title: "Send Offers to Likers — It Costs Nothing Extra",
                            desc: "Grailed lets you send discounted offers to users who've liked your listing. Offers must be at least 10% below the current price. This drives sales without additional platform fees — and a closed sale at a slight discount almost always beats a stale listing.",
                        },
                        {
                            num: "05",
                            title: "Price Higher-Margin Items on Grailed First",
                            desc: "With one of the lowest fee rates among fashion platforms, Grailed is the right primary venue for designer and premium streetwear. eBay's broader audience may help volume, but for per-item margin on high-value pieces, Grailed typically wins.",
                        },
                        {
                            num: "06",
                            title: "Crosslist to Maximize Reach Without Duplicate Effort",
                            desc: "List simultaneously on Grailed, Depop, and eBay for the same item. When it sells on one platform, delist from others. More exposure means faster sales — and faster sales mean less time waiting for a buyer who might negotiate your price down.",
                        },
                        {
                            num: "07",
                            title: "Calculate Net Profit Before Every Listing",
                            desc: "The most consistent mistake Grailed sellers make is pricing based on what they want to receive, without working backwards from the fee. Know your walk-away number, divide by 0.87 (for ~13% combined fees), and that's your minimum list price. A calculator does this instantly.",
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
          SECTION 7 — Feescal CTA
      ════════════════════════════════ */}
            <section id="calculator" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How Feescal Removes the Grailed Fee Guesswork
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Calculating Grailed fees manually means juggling the 9% commission, your specific Stripe processing rate, whether shipping is buyer-paid or absorbed, and then doing it all again if you&apos;re considering listing on a different platform. Most sellers either skip the math entirely or spend minutes on a calculation that should take seconds.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Feescal handles all of it instantly. Enter your item price once and see:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                        "Your exact Grailed payout after commission and processing fees",
                        "Side-by-side profit comparison across Grailed, Poshmark, eBay, Depop, StockX, and 3 more platforms",
                        "Which marketplace gives you the highest net on that specific item and price point",
                        "Real-time results as you adjust price, shipping, and cost of goods",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, flexShrink: 0 }}>→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
                    For serious Grailed sellers who also crosslist on eBay and Depop, the comparison view is the most valuable part. Instead of calculating three times for three platforms, you see all three results simultaneously — and you know before you list which one maximizes your margin on that item.
                </p>

                {/* CTA Block */}
                <div style={{ background: `linear-gradient(135deg, ${A} 0%, #3dbf8a 100%)`, borderRadius: 20, padding: "52px 40px", textAlign: "center" as const }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 10px", lineHeight: 1.25 }}>
                        Know Your Grailed Profit Before You List
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, margin: "0 0 28px", lineHeight: 1.65 }}>
                        Instantly compare your net earnings across Grailed and 7 other platforms — free, no account needed.
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
                    Bottom Line: Grailed&apos;s Fees Are Competitive — But Only If You Know the Full Rate
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Grailed&apos;s 9% commission headline is genuinely one of the most competitive rates in fashion resale. But the real rate — once you add Stripe processing fees — lands between 12% and 16% depending on your setup. That&apos;s still well below Poshmark&apos;s 20%, but it&apos;s higher than many sellers account for when pricing their listings.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    The sellers who consistently protect their margins on Grailed are the ones who complete Stripe onboarding, price using the combined fee rate, understand how shipping factors into the calculation, and know when a competing platform will give them a better payout on a specific item.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    Use the tables above as your reference, apply the strategies to minimize what Grailed takes, and let Feescal handle the cross-platform math so every listing decision is backed by real numbers — not guesswork.
                </p>
            </section>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 24 }} />
            <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                Last updated: March 2026. Grailed fee rates are subject to change. Always verify current rates in your Grailed seller dashboard before listing.
            </p>
        </article>
    );
}