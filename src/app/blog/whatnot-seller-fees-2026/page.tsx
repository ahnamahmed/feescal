export const metadata = {
    title: "Whatnot Seller Fees in 2026: Complete Guide (Commission, Processing + Live Selling Tips)",
    description:
        "How much does Whatnot take per sale in 2026? Break down the 8% commission, 2.9% + $0.30 processing fee, category discounts, the $1,500 commission cap, shipping costs, and 7 strategies to maximize your live selling profit.",
    keywords: [
        "Whatnot seller fees 2026",
        "how much does Whatnot take",
        "Whatnot fee structure 2026",
        "Whatnot 8% commission",
        "Whatnot fee calculator",
        "Whatnot selling fees breakdown",
        "Whatnot payment processing fee",
        "Whatnot profit calculator",
        "reduce Whatnot fees",
        "Whatnot vs eBay fees",
        "Whatnot commission 2026",
        "how to sell on Whatnot profitably",
        "Whatnot live selling fees",
    ],
};

// 60-30-10 Color System
// 60% → #FFFFFF / #FAFAFA  (white/off-white — dominant backgrounds)
// 30% → #0D0D1A / #555     (dark text — structure and body)
// 10% → #FFB830            (purple accent — Whatnot's brand-adjacent color)

const A = "#FFB830";
const A_LIGHT = "#FFF4E5";
const A_MID = "#FFE0A0";

export default function WhatnotFeesGuide() {
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
                Whatnot Seller Fees in 2026: Commission, Processing & Live Selling Costs Fully Explained
            </h1>

            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.85, marginBottom: 28 }}>
                Whatnot has one of the simplest fee structures in resale — but &quot;simple&quot; doesn&apos;t mean what most sellers think. The headline 8% commission applies only to the item price, while the 2.9% + $0.30 processing fee is calculated on the full order value including shipping. Add category-specific discounts, a $1,500 commission cap on high-value items, and region-specific promotions, and the real picture is more nuanced. Here&apos;s exactly what you pay in 2026 — and how to keep more of every sale.
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
                        ["#commission", "The 8% Commission Fee"],
                        ["#processing", "Payment Processing Fee: 2.9% + $0.30"],
                        ["#category-discounts", "Category Discounts & the $1,500 Cap"],
                        ["#shipping", "How Shipping Affects Your Whatnot Payout"],
                        ["#real-examples", "Real Profit Examples at Every Price Point"],
                        ["#vs-competitors", "Whatnot Fees vs eBay, Poshmark & Grailed"],
                        ["#reduce-fees", "7 Ways to Maximize Your Whatnot Profit"],
                        ["#calculator", "How Feescal Takes the Math Off Your Plate"],
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
                    The 8% Commission Fee: What It Covers and What It Doesn&apos;t
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Whatnot charges an 8% commission on the final sale price of every item for US, Canadian, and Australian sellers. This is the platform&apos;s primary revenue source and covers access to Whatnot&apos;s livestreaming infrastructure, built-in buyer audience, payment systems, and customer support.
                </p>

                <div style={{ background: A_LIGHT, border: `1.5px solid ${A_MID}`, borderRadius: 16, padding: "28px 28px 24px", marginBottom: 28 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: "#0D0D1A", letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Whatnot Commission — US, Canada & Australia</p>
                    <p style={{ fontSize: 48, fontWeight: 800, color: "#0D0D1A", margin: "0 0 10px", lineHeight: 1 }}>8%</p>
                    <p style={{ fontSize: 14, color: "#666", margin: 0, lineHeight: 1.65 }}>
                        Calculated on the final item sale price only — not on shipping, not on taxes. A $50 item generates a $4.00 commission regardless of what the buyer pays for shipping.
                    </p>
                </div>

                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Critical details about how the commission works:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {[
                        "Commission is calculated on the final sale price — the price the buyer actually paid after any offers, discounts, or coupons you issued.",
                        "Whatnot-generated coupons (issued by Whatnot, not you) do NOT reduce your commission base. Seller-generated coupons DO reduce your commission base.",
                        "There are no listing fees, insertion fees, or store subscription fees. You only pay when you make a sale.",
                        "There are no withdrawal fees. Moving earnings to your bank account is free.",
                        "EU and UK sellers pay a different rate: 6.67% + VAT instead of the flat 8%, due to how VAT is applied in those regions.",
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
            <section id="processing" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Payment Processing Fee: 2.9% + $0.30 (Calculated Differently Than You Think)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 20, fontSize: 15 }}>
                    Unlike the commission, which applies only to the item price, Whatnot&apos;s payment processing fee is calculated on the <strong style={{ color: "#0D0D1A" }}>total order value</strong> — which includes the item price, shipping, and any buyer-paid tax. This distinction matters more than most sellers realize.
                </p>

                {/* Processing fee example */}
                <div style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderRadius: 16, padding: "24px", marginBottom: 24 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "#888", letterSpacing: "0.06em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>Worked Example: $50 Item Sale</p>
                    <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                        {[
                            ["Item sale price", "$50.00", false],
                            ["Shipping paid by buyer", "$8.70", false],
                            ["Total order value", "$58.70", false],
                            ["Commission (8% of $50)", "−$4.00", true],
                            ["Processing fee (2.9% of $58.70 + $0.30)", "−$2.00", true],
                            ["Your payout", "$44.00", false],
                        ].map(([label, value, isDeduction], i) => (
                            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 10, borderBottom: i < 5 ? "1px solid #F0F0F8" : "none" }}>
                                <span style={{ fontSize: 14, color: "#555" }}>{label}</span>
                                <span style={{ fontSize: 14, fontWeight: 600, color: isDeduction ? "#DC2626" : i === 5 ? "#16a34a" : "#0D0D1A" }}>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Key things to understand about processing fees:
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
                    {[
                        { title: "Processing applies to shipping too", desc: "Even when the buyer pays shipping, that amount is included in the processing fee calculation. On a $9 shipping charge, you pay an extra ~$0.26 in processing fees you didn't budget for." },
                        { title: "Free shipping lowers your processing fee slightly", desc: "If you absorb shipping costs, the buyer's total order value drops — which slightly reduces the processing fee. But you still pay the full label cost, so the net effect is usually negative." },
                        { title: "EU/UK rate is different", desc: "European and UK sellers pay 2.42% + £0.35/€0.25 + VAT instead of the standard 2.9% + $0.30." },
                        { title: "The $0.30 fixed fee matters on small sales", desc: "On a $10 item, the $0.30 fixed component represents 3% of the sale on its own — on top of the percentage. Low-priced items carry a higher effective processing rate." },
                    ].map(({ title, desc }, i) => (
                        <div key={i} style={{ display: "flex", gap: 16, padding: "16px 18px", background: "#FAFAFA", borderRadius: 12, border: "1px solid #EBEBF5" }}>
                            <span style={{ color: A, fontSize: 16, flexShrink: 0, marginTop: 2 }}>→</span>
                            <div>
                                <p style={{ fontWeight: 600, color: "#0D0D1A", margin: "0 0 4px", fontSize: 14 }}>{title}</p>
                                <p style={{ color: "#666", fontSize: 13, lineHeight: 1.7, margin: 0 }}>{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 3 — Category Discounts
      ════════════════════════════════ */}
            <section id="category-discounts" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Category Discounts, Regional Promos & the $1,500 Commission Cap
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Whatnot&apos;s standard 8% commission has meaningful exceptions that can significantly improve margins for sellers in the right categories or regions. These are not widely advertised — knowing them is a competitive advantage.
                </p>

                {/* Reduced commission table */}
                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 24 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Category / Region", "Commission Rate", "Eligibility", "Expires"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Most categories (US/CA/AU)", "8%", "All sellers", "Ongoing"],
                                ["Coins & Money (All regions)", "4%", "Properly categorized listings", "Ongoing"],
                                ["Electronics (US/CA/AU)", "5%", "Properly categorized listings", "Ongoing"],
                                ["Women's Fashion (Canada)", "0%", "Canadian sellers only", "Limited time"],
                                ["Australian sellers (select hours)", "4%", "2–4 PM AEST/AEDT window", "Apr 30, 2026"],
                                ["EU/UK (most categories)", "6.67% + VAT", "EU/UK sellers", "Ongoing"],
                                ["High-value items (eligible categories)", "8% on first $1,500 only", "Comics, TCG, toys, sports", "Ongoing"],
                            ].map(([cat, rate, elig, expires], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 500, color: "#0D0D1A", fontSize: 13 }}>{cat}</td>
                                    <td style={{ padding: "13px 16px", color: "#666", fontWeight: 700, fontSize: 13 }}>{rate}</td>
                                    <td style={{ padding: "13px 16px", color: "#666", fontSize: 13 }}>{elig}</td>
                                    <td style={{ padding: "13px 16px", color: "#888", fontSize: 13 }}>{expires}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* $1,500 cap callout */}
                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "16px 20px", fontSize: 14, color: "#0D0D1A", lineHeight: 1.7 }}>
                    <strong>The $1,500 Commission Cap is Significant for High-Value Sellers</strong>
                    <p style={{ margin: "8px 0 0", color: "#666", fontSize: 14, lineHeight: 1.7 }}>
                        For eligible categories (comics & anime, toys & hobbies, trading card games, sports singles), Whatnot only charges the 8% commission on the first $1,500 of a sale. Any amount above $1,500 is commission-free. On a $2,000 item, that saves you $40 in commission — an effective rate of 6% rather than 8%.
                    </p>
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 4 — Shipping
      ════════════════════════════════ */}
            <section id="shipping" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How Shipping Affects Your Whatnot Payout
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Shipping on Whatnot is buyer-paid by default — but it affects your fees regardless of who pays it, because processing fees apply to the total order value including shipping.
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
                    {[
                        {
                            title: "Standard US domestic shipping: ~$9.21 flat rate",
                            desc: "For packages 1–5 lbs, Whatnot offers flat-rate USPS shipping at approximately $9.21. This is buyer-paid, but because processing fees are calculated on the total order value, that $9.21 adds ~$0.27 to your processing fee per transaction.",
                        },
                        {
                            title: "Free shipping: You absorb the label cost",
                            desc: "Offering free or reduced shipping means you pay for the label out of your earnings. The buyer's total order value drops, which reduces your processing fee slightly — but the label cost far exceeds the processing savings in almost every case.",
                        },
                        {
                            title: "Giveaways: Only shipping costs apply",
                            desc: "Since the total order value for a giveaway is $0, there's no commission or processing fee. Your only cost is the shipping label. Giveaways build audience and engagement — the direct cost is just postage.",
                        },
                        {
                            title: "Bundle purchases reduce per-item processing fees",
                            desc: "When a buyer purchases multiple items in one transaction, the $0.30 fixed processing fee is charged once — not per item. Encouraging bundle purchases is one of the most effective ways to reduce your effective processing fee per unit.",
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
          SECTION 5 — Real Examples
      ════════════════════════════════ */}
            <section id="real-examples" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Real Profit Examples at Every Price Point
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    All examples below assume a US seller, standard 8% commission, buyer-paid $9.21 USPS shipping, and no taxes applied. Processing fee: 2.9% of total order value + $0.30.
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Sale Price", "Commission (8%)", "Processing Fee", "Total Fees", "You Receive"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["$10", "$0.80", "$0.85", "$1.65", "$8.35"],
                                ["$25", "$2.00", "$1.01", "$3.01", "$21.99"],
                                ["$50", "$4.00", "$1.73", "$5.73", "$44.27"],
                                ["$75", "$6.00", "$2.46", "$8.46", "$66.54"],
                                ["$100", "$8.00", "$3.19", "$11.19", "$88.81"],
                                ["$150", "$12.00", "$4.64", "$16.64", "$133.36"],
                                ["$200", "$16.00", "$6.09", "$22.09", "$177.91"],
                                ["$500", "$40.00", "$14.89", "$54.89", "$445.11"],
                                ["$1,000", "$80.00", "$29.17", "$109.17", "$890.83"],
                                ["$2,000*", "$120.00", "$57.97", "$177.97", "$1,822.03"],
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
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 12 }}>
                    *$2,000 row uses the capped commission rate (8% on first $1,500 only = $120) for eligible high-value categories. Processing fee calculated on $2,009.21 (sale + $9.21 shipping).
                </p>
                <div style={{ background: A_LIGHT, border: `1px solid ${A_MID}`, borderRadius: 12, padding: "14px 18px", fontSize: 14, color: "#0D0D1A", lineHeight: 1.7 }}>
                    <strong>Effective rate insight:</strong> On a $100 sale, Whatnot&apos;s combined fee is ~11.2% of the item price. On a $500 sale, it&apos;s ~10.9%. The effective rate gradually decreases at higher price points because the $0.30 fixed fee becomes proportionally smaller — and for eligible high-value items, the $1,500 cap makes a meaningful difference.
                </div>
            </section>

            {/* ════════════════════════════════
          SECTION 6 — Competitors
      ════════════════════════════════ */}
            <section id="vs-competitors" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Whatnot Fees vs eBay, Poshmark & Grailed (2026)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    For collectibles, trading cards, and niche categories, Whatnot&apos;s fees are highly competitive. Here&apos;s how it compares on a $150 item:
                </p>

                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 16 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Platform", "Fee on $150 Sale", "You Keep", "Listing Fee?", "Live Selling?"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Whatnot", "~$16.64 (~11.1%)", "~$133.36", "No", "Yes ✓"],
                                ["eBay", "~$20.80 (~13.8%)", "~$129.20", "No", "Limited"],
                                ["Poshmark", "$30.00 (20%)", "$120.00", "No", "No"],
                                ["Grailed", "~$19.23 (~12.7%)", "~$130.77", "No", "No"],
                                ["Mercari", "~$19.50 (13%)", "~$130.50", "No", "No"],
                                ["Depop", "~$15.00 (10%)", "~$135.00", "No", "No"],
                            ].map(([platform, fee, keep, listFee, live], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{platform}</td>
                                    <td style={{ padding: "13px 16px", color: "#DC2626", fontWeight: 500 }}>{fee}</td>
                                    <td style={{ padding: "13px 16px", color: "#16a34a", fontWeight: 600 }}>{keep}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{listFee}</td>
                                    <td style={{ padding: "13px 16px", color: live.includes("✓") ? A : "#888", fontWeight: live.includes("✓") ? 600 : 400 }}>{live}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic", marginBottom: 20 }}>
                    Estimates based on 2026 published fee rates. Always verify current rates before listing.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    Whatnot&apos;s ~11% effective fee beats eBay and Poshmark comfortably on cost alone. But Whatnot&apos;s real advantage isn&apos;t just the fee rate — it&apos;s the live selling format. Engaged auction bidders consistently push prices 20–60% above what the same item would fetch on a static listing platform, especially for collectibles, trading cards, and niche categories. The higher realized price often more than offsets any fee difference versus Depop or Mercari.
                </p>
            </section>

            {/* ════════════════════════════════
          SECTION 7 — Reduce Fees
      ════════════════════════════════ */}
            <section id="reduce-fees" style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    7 Ways to Maximize Your Whatnot Profit in 2026
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 28, fontSize: 15 }}>
                    You can&apos;t negotiate Whatnot&apos;s base commission — but you can structure your selling strategy to minimize what you pay and maximize what you keep.
                </p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
                    {[
                        {
                            num: "01",
                            title: "Always Calculate With the Combined 11–12% Rate",
                            desc: "The 8% commission headline is misleading for pricing purposes. Add the 2.9% + $0.30 processing fee and your true rate is 11–12% on most sales. If you price based on 8%, you'll consistently receive less than you planned. Always use the combined rate.",
                        },
                        {
                            num: "02",
                            title: "Exploit Category Discounts — Categorize Correctly",
                            desc: "Coins & Money sellers pay 4% commission instead of 8% — half the standard rate. Electronics sellers pay 5%. These discounts only apply if your item is correctly categorized. A misplaced listing in the wrong category forfeits the discount automatically.",
                        },
                        {
                            num: "03",
                            title: "Use the $1,500 Cap for High-Value Items in Eligible Categories",
                            desc: "If you sell high-value comics, trading cards, toys, or sports items, list them individually rather than bundling to a sub-$1,500 total. Each item sold separately can benefit from the commission cap on the portion above $1,500.",
                        },
                        {
                            num: "04",
                            title: "Encourage Bundle Purchases to Reduce Processing Fees",
                            desc: "The $0.30 fixed processing fee applies once per transaction, not per item. Actively encourage buyers to add multiple items to their order during your live show. Two $30 items sold together pay $0.30 once; sold separately they pay $0.60.",
                        },
                        {
                            num: "05",
                            title: "Build an Audience to Reduce Reliance on Promoted Shows",
                            desc: "Whatnot offers promoted show placement for a fee. Sellers with strong follower counts and repeat viewers can drive traffic organically without paying for promotion. Investing in your Whatnot presence today reduces paid promotion costs over time.",
                        },
                        {
                            num: "06",
                            title: "Use Giveaways Strategically to Drive Engagement",
                            desc: "Giveaways have zero commission and zero processing fees — you only pay shipping. A well-timed giveaway during a slow show can spike viewer counts and bidding energy on subsequent items, more than recovering the shipping cost in higher auction prices.",
                        },
                        {
                            num: "07",
                            title: "Price Every Item Before You Go Live — Not During",
                            desc: "The pressure of a live show is not the time to be doing fee math in your head. Calculate your minimum acceptable bid for every item before the show starts. Know your floor, and don't let auction energy push you into accepting a winning bid that doesn't cover your costs.",
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
                    How Feescal Takes the Whatnot Math Off Your Plate
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Calculating Whatnot fees manually before a live show means juggling the 8% commission, the 2.9% + $0.30 processing fee on the total order value including shipping, applicable category discounts, and whether the $1,500 cap applies. For every item. Before you go live.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Most sellers skip the math and price based on feel — then wonder why their payouts are consistently lower than expected. Feescal eliminates that gap. Enter your item price once and instantly see:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                        "Your exact Whatnot payout after commission and processing fees",
                        "Side-by-side profit comparison across Whatnot, eBay, Poshmark, Grailed, StockX, and 3 more platforms",
                        "Which marketplace gives you the highest net on that specific item and price point",
                        "Real-time results as you adjust price, shipping costs, and cost of goods",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, flexShrink: 0 }}>→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
                    For sellers who crosslist between Whatnot, eBay, and Grailed, the cross-platform view is the most valuable feature. You see every platform&apos;s payout side by side before you decide where to list — and you know in advance whether the live auction premium on Whatnot justifies the fee vs. a static listing elsewhere.
                </p>

                {/* CTA Block */}
                <div style={{ background: `linear-gradient(135deg, ${A} 0%, #FFB830 100%)`, borderRadius: 20, padding: "52px 40px", textAlign: "center" as const }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 10px", lineHeight: 1.25 }}>
                        Know Your Whatnot Profit Before You Go Live
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, margin: "0 0 28px", lineHeight: 1.65 }}>
                        Calculate your exact payout and compare across 8 platforms instantly — free, no account needed.
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
                    Bottom Line: Whatnot&apos;s Fees Are Competitive — But Know the Full 11–12% Rate
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Whatnot&apos;s 8% commission is genuinely competitive for a live selling platform with a built-in buyer audience, authentication infrastructure, and no listing fees. But the 8% headline understates what you actually pay — add processing fees and the real rate is 11–12%, and that&apos;s before factoring in shipping label costs if you&apos;re offering free shipping.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    The sellers who consistently profit on Whatnot are the ones who price using the full combined rate, exploit category discounts and the $1,500 cap where applicable, build their audience to reduce promotional spend, and pre-calculate their minimum acceptable bid for every item before going live.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, fontSize: 15 }}>
                    Use the tables and strategies above as your reference — and let Feescal handle the cross-platform math so every pricing decision before your next show is backed by real numbers, not guesswork.
                </p>
            </section>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 24 }} />
            <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                Last updated: March 2026. Whatnot fee rates and promotional commission discounts are subject to change. Always verify current rates in your Whatnot Seller Hub before listing.
            </p>
        </article>
    );
}