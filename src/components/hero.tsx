import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 text-xs font-bold w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Live: 2026 Fee Updates Integrated
          </div>
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
            Know Your Profit <br /><span className="text-indigo-600">Before</span> You Sell
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            The most accurate profit calculator for online sellers. Compare fees across 8 online marketplaces in real-time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/calculator" className="h-14 px-8 bg-indigo-600 text-white font-bold rounded-xl shadow-xl shadow-indigo-600/25 hover:scale-105 transition-transform flex items-center">
              Try Calculator Free
            </Link>
            <button className="h-14 px-8 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">play_circle</span>
              See How It Works
            </button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              <div className="size-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img alt="User" data-alt="Portrait of a female user smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1K7tly-5qAvwH4YBIg27GEwF0sqJ-cuhq35oFxm83cIYXFx9BuuG9BD8cmX9-pnrV0gtoHU0FGyoS5JeTxzd2OseM4jrULbL8Ogfg0bje75XaZjDu4JLNGUnNB4x6Tutx6EiJZxa6zqFtsbmc1mWvFvC9USMoRpwqezGC5Va7XfGAdCblNMs-1YqWoPl-_2ehalKW1YJGhe4hzxPBlHA8byRIq-507aBROtgT1wq8WeDol2jKKI4JctuSjR755qeaThy8enjMK7I" />
              </div>
              <div className="size-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img alt="User" data-alt="Portrait of a male professional user" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQZuvTtyXSRs-I5pvcmJzal5VK99BR3yUuTwXv6iPEaRMHoKcppN2EPyvVM7dJvr_8_tzZqXSbil7mlDo-BMjAvJ2EYM-dVXZfvgfR53k6dkrfYnh7BRTW6mMOx0oiBdOkdX-6HSOkDslH4TEXbrhZt3BhT4pa9vYQEnA0mSVIreKxviFiKLiNM0JY1mheS342Vg5mxtGto53yYqVJqADGpJaX_RdI8kMLCMBF2I8-PQTFi_jtYataqpWc4eADhmYOgxpv1FS6blM" />
              </div>
              <div className="size-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img alt="User" data-alt="Portrait of a confident reseller" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhpG2HieRpNs3XpnicmjxfLgPbroAjmJb_ksPbNXMLLA1cr9J5Ysbjcc_gjKRBVFMgGK02y0sDNddnLYGUep5ymPp_9TlPLKF4x3nTomwtHLqCZXfJM4FVhP4q2-1L6_zPWHUABFNdwTFhCr76aibMsSr1rdtJYAWtoQeoOTW6YDCUMq47KSK9TmKbH136AAjs3W7BTSmYgfi5TNU7oGmbJwD2IzMJC2PQ07xXmfLNiJC-9-Mg78366ZcWUBI_6TvKineIvEodcW0" />
              </div>
            </div>
            <p className="text-sm font-medium text-slate-500">Trusted by 10k+ top-rated sellers</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 blur-2xl opacity-30"></div>
          <div className="relative glass-card rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2">
                <div className="size-3 rounded-full bg-red-400"></div>
                <div className="size-3 rounded-full bg-amber-400"></div>
                <div className="size-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="px-3 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500">PRO DASHBOARD</div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">eBay Profit</p>
                  <p className="text-xl font-black text-slate-900">$42.40</p>
                  <div className="mt-2 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[65%]"></div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Vinted Profit</p>
                  <p className="text-xl font-black text-slate-900">$51.20</p>
                  <div className="mt-2 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[82%]"></div>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Depop Profit</p>
                  <p className="text-xl font-black text-slate-900">$48.90</p>
                  <div className="mt-2 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-[74%]"></div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3 font-bold text-slate-600">Metric</th>
                      <th className="px-4 py-3 font-bold text-slate-600">Sale Price</th>
                      <th className="px-4 py-3 font-bold text-slate-600">Platform Fee</th>
                      <th className="px-4 py-3 font-bold text-slate-600">Net Margin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-3 font-medium">eBay UK</td>
                      <td className="px-4 py-3">$120.00</td>
                      <td className="px-4 py-3 text-red-500">-$15.36</td>
                      <td className="px-4 py-3 font-bold text-emerald-600">35.3%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Vinted</td>
                      <td className="px-4 py-3">$110.00</td>
                      <td className="px-4 py-3 text-red-500">-$3.00</td>
                      <td className="px-4 py-3 font-bold text-emerald-600">46.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-xl hidden md:block">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Avg. Growth</p>
                <p className="text-lg font-black text-slate-900">+22.4%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}