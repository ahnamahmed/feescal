export default function ComparisonTable() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">

          <div className="p-6 md:p-8 border-b border-slate-100 text-center">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">The Feescal Advantage</h3>
          </div>

          {/* Responsive Scroll Wrapper */}
          <div className="overflow-x-auto custom-scrollbar">
            {/* min-w-[500px] prevents the columns from squishing too tightly on small phones */}
            <table className="w-full text-left min-w-[500px] md:min-w-full">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-4 md:px-8 py-4 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Feature</th>
                  <th className="px-4 md:px-8 py-4 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Manual Guesswork</th>
                  <th className="px-4 md:px-8 py-4 text-[10px] md:text-xs font-black text-primary uppercase tracking-widest">Feescal PRO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base font-semibold text-slate-700">Fee Accuracy</td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base text-slate-500">+/- 5% Error</td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base text-emerald-600 font-bold flex items-center gap-1.5 md:gap-2">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> 100% Guaranteed
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base font-semibold text-slate-700">Calculation Speed</td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base text-slate-500">5-10 Minutes</td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base text-emerald-600 font-bold flex items-center gap-1.5 md:gap-2">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> Instant (0.1s)
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base font-semibold text-slate-700">Fee Updates</td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base text-slate-500">Manual Search</td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base text-emerald-600 font-bold flex items-center gap-1.5 md:gap-2">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> Auto-updates
                  </td>
                </tr>

                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base font-semibold text-slate-700">VAT/Sales Tax</td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base text-slate-500">Often Forgotten</td>
                  <td className="px-4 md:px-8 py-4 md:py-6 text-sm md:text-base text-emerald-600 font-bold flex items-center gap-1.5 md:gap-2">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span> Included
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  )
}