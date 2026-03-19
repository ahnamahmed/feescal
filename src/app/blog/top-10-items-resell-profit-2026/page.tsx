export const metadata = {
    title: "Top 10 Items to Resell for Maximum Profit in 2026 (Platform-by-Platform Fee Breakdown)",
    description:
        "The 10 most profitable resale categories in 2026 — with real sourcing prices, typical sale prices, and exact profit comparisons across eBay, Poshmark, Depop, Mercari, StockX, and Grailed after all fees.",
    keywords: [
        "best items to resell for profit 2026",
        "most profitable things to resell 2026",
        "top reselling categories 2026",
        "what to resell to make money 2026",
        "best items to flip 2026",
        "reselling platform comparison",
        "highest profit margin resale items",
        "best platform to resell sneakers 2026",
        "reselling for beginners 2026",
        "how to maximize reselling profit",
        "resell fee comparison eBay Poshmark Mercari",
        "best marketplace to sell clothes 2026",
    ],
};

// 60-30-10 Color System
// 60% → #FFFFFF / #FAFAFA  (dominant backgrounds)
// 30% → #0D0D1A / #555     (dark text, structure)
// 10% → #6C47FF            (Feescal indigo accent)

const A = "#FFB830";
const A_LIGHT = "#FFF4E5";
const A_MID = "#FFE0A0";

const ITEMS = [
    {
        rank: "01",
        category: "Sneakers & Hype Footwear",
        emoji: "👟",
        color: "#FF6B35",
        colorLight: "#FFF4F0",
        sourcingRange: "$90–$180",
        saleRange: "$200–$600",
        bestPlatforms: ["StockX", "eBay", "Grailed"],
        whyProfitable:
            "Limited releases and collab drops between Nike, Jordan, Adidas, and New Balance consistently sell at 2–4× retail on the secondary market. Authentication infrastructure on StockX removes buyer hesitation. Speed is everything — highest margins are captured within the first 14 days of a release.",
        platformComparison: [
            { platform: "StockX (Lv1)", buyPrice: "$120", sellPrice: "$350", fees: "$47 (12%+$5)", profit: "$183", margin: "52%" },
            { platform: "eBay", buyPrice: "$120", sellPrice: "$350", fees: "$48 (~13.8%)", profit: "$182", margin: "52%" },
            { platform: "Grailed", buyPrice: "$120", sellPrice: "$350", fees: "$44 (~12.7%)", profit: "$186", margin: "53%" },
            { platform: "Poshmark", buyPrice: "$120", sellPrice: "$350", fees: "$70 (20%)", profit: "$160", margin: "46%" },
        ],
        tips: [
            "Enter Nike SNKRS, Adidas, and retailer raffles consistently — free entries compound over time.",
            "List on StockX and Grailed simultaneously. First sale wins; delist from the other immediately.",
            "Margins peak in the first 7 days. Price aggressively early rather than holding for a higher price that may not materialize.",
        ],
    },
    {
        rank: "02",
        category: "Designer Handbags",
        emoji: "👜",
        color: "#9B59B6",
        colorLight: "#F9F0FF",
        sourcingRange: "$40–$300",
        saleRange: "$150–$2,000+",
        bestPlatforms: ["Poshmark", "eBay", "Grailed"],
        whyProfitable:
            "Entry-level luxury (Coach, Kate Spade, Michael Kors) sourced from thrift stores and estate sales regularly sells for 3–5× sourcing cost. Designer (Louis Vuitton, Gucci, Chanel) appreciates over time and commands strong premiums. Authentication matters enormously — authenticated bags command 30–40% price premiums.",
        platformComparison: [
            { platform: "eBay", buyPrice: "$80", sellPrice: "$280", fees: "$38 (~13.6%)", profit: "$162", margin: "58%" },
            { platform: "Poshmark", buyPrice: "$80", sellPrice: "$280", fees: "$56 (20%)", profit: "$144", margin: "51%" },
            { platform: "Grailed", buyPrice: "$80", sellPrice: "$280", fees: "$36 (~12.7%)", profit: "$164", margin: "59%" },
            { platform: "Mercari", buyPrice: "$80", sellPrice: "$280", fees: "$29 (10%+ship)", "profit": "$171", margin: "61%" },
        ],
        tips: [
            "Learn hardware details, stitching patterns, and date codes for your target brands — fakes are common and expensive mistakes.",
            "Condition grades (Excellent, Very Good, Good) dramatically affect price. Always be accurate.",
            "For bags over $500, eBay's Authenticity Guarantee or Entrupy authentication adds buyer confidence and justifies premium pricing.",
        ],
    },
    {
        rank: "03",
        category: "Vintage & Y2K Clothing",
        emoji: "👕",
        color: "#E84060",
        colorLight: "#FFF0F3",
        sourcingRange: "$3–$25",
        saleRange: "$35–$400",
        bestPlatforms: ["Depop", "Grailed", "eBay"],
        whyProfitable:
            "Nostalgia-driven demand for 1990s and early 2000s clothing continues to surge in 2026. Gen Z buyers on Depop pay premium prices for authentic vintage band tees, Y2K denim, and 90s sportswear. Sourcing cost from thrift stores is near-zero relative to resale value, making this one of the highest-ROI categories for new sellers.",
        platformComparison: [
            { platform: "Depop (US)", buyPrice: "$8", sellPrice: "$65", fees: "$2.59 (3.3%+$0.45)", profit: "$54.41", margin: "84%" },
            { platform: "Grailed", buyPrice: "$8", sellPrice: "$65", fees: "$8.26 (~12.7%)", profit: "$48.74", margin: "75%" },
            { platform: "eBay", buyPrice: "$8", sellPrice: "$65", fees: "$9.28 (~13.6%+$0.40)", "profit": "$47.72", margin: "73%" },
            { platform: "Poshmark", buyPrice: "$8", sellPrice: "$65", fees: "$13.00 (20%)", profit: "$44.00", margin: "68%" },
        ],
        tips: [
            "Depop's zero-commission model makes it the highest-payout platform for clothing by a wide margin. Always list vintage clothing on Depop first.",
            "Niche keywords in titles (brand + era + style) dramatically improve search visibility. 'Vintage 1996 Nike Air Max Tee' outperforms 'Nike shirt.'",
            "Photographing on a model or mannequin vs. flat lay consistently produces 20–40% higher sale prices.",
        ],
    },
    {
        rank: "04",
        category: "Refurbished Electronics",
        emoji: "💻",
        color: "#2D9B6F",
        colorLight: "#EDFAF4",
        sourcingRange: "$50–$300",
        saleRange: "$200–$900",
        bestPlatforms: ["eBay", "Mercari", "Facebook Marketplace"],
        whyProfitable:
            "Enterprise laptops (Dell Latitude, HP EliteBook, Lenovo ThinkPad from 2021–2023) command $380–$620 refurbished despite corporate liquidation prices of $80–$180. The EU's Right-to-Repair legislation (fully enforced January 2026) increased demand for serviceable devices by 64% in European markets, creating cross-border arbitrage opportunities. Median gross margins reach 55–68% after refurb costs and fees.",
        platformComparison: [
            { platform: "eBay", buyPrice: "$150", sellPrice: "$480", fees: "$66 (~13.6%)", profit: "$264", margin: "55%" },
            { platform: "Mercari", buyPrice: "$150", sellPrice: "$480", fees: "$49 (10%+ship)", profit: "$281", margin: "59%" },
            { platform: "Swappa", buyPrice: "$150", sellPrice: "$480", fees: "$15 (flat)", profit: "$315", margin: "66%" },
            { platform: "Facebook Marketplace", buyPrice: "$150", sellPrice: "$480", fees: "$0 (local)", profit: "$330", margin: "69%" },
        ],
        tips: [
            "Source from corporate liquidation auctions (Liquidity Services, GovPlanet). Non-booting units often need only a $40–$80 part and triple in value after repair.",
            "Document every upgrade (RAM, SSD, battery replacement) in your listing — verified specs justify premium pricing and reduce return rate significantly.",
            "Always test before listing. A simple checkmark like 'all ports tested, battery holds 4+ hours' separates your listing from untested competition.",
        ],
    },
    {
        rank: "05",
        category: "Retro Gaming Consoles & Games",
        emoji: "🎮",
        color: "#E84060",
        colorLight: "#FFF0F3",
        sourcingRange: "$15–$80",
        saleRange: "$80–$500",
        bestPlatforms: ["eBay", "Mercari", "Facebook Marketplace"],
        whyProfitable:
            "Original PlayStation, N64, GameCube, and Game Boy systems routinely sell for 300–500% above thrift store sourcing prices. The games often exceed the consoles in value — Pokémon cartridges consistently sell at triple digits, and cult titles like EarthBound (SNES) command $150–$300+. Nostalgia cycles mean demand is driven by buyers with strong disposable income reliving their childhood.",
        platformComparison: [
            { platform: "eBay", buyPrice: "$25", sellPrice: "$120", fees: "$17 (~13.6%+$0.40)", profit: "$78", margin: "65%" },
            { platform: "Mercari", buyPrice: "$25", sellPrice: "$120", fees: "$13 (10%+ship)", profit: "$82", margin: "68%" },
            { platform: "Facebook Marketplace", buyPrice: "$25", sellPrice: "$110", fees: "$0", profit: "$85", margin: "77%" },
            { platform: "Poshmark", buyPrice: "$25", sellPrice: "$120", fees: "$24 (20%)", profit: "$71", margin: "59%" },
        ],
        tips: [
            "Test every cartridge before listing — game saves, audio, and video all matter. 'Tested and working' in the title consistently produces 20–30% higher final prices.",
            "Bundle controllers, cables, and memory cards together. A complete-in-box system sells for 2–3× the price of the console alone.",
            "eBay's sold listings are your pricing bible. Check 'sold listings' (not active listings) to see what buyers actually paid in the last 90 days.",
        ],
    },
    {
        rank: "06",
        category: "Athletic & Outdoor Gear",
        emoji: "🧥",
        color: "#1A7F5A",
        colorLight: "#EDFAF4",
        sourcingRange: "$20–$100",
        saleRange: "$80–$500",
        bestPlatforms: ["Poshmark", "eBay", "Depop"],
        whyProfitable:
            "Lululemon, Patagonia, and Arc'teryx consistently sell for 60–80% of retail even in used condition. Buyers want durable, technical outdoor gear and premium athleisure at a discount — and they're willing to pay. These items are also heavy enough that Poshmark's flat $8.27 shipping rate becomes a real advantage over weight-based alternatives.",
        platformComparison: [
            { platform: "Poshmark", buyPrice: "$35", sellPrice: "$150", fees: "$30 (20%)", profit: "$85", margin: "57%" },
            { platform: "eBay", buyPrice: "$35", sellPrice: "$150", fees: "$21 (~13.6%+$0.40)", profit: "$94", margin: "63%" },
            { platform: "Depop", buyPrice: "$35", sellPrice: "$150", fees: "$5.40 (3.3%+$0.45+ship)", profit: "$109", margin: "73%" },
            { platform: "Mercari", buyPrice: "$35", sellPrice: "$150", fees: "$16 (10%+ship)", profit: "$99", margin: "66%" },
        ],
        tips: [
            "Check inside zippers and seams for model numbers. Older, discontinued Patagonia and Arc'teryx models often sell for more than current versions.",
            "Wash and photograph gear meticulously — a clean, well-lit photo of technical outerwear can add $30–$50 to the final sale price.",
            "For heavy jackets and coats, Poshmark's flat shipping rate makes it especially competitive. A 4 lb Arc'teryx jacket ships the same as a lightweight tee.",
        ],
    },
    {
        rank: "07",
        category: "LEGO Sets (Retired)",
        emoji: "🧱",
        color: "#FFB830",
        colorLight: "#FFFBF0",
        sourcingRange: "$30–$150",
        saleRange: "$80–$800",
        bestPlatforms: ["eBay", "BrickLink", "Mercari"],
        whyProfitable:
            "Retired LEGO sets appreciate an average of 10–15% annually after discontinuation. Star Wars, Harry Potter, Modular Buildings, and Technic sets are the highest performers. Sealed-in-box condition commands 2–4× the original retail price within 3–5 years. Box condition is critical — even minor dents or creases can reduce sale price by 20–30%.",
        platformComparison: [
            { platform: "eBay", buyPrice: "$80", sellPrice: "$240", fees: "$33 (~13.6%+$0.40)", profit: "$127", margin: "53%" },
            { platform: "BrickLink", buyPrice: "$80", sellPrice: "$240", fees: "$10 (~4%)", profit: "$150", margin: "63%" },
            { platform: "Mercari", buyPrice: "$80", sellPrice: "$240", fees: "$25 (10%+ship)", profit: "$135", margin: "56%" },
            { platform: "Facebook Marketplace", buyPrice: "$80", sellPrice: "$220", fees: "$0", profit: "$140", margin: "64%" },
        ],
        tips: [
            "Track LEGO retirement dates on Brickset.com. Buy 2–3 months before a set retires — demand and price spike immediately after retirement is confirmed.",
            "Store sealed sets in a cool, dry place. Heat, moisture, and UV light yellow boxes over time, reducing sale value significantly.",
            "BrickLink has a dedicated LEGO buyer base and lower fees than eBay — worth setting up a storefront if LEGO becomes a primary category.",
        ],
    },
    {
        rank: "08",
        category: "Trading Cards (Sports & TCG)",
        emoji: "🃏",
        color: "#7C3AED",
        colorLight: "#F5F3FF",
        sourcingRange: "$5–$500",
        saleRange: "$20–$10,000+",
        bestPlatforms: ["eBay", "Whatnot", "COMC"],
        whyProfitable:
            "The trading card market has matured significantly since the 2020–2021 boom but remains highly profitable for collectors who understand grading. PSA-graded cards command 3–10× the price of raw equivalents. Rookie cards for breakout players, vintage Pokémon, and limited serial-numbered sports cards are the strongest performers. Whatnot's live auction format consistently produces 20–40% higher prices than static listings for high-value single cards.",
        platformComparison: [
            { platform: "eBay", buyPrice: "$40", sellPrice: "$180", fees: "$25 (~13.6%+$0.40)", profit: "$115", margin: "64%" },
            { platform: "Whatnot", buyPrice: "$40", sellPrice: "$180", fees: "$18 (~10% cap)", profit: "$122", margin: "68%" },
            { platform: "COMC", buyPrice: "$40", sellPrice: "$180", fees: "$27 (~15%)", profit: "$113", margin: "63%" },
            { platform: "Poshmark", buyPrice: "$40", sellPrice: "$180", fees: "$36 (20%)", profit: "$104", margin: "58%" },
        ],
        tips: [
            "Grade high-value raw cards with PSA or BGS before selling. A $50 raw rookie card graded PSA 10 can sell for $300+. Factor in $25–$50 grading cost and 60-day turnaround.",
            "Whatnot's live auction format creates bidding urgency that static listings can't replicate. For cards over $100, live auction typically outperforms fixed price.",
            "Pokémon and sports singles are category-specific — learn one market deeply before expanding. Card valuations are highly condition and set-dependent.",
        ],
    },
    {
        rank: "09",
        category: "Vintage Cameras & Analog Film Equipment",
        emoji: "📷",
        color: "#2D9B6F",
        colorLight: "#EDFAF4",
        sourcingRange: "$15–$100",
        saleRange: "$60–$600",
        bestPlatforms: ["eBay", "Mercari", "Etsy"],
        whyProfitable:
            "Early 2000s digital point-and-shoots (Sony Cyber-shots, Canon PowerShots) have seen a 400% surge in demand driven by aesthetic trends on social media. Film cameras (Olympus Stylus, Canon AE-1, Pentax K1000) consistently appreciate as Gen Z embraces analog photography. Technics turntables rose 19% in value year-over-year in 2025–2026 per Reverb's Price Index. These items source cheaply from estate sales and thrift stores relative to resale value.",
        platformComparison: [
            { platform: "eBay", buyPrice: "$20", sellPrice: "$95", fees: "$13 (~13.6%+$0.40)", profit: "$62", margin: "65%" },
            { platform: "Etsy", buyPrice: "$20", sellPrice: "$95", fees: "$7 (~7.5%)", profit: "$68", margin: "72%" },
            { platform: "Mercari", buyPrice: "$20", sellPrice: "$95", fees: "$10 (10%+ship)", profit: "$65", margin: "68%" },
            { platform: "Depop", buyPrice: "$20", sellPrice: "$95", fees: "$3.59 (3.3%+$0.45)", profit: "$71.41", "margin": "75%" },
        ],
        tips: [
            "Test every camera before listing. A working camera with proof-of-function photos sells for 40–60% more than one listed 'untested as-is.'",
            "Film cameras with popular lenses (Canon FD, Pentax M42 mount) attract photographers willing to pay premium prices for specific glass.",
            "Include test shots in your listing for point-and-shoots — real photos taken by the camera are your best advertisement.",
        ],
    },
    {
        rank: "10",
        category: "Cast Iron Cookware (Vintage)",
        emoji: "🍳",
        color: "#FF6B35",
        colorLight: "#FFF4F0",
        sourcingRange: "$5–$30",
        saleRange: "$40–$400",
        bestPlatforms: ["eBay", "Etsy", "Facebook Marketplace"],
        whyProfitable:
            "Vintage Griswold, Wagner, and Lodge cast iron cookware has developed a dedicated collector base willing to pay significant premiums for pre-1950s pieces. A Griswold #8 skillet sourced for $12 at a garage sale regularly sells for $80–$150. The category is hyper-niche, which means less competition and more knowledgeable buyers who prioritize authenticity over price. Seasoning quality, heat ring presence, and logo variants dramatically affect value.",
        platformComparison: [
            { platform: "eBay", buyPrice: "$15", sellPrice: "$95", fees: "$13 (~13.6%+$0.40)", profit: "$67", margin: "71%" },
            { platform: "Etsy", buyPrice: "$15", sellPrice: "$95", fees: "$7 (~7.5%)", profit: "$73", margin: "77%" },
            { platform: "Mercari", buyPrice: "$15", sellPrice: "$95", fees: "$10 (10%+ship)", profit: "$70", margin: "74%" },
            { platform: "Facebook Marketplace", buyPrice: "$15", sellPrice: "$85", fees: "$0 (local)", profit: "$70", margin: "82%" },
        ],
        tips: [
            "Learn Griswold and Wagner logo variants — 'small logo' vs 'large logo' pieces can differ by $50–$100 in value for the identical size pan.",
            "Cast iron is heavy. Local pickup via Facebook Marketplace eliminates shipping complexity and produces strong margins.",
            "Re-season before selling: a properly seasoned, rust-free piece commands 30–50% more than a neglected one. 20 minutes in the oven is worth $20–$40.",
        ],
    },
];

export default function Top10ResellItems() {
    return (
        <article style={{ maxWidth: 768, margin: "0 auto", padding: "64px 24px", color: "#0D0D1A", fontFamily: "inherit" }}>

            {/* ── BADGE ── */}
            <div style={{ marginBottom: 20 }}>
                <span style={{ background: A_LIGHT, color: A, fontSize: 11, fontWeight: 700, padding: "5px 14px", borderRadius: 100, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
                    Reselling Tips
                </span>
            </div>

            {/* ── TITLE ── */}
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 800, color: "#0D0D1A", lineHeight: 1.2, marginBottom: 20, letterSpacing: "-0.5px" }}>
                Top 10 Items to Resell for Maximum Profit in 2026 — With Platform-by-Platform Fee Breakdowns
            </h1>

            <p style={{ fontSize: 17, color: "#555", lineHeight: 1.85, marginBottom: 28 }}>
                Knowing what to sell is only half the equation. The other half is knowing <em>where</em> to sell it — because the same $150 item can earn you $109 on one platform and $85 on another, purely due to fee differences. This guide breaks down the 10 most profitable resale categories in 2026, with real sourcing price ranges, typical sale prices, and exact profit comparisons across major platforms so you can make every listing decision based on data, not habit.
            </p>

            {/* ── AUTHOR ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: A_MID, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: A }}>F</div>
                <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "#0D0D1A", margin: 0 }}>Feescal Editorial Team</p>
                    <p style={{ fontSize: 12, color: "#aaa", margin: 0 }}>March 19, 2026 · 14 min read</p>
                </div>
            </div>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 44 }} />

            {/* ── QUICK NAV ── */}
            <div style={{ background: "#FAFAFA", border: "1px solid #EBEBF5", borderLeft: `4px solid ${A}`, borderRadius: "0 16px 16px 0", padding: "24px 28px", marginBottom: 52 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: A, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 14px" }}>Jump to Any Item</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 20px" }}>
                    {ITEMS.map(item => (
                        <a key={item.rank} href={`#item-${item.rank}`} style={{ fontSize: 13, color: "#555", textDecoration: "none", display: "flex", gap: 8, alignItems: "center" }}>
                            <span style={{ color: A, fontWeight: 700, fontSize: 11 }}>{item.rank}</span>
                            <span>{item.category}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* ── ITEMS ── */}
            {ITEMS.map((item, idx) => (
                <section key={item.rank} id={`item-${item.rank}`} style={{ marginBottom: 72 }}>

                    {/* Item header */}
                    <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16 }}>
                        <div style={{ background: item.colorLight, border: `1.5px solid ${item.color}30`, borderRadius: 16, padding: "16px 18px", textAlign: "center" as const, flexShrink: 0, minWidth: 72 }}>
                            <p style={{ fontSize: 28, margin: "0 0 4px" }}>{item.emoji}</p>
                            <p style={{ fontSize: 11, fontWeight: 800, color: item.color, margin: 0 }}>{item.rank}</p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", margin: "0 0 8px", lineHeight: 1.2 }}>{item.category}</h2>
                            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" as const }}>
                                <span style={{ background: "#F0FFF8", color: "#16a34a", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>
                                    Source: {item.sourcingRange}
                                </span>
                                <span style={{ background: A_LIGHT, color: A, fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 100 }}>
                                    Resale: {item.saleRange}
                                </span>
                                {item.bestPlatforms.map(p => (
                                    <span key={p} style={{ background: "#FAFAFA", color: "#555", fontSize: 12, fontWeight: 500, padding: "4px 12px", borderRadius: 100, border: "1px solid #EBEBF5" }}>{p}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Why profitable */}
                    <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>{item.whyProfitable}</p>

                    {/* Platform comparison table */}
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 10px" }}>Platform Profit Comparison</p>
                    <div style={{ overflowX: "auto", borderRadius: 14, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                            <thead>
                                <tr style={{ background: "#0D0D1A" }}>
                                    {["Platform", "Buy Price", "Sell Price", "Total Fees", "Your Profit", "Margin"].map(h => (
                                        <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontWeight: 600, fontSize: 12, color: "white" }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {item.platformComparison.map((row, i) => (
                                    <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                        <td style={{ padding: "11px 14px", fontWeight: 600, color: "#0D0D1A" }}>{row.platform}</td>
                                        <td style={{ padding: "11px 14px", color: "#888" }}>{row.buyPrice}</td>
                                        <td style={{ padding: "11px 14px", color: "#555" }}>{row.sellPrice}</td>
                                        <td style={{ padding: "11px 14px", color: "#DC2626", fontWeight: 500 }}>{row.fees}</td>
                                        <td style={{ padding: "11px 14px", color: "#16a34a", fontWeight: 700 }}>{row.profit}</td>
                                        <td style={{ padding: "11px 14px" }}>
                                            <span style={{ background: i === 0 ? item.colorLight : "#F5F5F5", color: i === 0 ? item.color : "#888", fontWeight: 700, fontSize: 12, padding: "3px 10px", borderRadius: 100 }}>{row.margin}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Tips */}
                    <div style={{ background: "#FAFAFA", borderRadius: 14, border: "1px solid #EBEBF5", padding: "18px 20px" }}>
                        <p style={{ fontSize: 12, fontWeight: 700, color: A, letterSpacing: "0.08em", textTransform: "uppercase" as const, margin: "0 0 12px" }}>Tips to Maximize Profit</p>
                        <div style={{ display: "flex", flexDirection: "column" as const, gap: 10 }}>
                            {item.tips.map((tip, i) => (
                                <div key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: "#555", lineHeight: 1.7 }}>
                                    <span style={{ color: A, flexShrink: 0, marginTop: 2 }}>→</span>
                                    <span>{tip}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {idx < ITEMS.length - 1 && <hr style={{ borderColor: "#EBEBF5", marginTop: 48 }} />}
                </section>
            ))}

            {/* ── FEE CHEAT SHEET ── */}
            <section style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    Quick Platform Fee Cheat Sheet (2026)
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 24, fontSize: 15 }}>
                    Before choosing where to list any item, this is the fee landscape you&apos;re navigating. Fees are calculated on item price unless otherwise noted.
                </p>
                <div style={{ overflowX: "auto", borderRadius: 16, border: "1px solid #EBEBF5", marginBottom: 20 }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                        <thead>
                            <tr style={{ background: A }}>
                                {["Platform", "Effective Fee Rate", "Fee Base", "Best For"].map(h => (
                                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontWeight: 600, fontSize: 13, color: "white" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Depop (US)", "~3.5–4.5%", "Item + shipping", "Vintage clothing, Y2K, cameras"],
                                ["Etsy", "~7.5%", "Item price", "Vintage goods, collectibles, cookware"],
                                ["Mercari", "~10–11%", "Item + shipping", "General merchandise, electronics"],
                                ["Grailed", "~12.5–13.5%", "Item + shipping", "Designer, streetwear, sneakers"],
                                ["StockX (Lv1)", "~12% + $5 ship", "Item price", "Authenticated sneakers, hype items"],
                                ["eBay", "~13.6–14%", "Item + shipping", "Everything — largest buyer base"],
                                ["Whatnot", "~11–12%", "Item + shipping", "Trading cards, collectibles (live)"],
                                ["Poshmark", "20%", "Item price only", "Brand-name fashion, heavy items"],
                            ].map(([platform, rate, base, bestFor], i) => (
                                <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
                                    <td style={{ padding: "13px 16px", fontWeight: 600, color: "#0D0D1A" }}>{platform}</td>
                                    <td style={{ padding: "13px 16px", color: A, fontWeight: 600 }}>{rate}</td>
                                    <td style={{ padding: "13px 16px", color: "#888" }}>{base}</td>
                                    <td style={{ padding: "13px 16px", color: "#666" }}>{bestFor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── 5 UNIVERSAL TIPS ── */}
            <section style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    5 Universal Rules for Maximizing Reselling Profit Across All Categories
                </h2>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: 20 }}>
                    {[
                        { num: "01", title: "Calculate fees before you buy — not after you sell", desc: "Your profit is determined at sourcing, not at listing. Know your walk-away sell price and the fee rate for your target platform before buying anything. If the numbers don't work at a realistic sale price after fees, don't buy the item." },
                        { num: "02", title: "Match the item to the platform, not the platform to your habit", desc: "Vintage cameras earn 75% margins on Depop. Selling the same camera on Poshmark earns 68% because you're paying 20% commission instead of 3.5%. Every category has a natural best platform — use the fee cheat sheet above to guide every decision." },
                        { num: "03", title: "Crosslist strategically — then manage inventory tightly", desc: "List on 2–3 platforms simultaneously to maximize exposure and sell-through rate. When an item sells, delist from the others immediately. One hour of overlap is worth the reach. One week of overlap means duplicated shipping, negative feedback, and wasted refund fees." },
                        { num: "04", title: "Condition and photography are pricing multipliers", desc: "A well-photographed item in accurately described condition consistently sells for 20–40% more than a poorly listed equivalent. Clean your items, photograph in natural light, and use honest condition grades. Your photos are your storefront — invest in them." },
                        { num: "05", title: "Specialize before you scale", desc: "80% of reselling profits come from 20% of categories. Rather than dabbling in everything, develop deep expertise in 2–3 niches where you can identify quality quickly, know authentic from fake, and spot underpriced inventory instantly. Expertise is your moat." },
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

            {/* ── FEESCAL CTA ── */}
            <section style={{ marginBottom: 60 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#0D0D1A", marginBottom: 16 }}>
                    How Feescal Makes Cross-Platform Profit Calculation Instant
                </h2>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Every profit comparison table in this guide was calculated manually — which took time. For your actual listing decisions, you need those numbers instantly, for every item, before you commit to a platform. That&apos;s exactly what Feescal does.
                </p>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 16, fontSize: 15 }}>
                    Enter your item price once and instantly see:
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column" as const, gap: 10 }}>
                    {[
                        "Your exact payout across all 8 major platforms — side by side, in one view",
                        "Which marketplace gives you the highest net margin on that specific item at that price",
                        "How fee differences translate to real dollar amounts, not just percentages",
                        "Real-time updates as you adjust price, shipping, and cost of goods",
                    ].map((item, i) => (
                        <li key={i} style={{ display: "flex", gap: 12, fontSize: 15, color: "#555", lineHeight: 1.7 }}>
                            <span style={{ color: A, flexShrink: 0 }}>→</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <p style={{ color: "#555", lineHeight: 1.85, marginBottom: 36, fontSize: 15 }}>
                    For any item in this list — a pair of sneakers, a vintage camera, a LEGO set — Feescal tells you in 5 seconds whether StockX, eBay, or Grailed gives you the best return. That&apos;s the difference between making the right decision every time and defaulting to the platform you used last time.
                </p>

                {/* CTA */}
                <div style={{ background: `linear-gradient(135deg, ${A} 100%)`, borderRadius: 20, padding: "52px 40px", textAlign: "center" as const }}>
                    <p style={{ fontSize: 26, fontWeight: 800, color: "white", margin: "0 0 10px", lineHeight: 1.25 }}>
                        Know Your Profit Before You List — Every Time
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, margin: "0 0 28px", lineHeight: 1.65 }}>
                        Compare your payout across 8 platforms instantly. Free, no account needed.
                    </p>
                    <a
                        href="/calculator"
                        style={{ display: "inline-block", background: "white", color: A, fontWeight: 700, padding: "14px 32px", borderRadius: 12, fontSize: 15, textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                    >
                        Try Feescal Free →
                    </a>
                </div>
            </section>

            <hr style={{ borderColor: "#EBEBF5", marginBottom: 24 }} />
            <p style={{ fontSize: 12, color: "#ccc", fontStyle: "italic" }}>
                Last updated: March 2026. Platform fees are subject to change. All profit estimates are illustrative and based on typical market prices — actual results depend on item condition, timing, and demand. Always verify current fee rates in each platform&apos;s Seller Hub before listing.
            </p>
        </article>
    );
}