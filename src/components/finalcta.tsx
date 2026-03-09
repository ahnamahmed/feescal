import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl bg-indigo-600 p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-indigo-200">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">Ready to stop losing profit?</h2>
          <p className="text-indigo-100 text-base lg:text-lg max-w-2xl text-white/90">Join over 10,000 sellers who trust Feescal to manage their online business. Start your free trial today.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/calculator" className="h-14 px-10 bg-white text-indigo-600 font-black rounded-xl shadow-xl hover:scale-105 transition-transform text-base flex items-center">Try Feescal Now</Link>
          </div>
          <p className="text-white/60 text-xs font-medium">No credit card required • Instant access</p>
        </div>
      </div>
    </section>
  )
}