export default function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Maximize Your Reselling Margins</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Stop guessing your profits. Get real-time data for every major marketplace automatically updated with the latest tax and platform laws.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-slate-100 bg-background-light/50 hover:shadow-xl hover:shadow-primary/5 transition-all group">
            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Updated Fees</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Always up-to-date with 2026 fee structures for all platforms. Never worry about surprise costs again.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-100 bg-background-light/50 hover:shadow-xl hover:shadow-primary/5 transition-all group">
            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">pie_chart</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Margin vs ROI</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Understand the crucial difference between what you make and what you actually keep after all expenses.</p>
          </div>
          <div className="p-8 rounded-2xl border border-slate-100 bg-background-light/50 hover:shadow-xl hover:shadow-primary/5 transition-all group">
            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">view_column</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Comparison Engine</h3>
            <p className="text-slate-500 leading-relaxed text-sm">Compare multiple platforms side-by-side to find the absolute best place to list your specific inventory.</p>
          </div>
        </div>
      </div>
    </section>
  )
}