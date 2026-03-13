import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Column: Premium Copy & Actions */}
        <div className="flex flex-col gap-8 lg:pr-8">

          {/* Refined Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-[11px] font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-600"></span>
            </span>
            Live: 2026 Fee Updates
          </div>

          {/* Premium Typography Headline */}
          <h1 className="text-6xl lg:text-[5rem] font-black leading-[1.05] tracking-tighter text-slate-900">
            Know Your Profit <br />
            <span className="text-indigo-600">Before</span> You Sell.
          </h1>

          <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
            The most accurate profit calculator for online sellers. Compare fees across 8 marketplaces instantly and protect your margins.
          </p>

          {/* Polished CTAs */}
          <div className="flex flex-row items-center gap-4 flex-wrap pt-2">
            <Link href="/calculator" className="h-14 px-8 bg-indigo-600 text-white font-bold rounded-[8px] hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center whitespace-nowrap shrink-0">
              Try Calculator Now
            </Link>
            <button className="h-14 px-6 bg-transparent text-slate-600 font-bold rounded-[8px] hover:bg-slate-100 hover:text-slate-900 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">play_circle</span>
              See How It Works
            </button>
          </div>

          {/* Enhanced Social Proof */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6 border-t border-slate-200/60 mt-4">

            {/* Avatar Cluster with Hover Effects */}
            <div className="flex -space-x-3">
              {[
                '/avatars/avatar-1.jpg',
                '/avatars/avatar-2.jpg',
                '/avatars/avatar-3.jpg',
                '/avatars/avatar-4.jpg',
              ].map((src, i) => (
                <div key={i} className="size-10 rounded-full ring-4 ring-[#f8fafc] bg-slate-200 overflow-hidden hover:-translate-y-1 hover:z-10 transition-transform cursor-pointer shadow-sm relative">
                  <Image alt={`User ${i + 1}`} src={src} fill className="object-cover" sizes="40px" />
                </div>
              ))}
            </div>

            {/* Rating & Copy */}
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[13px] text-slate-500 font-medium tracking-tight">
                Trusted by <span className="font-bold text-slate-900">10,000+</span> top-rated sellers
              </p>
            </div>

          </div>
        </div>

        {/* Right Column: Detailed, Realistic, Interactive Mockup */}
        <div className="relative lg:ml-auto w-full max-w-lg mt-12 lg:mt-0">

          {/* Subtler Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/10 blur-3xl rounded-full pointer-events-none"></div>

          {/* Main Mockup Container - Adjusted padding for mobile */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[12px] p-4 sm:p-6 shadow-2xl shadow-slate-200/50">

            {/* Mockup Header */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 border-b border-slate-100 pb-4">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-indigo-500"></div>
                <div className="size-2.5 rounded-full bg-emerald-500"></div>
                <div className="size-2.5 rounded-full bg-amber-500"></div>
              </div>
              <div className="px-2 py-1 bg-indigo-50 rounded-[4px] text-[9px] font-black text-indigo-600 tracking-widest uppercase">
                Pro Dashboard
              </div>
            </div>

            {/* Detailed Data Cards Grid */}
            <div className="space-y-6">

              {/* FIX: Flex row with horizontal scroll on mobile, Grid on desktop */}
              <div className="flex sm:grid sm:grid-cols-3 gap-3 sm:gap-4 overflow-x-auto pb-2 sm:pb-0 snap-x custom-scrollbar">

                {/* Poshmark Card */}
                <div className="min-w-[130px] sm:min-w-0 p-3 sm:p-4 bg-slate-50 rounded-[8px] border border-slate-100 relative group overflow-hidden snap-start shrink-0">
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 group-hover:scale-x-100 scale-x-0 transition-transform origin-left"></div>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Poshmark</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">$88.00</p>
                  <div className="mt-2.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[80%] rounded-full"></div>
                  </div>
                  <p className="text-[9px] font-semibold text-slate-500 mt-1.5">Margin: <span className="text-indigo-600 font-bold">80.0%</span></p>
                </div>

                {/* StockX Card */}
                <div className="min-w-[130px] sm:min-w-0 p-3 sm:p-4 bg-slate-50 rounded-[8px] border border-slate-100 relative group overflow-hidden snap-start shrink-0">
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-emerald-500 group-hover:scale-x-100 scale-x-0 transition-transform origin-left"></div>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">StockX</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">$87.40</p>
                  <div className="mt-2.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[80%] rounded-full"></div>
                  </div>
                  <p className="text-[9px] font-semibold text-slate-500 mt-1.5">Margin: <span className="text-emerald-600 font-bold">80.0%</span></p>
                </div>

                {/* eBay Card */}
                <div className="min-w-[130px] sm:min-w-0 p-3 sm:p-4 bg-slate-50 rounded-[8px] border border-slate-100 relative group overflow-hidden snap-start shrink-0">
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-500 group-hover:scale-x-100 scale-x-0 transition-transform origin-left"></div>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">eBay Profit</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">$103.70</p>
                  <div className="mt-2.5 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[86%] rounded-full"></div>
                  </div>
                  <p className="text-[9px] font-semibold text-slate-500 mt-1.5">Margin: <span className="text-amber-600 font-bold">86.4%</span></p>
                </div>

              </div>

              {/* FIX: Horizontal scroll wrapper for the data table */}
              <div className="bg-white rounded-[12px] border border-slate-100 shadow-inner overflow-hidden overflow-x-auto custom-scrollbar">
                {/* Enforced min-width so table columns don't compress */}
                <table className="w-full text-left text-xs min-w-[380px]">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-slate-500 uppercase tracking-tight text-[10px]">Metric</th>
                      <th className="px-4 py-3 font-semibold text-slate-500 uppercase tracking-tight text-[10px]">Sale Price</th>
                      <th className="px-4 py-3 font-semibold text-slate-500 uppercase tracking-tight text-[10px]">Platform Fee</th>
                      <th className="px-4 py-3 font-semibold text-slate-500 uppercase tracking-tight text-[10px]">Net Margin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-slate-900">eBay UK</td>
                      <td className="px-4 py-3 tracking-tight">$120.00</td>
                      <td className="px-4 py-3 text-red-500 tracking-tight">-$16.30</td>
                      <td className="px-4 py-3 font-black text-emerald-600">86.4%</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-slate-900">Poshmark</td>
                      <td className="px-4 py-3 tracking-tight">$110.00</td>
                      <td className="px-4 py-3 text-red-500 tracking-tight">-$22.00</td>
                      <td className="px-4 py-3 font-black text-emerald-600">80.0%</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-slate-900">StockX</td>
                      <td className="px-4 py-3 tracking-tight">$105.00</td>
                      <td className="px-4 py-3 text-red-500 tracking-tight">-$17.60</td>
                      <td className="px-4 py-3 font-black text-emerald-600">80.0%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

          {/* Floating Key Metrics */}

          {/* Avg. Growth Statistic (floating bottom left) */}
          <div className="absolute -bottom-6 -left-8 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-[12px] shadow-xl shadow-slate-200/30 animate-float-delayed hidden md:block z-10">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 ring-2 ring-emerald-50">
                <span className="material-symbols-outlined text-xl">arrow_outward</span>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. Growth</p>
                <p className="text-xl font-black text-slate-900 mt-0.5 tracking-tighter">+22.4%</p>
              </div>
            </div>
          </div>

          {/* Real-time Sync Status (floating top right) */}
          <div className="absolute -top-8 -right-8 bg-white border border-slate-100 p-4 rounded-[12px] shadow-xl animate-float hidden md:block">
            <div className="flex items-center gap-4">
              <div className="size-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 ring-2 ring-indigo-50">
                <span className="material-symbols-outlined text-xl">wifi_protected_setup</span>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Real-time Sync</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">8 Marketplaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}