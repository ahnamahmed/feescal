export const metadata = {
  title: "eBay Seller Fees 2026: The Complete Guide (Updated Fee Structure)",
  description:
    "Everything eBay sellers need to know about 2026 fees — final value fees by category, insertion fees, Store subscriptions, hidden charges, and proven tips to reduce what eBay takes from every sale.",
  keywords: [
    "eBay seller fees 2026",
    "eBay final value fee 2026",
    "how much does eBay charge per sale",
    "eBay fee calculator",
    "eBay selling fees breakdown",
    "reduce eBay fees",
    "eBay Store subscription fees",
    "eBay profit calculator",
    "eBay fees explained",
    "eBay insertion fee",
  ],
};

export default function EbayFeesGuide() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 text-gray-800">
      {/* Hero */}
      <div className="mb-10">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
          Marketplace Strategies
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          eBay Seller Fees in 2026: The Complete Guide to Every Charge
          (Updated)
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          eBay's fee structure changed again in 2026. If you're still pricing
          based on last year's numbers — or guessing — you're likely leaving
          money on the table or, worse, selling at a loss. This guide breaks
          down every fee you'll encounter, what's new this year, and exactly how
          to keep more of every sale.
        </p>
        <div className="flex items-center gap-3 mt-6">
          <div className="w-9 h-9 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-sm">
            F
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Feescal Editorial Team
            </p>
            <p className="text-xs text-gray-400">
              March 5, 2026 · 10 min read
            </p>
          </div>
        </div>
      </div>

      <hr className="border-gray-200 mb-10" />

      {/* TOC */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-12">
        <p className="text-sm font-bold text-indigo-700 uppercase tracking-wider mb-3">
          In This Guide
        </p>
        <ol className="space-y-1 text-sm text-indigo-800 list-decimal list-inside">
          <li>
            <a href="#what-changed" className="hover:underline">
              What Changed in 2026
            </a>
          </li>
          <li>
            <a href="#insertion-fees" className="hover:underline">
              Insertion Fees
            </a>
          </li>
          <li>
            <a href="#final-value-fees" className="hover:underline">
              Final Value Fees by Category
            </a>
          </li>
          <li>
            <a href="#store-subscriptions" className="hover:underline">
              eBay Store Subscription Costs
            </a>
          </li>
          <li>
            <a href="#hidden-fees" className="hover:underline">
              Hidden Fees Most Sellers Miss
            </a>
          </li>
          <li>
            <a href="#reduce-fees" className="hover:underline">
              7 Ways to Reduce Your eBay Fees
            </a>
          </li>
          <li>
            <a href="#calculator" className="hover:underline">
              How Feescal Removes the Guesswork
            </a>
          </li>
        </ol>
      </div>

      {/* Section 1 */}
      <section id="what-changed" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What Changed in eBay's Fee Structure for 2026
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          eBay made several adjustments to its fee model entering 2026. The
          headline changes sellers need to know:
        </p>
        <ul className="space-y-3 text-gray-600 leading-relaxed list-none">
          {[
            "Final value fees now range from 2.5% to 15.3% depending on category and Store subscription level — some categories saw small increases, others minor decreases.",
            "Store subscription prices increased slightly across Basic, Premium, and Anchor tiers, though free listing allocations were expanded in select categories.",
            "eBay introduced AI-optimized ad bidding for Promoted Listings, making advertising fees more dynamic and harder to estimate without a calculator.",
            "New fee shielding for first-time sellers: new accounts get zero insertion fees and a reduced final value fee for their first 50 sales, replacing the old Free Listings program.",
            "EU sellers now face an additional Digital Fairness compliance fee.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-indigo-500 mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 2 */}
      <section id="insertion-fees" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Insertion Fees: What It Costs to List
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          An insertion fee is charged when you create a listing. The good news
          for most sellers: you get{" "}
          <strong>250 zero-insertion-fee listings per month</strong> without a
          Store subscription. Once you exceed that, each additional listing costs{" "}
          <strong>$0.35</strong>.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Important nuances to remember:
        </p>
        <ul className="space-y-2 text-gray-600 leading-relaxed list-disc list-inside">
          <li>
            Insertion fees are charged <em>per listing and per category</em> —
            if you list in two categories, you pay twice.
          </li>
          <li>
            Insertion fees are <strong>non-refundable</strong> even if your item
            doesn't sell.
          </li>
          <li>
            Optional listing upgrades (bold title, subtitle, gallery plus) are
            charged at listing time, not at sale.
          </li>
          <li>
            Auction-style listings remain insertion-fee-free across all
            categories.
          </li>
        </ul>
      </section>

      {/* Section 3 */}
      <section id="final-value-fees" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Final Value Fees by Category (2026 Rates)
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          The final value fee (FVF) is eBay's main revenue driver from sellers.
          It's calculated on the{" "}
          <strong>
            total transaction amount — item price + shipping + handling fees
          </strong>
          , not just the item price. Sales tax collected is excluded. A per-order
          fee of <strong>$0.30</strong> (orders ≤ $10) or{" "}
          <strong>$0.40</strong> (orders over $10) applies on top.
        </p>

        {/* Fee Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="text-left px-4 py-3 font-semibold">Category</th>
                <th className="text-left px-4 py-3 font-semibold">
                  No Store / Starter
                </th>
                <th className="text-left px-4 py-3 font-semibold">
                  Basic–Enterprise Store
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Most categories (default)", "13.6%", "9.35%–13.6%"],
                ["Books, DVDs & Movies, Music", "14.6%–15.3%", "Lower tiers apply"],
                ["Clothing, Shoes & Accessories", "13.6%", "9.35%"],
                ["Electronics (Computers, etc.)", "8%–13.6%", "Lower tiers apply"],
                ["Guitars & Basses", "~5.85%", "Lower tiers apply"],
                ["Heavy Equipment & Trailers", "~3%", "~2.5%"],
                ["Jewelry & Watches", "13.6%–15%+", "Store tiers apply"],
                ["Sports Cards & Collectibles", "13.6%+", "Store tiers apply"],
                ["Real Estate", "Fixed listing fee", "No FVF"],
              ].map(([cat, noStore, store], i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 font-medium text-gray-800">{cat}</td>
                  <td className="px-4 py-3 text-gray-600">{noStore}</td>
                  <td className="px-4 py-3 text-gray-600">{store}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 italic">
          Rates reflect eBay's 2026 published fee schedule. Always verify your
          specific category in eBay Seller Hub as rates can vary by subcategory
          and price tier.
        </p>

        {/* Real example callout */}
        <div className="mt-6 bg-gray-50 border-l-4 border-indigo-500 rounded-r-xl p-5">
          <p className="font-semibold text-gray-800 mb-1">
            Real Example: Selling a $120 pair of sneakers
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Item price ($120) + Shipping ($10) = $130 total transaction.
            <br />
            Final value fee: $130 × 13.6% = <strong>$17.68</strong>
            <br />
            Per-order fee: <strong>$0.40</strong>
            <br />
            Total eBay takes: <strong>$18.08</strong> — before shipping costs
            out of pocket.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="store-subscriptions" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          eBay Store Subscription Costs in 2026
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          A Store subscription lowers your final value fees and gives you more
          free listings. Whether it pays off depends entirely on your monthly
          sales volume.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="text-left px-4 py-3">Plan</th>
                <th className="text-left px-4 py-3">Monthly Cost</th>
                <th className="text-left px-4 py-3">Free Listings/mo</th>
                <th className="text-left px-4 py-3">FVF (most cats)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Starter", "$7.95", "250", "Same as no-store"],
                ["Basic", "$21.95", "1,000", "~9.35%"],
                ["Premium", "$59.95", "10,000", "~9.35%"],
                ["Anchor", "$299.95", "25,000", "~9.35%"],
                ["Enterprise", "$2,999.95", "100,000", "~9.35%"],
              ].map(([plan, cost, listings, fvf], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-medium text-gray-800">{plan}</td>
                  <td className="px-4 py-3 text-gray-600">{cost}</td>
                  <td className="px-4 py-3 text-gray-600">{listings}</td>
                  <td className="px-4 py-3 text-gray-600">{fvf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed mt-4 text-sm">
          For example: selling 10 smartphones at $500 each per month, a Basic
          Store saves roughly <strong>$22 per phone</strong> in FVF — or $220
          total. Subtract the $21.95 monthly fee and you net an extra{" "}
          <strong>$198.05/month</strong> purely from the fee reduction.
        </p>
      </section>

      {/* Section 5 */}
      <section id="hidden-fees" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Hidden eBay Fees Most Sellers Miss
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Standard fees are easy to find. These are the charges that quietly
          erode margins without many sellers noticing:
        </p>
        <div className="space-y-4">
          {[
            {
              title: "International Fee (+1.65%)",
              desc: "Applied on top of your standard FVF for every sale to an overseas buyer. A $100 cross-border sale in a standard category adds another $1.65 you didn't budget for.",
            },
            {
              title: "Below Standard Penalty (+6%)",
              desc: "If eBay evaluates your account as Below Standard on the 20th of the month, you're charged an extra 6% FVF on all sales the following month. This is reviewed monthly.",
            },
            {
              title: "Item Not As Described Penalty (+5%)",
              desc: "A Very High rate of INAD return requests in a category triggers a 5% surcharge on sales in that category. These two penalties can stack.",
            },
            {
              title: "Promoted Listings Fee (variable)",
              desc: "Promoted Listings Standard charges an ad rate only when your item sells — but that rate (typically 2%–15% of the sale price) often goes uncalculated. In competitive categories it's practically mandatory.",
            },
            {
              title: "Fees Calculated on Shipping Too",
              desc: "eBay calculates final value fees on the total transaction amount, which includes shipping. A seller charging $15 shipping on a $50 item pays FVF on $65, not $50.",
            },
          ].map(({ title, desc }, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 bg-red-50 border border-red-100 rounded-xl"
            >
              <span className="text-red-400 text-lg mt-0.5">⚠</span>
              <div>
                <p className="font-semibold text-gray-800 mb-1">{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 */}
      <section id="reduce-fees" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          7 Proven Ways to Reduce Your eBay Fees
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          You can't eliminate eBay fees — but you can engineer your selling
          approach to minimize them. Here's what actually works:
        </p>
        <div className="space-y-5">
          {[
            {
              num: "01",
              title: "Earn Top Rated Seller Status",
              desc: "Top Rated Sellers receive a 10% discount on final value fees for qualifying listings. Maintain fast shipping, high feedback, and low dispute rates to qualify.",
            },
            {
              num: "02",
              title: "Upgrade to a Store at the Right Volume",
              desc: "For most mid-volume sellers (20+ items/month), a Basic Store at $21.95/month pays for itself quickly. Run the math on your specific category's FVF reduction before subscribing.",
            },
            {
              num: "03",
              title: "Use Auction Format Strategically",
              desc: "Auction-style listings have no insertion fee. For fast-moving, in-demand inventory, auctions can reduce your listing costs to zero while generating competitive bids.",
            },
            {
              num: "04",
              title: "Price Shipping Into the Item Price",
              desc: "Free shipping can improve search ranking, and while eBay still calculates FVF on the full amount either way, consolidating price and shipping can simplify your pricing math.",
            },
            {
              num: "05",
              title: "Cap Your Promoted Listings Ad Rate",
              desc: "Set a manual ad rate for Promoted Listings rather than letting eBay's automated bidding run uncapped. Even a 2%–3% rate drives visibility without eating deep into margins.",
            },
            {
              num: "06",
              title: "Maintain Above Standard Performance",
              desc: "The 6% penalty for Below Standard sellers is avoidable. Respond to messages quickly, ship on time, and resolve disputes early. One bad month of penalties can wipe out weeks of profit.",
            },
            {
              num: "07",
              title: "Calculate Profit Before You List — Every Time",
              desc: "The most common way sellers lose money on eBay is by pricing without accounting for all fees. Using a fee calculator before listing removes the guesswork entirely.",
            },
          ].map(({ num, title, desc }, i) => (
            <div key={i} className="flex gap-5 items-start">
              <span className="text-3xl font-extrabold text-indigo-100 leading-none w-10 shrink-0">
                {num}
              </span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 — Feescal CTA */}
      <section id="calculator" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How Feescal Removes the Fee Calculation Guesswork
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Manually calculating eBay fees before every listing means juggling
          final value fee percentages, per-order charges, potential ad rates,
          international fees, and shipping — all at once, for every item you
          want to sell. Most sellers either skip it and hope for the best, or
          spend 10 minutes on math that should take 10 seconds.
        </p>
        <p className="text-gray-600 leading-relaxed mb-4">
          Feescal was built specifically for this problem. Enter your item price,
          shipping cost, and category — and instantly see:
        </p>
        <ul className="space-y-2 text-gray-600 text-sm leading-relaxed list-none mb-6">
          {[
            "Your exact eBay final value fee and per-order charge",
            "Net profit after all platform fees",
            "Side-by-side comparison across eBay, Poshmark, StockX, Depop, Mercari, and 4 other marketplaces",
            "Which platform gives you the highest margin on that specific item",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-indigo-500">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed mb-6">
          Instead of calculating once for eBay and hoping it's the best option,
          Feescal shows you the full picture across all 8 marketplaces in one
          view. You'll know before you list — not after the sale — whether eBay
          is actually the most profitable platform for that item.
        </p>

        {/* CTA block */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 text-white text-center">
          <p className="text-2xl font-extrabold mb-2">
            Know Your Profit Before You List
          </p>
          <p className="text-indigo-200 mb-6 text-sm">
            Calculate eBay fees instantly and compare across 8 marketplaces —
            free, no account needed.
          </p>
          <a
            href="/calculator"
            className="inline-block bg-white text-indigo-700 font-bold px-8 py-3 rounded-xl hover:shadow-lg transition-all text-sm"
          >
            Try Feescal Free →
          </a>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Bottom Line: eBay Fees in 2026 Reward Sellers Who Know Their Numbers
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          eBay's fee structure isn't designed to be simple — it's layered,
          category-specific, and full of modifiers that compound in ways most
          sellers don't anticipate. The sellers who come out ahead in 2026 are
          the ones who calculate first and list second.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you're a casual seller clearing out your closet or a
          full-time reseller managing thousands of listings, understanding
          exactly what eBay takes from every sale is the foundation of
          profitable selling. Use the fee structure above as your reference,
          apply the tips to minimize what you pay, and let Feescal do the
          calculation work so you can focus on sourcing and selling.
        </p>
      </section>

      <hr className="border-gray-200 mb-8" />
      <p className="text-xs text-gray-400 italic">
        Last updated: March 2026. eBay fee rates are subject to change. Always
        verify current rates in your eBay Seller Hub before listing.
      </p>
    </article>
  );
}