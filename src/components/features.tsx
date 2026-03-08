export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="text-indigo-600 font-black text-[10px] tracking-widest uppercase mb-4">
            The Engine
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Maximize Your Reselling Margins.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop guessing your profits. Get real-time data for every major marketplace automatically updated with the latest tax and platform laws.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Feature 1 */}
          <div className="group relative p-8 rounded-[16px] bg-[#f8fafc] border border-slate-200/60 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 overflow-hidden cursor-default">
            {/* Hover Top Border Highlight */}
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

            <div className="size-12 bg-white rounded-[10px] shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>currency_exchange</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Updated Fees</h3>
            <p className="text-slate-500 leading-relaxed text-sm font-medium">
              Always up-to-date with 2026 fee structures for all platforms. Never worry about surprise costs eating into your payout.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group relative p-8 rounded-[16px] bg-[#f8fafc] border border-slate-200/60 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 overflow-hidden cursor-default">
            <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            <div className="size-12 bg-white rounded-[10px] shadow-sm border border-slate-100 flex items-center justify-center text-emerald-500 mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>donut_small</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Margin vs ROI</h3>
            <p className="text-slate-500 leading-relaxed text-sm font-medium">
              Understand the crucial difference between what you make and what you actually keep after platform, shipping, and tax expenses.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative p-8 rounded-[16px] bg-[#f8fafc] border border-slate-200/60 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-300 overflow-hidden cursor-default">
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

            <div className="size-12 bg-white rounded-[10px] shadow-sm border border-slate-100 flex items-center justify-center text-amber-500 mb-6 group-hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>splitscreen</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Comparison Engine</h3>
            <p className="text-slate-500 leading-relaxed text-sm font-medium">
              Compare multiple platforms side-by-side to find the absolute most profitable place to list your specific inventory.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}