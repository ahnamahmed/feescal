import Link from "next/link";
import { Check, BadgeCheck } from "lucide-react";

export default function PricingCards() {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-slate-500">Scale your business without the overhead.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-10 rounded-2xl border border-slate-100 bg-white hover:border-indigo-600/20 transition-all flex flex-col">
            <h4 className="text-xl font-bold text-slate-900 mb-2">Casual Seller</h4>
            <p className="text-slate-500 text-sm mb-6">Perfect for occasional clear-outs.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-slate-900">$0</span>
              <span className="text-slate-400 font-bold">/ forever</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <Check className="text-emerald-500 w-[18px] h-[18px]" />
                5 basic calculators
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <Check className="text-emerald-500 w-[18px] h-[18px]" />
                Basic eBay &amp; Depop fees
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <Check className="text-emerald-500 w-[18px] h-[18px]" />
                Monthly fee updates
              </li>
            </ul>
            <Link href="/calculator" className="w-full h-12 border-2 border-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center">Start Free</Link>
          </div>
          <div className="p-10 rounded-2xl border-2 border-indigo-600 bg-gradient-to-b from-white to-indigo-50/30 relative flex flex-col scale-105 shadow-2xl z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg shadow-indigo-600/40">
              Most Popular
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Pro Powerhouse</h4>
            <p className="text-slate-500 text-sm mb-6">For full-time resellers and shops.</p>
            <div className="mb-8">
              <span className="text-5xl font-black text-slate-900">$12</span>
              <span className="text-slate-400 font-bold">/ month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <BadgeCheck className="text-indigo-600 w-[18px] h-[18px]" />
                Unlimited calculations
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <BadgeCheck className="text-indigo-600 w-[18px] h-[18px]" />
                All marketplaces (20+)
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <BadgeCheck className="text-indigo-600 w-[18px] h-[18px]" />
                ROI &amp; Margin Analytics
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-slate-600">
                <BadgeCheck className="text-indigo-600 w-[18px] h-[18px]" />
                Bulk Inventory Import
              </li>
            </ul>
            <Link href="/calculator" className="w-full h-12 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/25 hover:brightness-110 transition-all flex items-center justify-center">Go Pro Now</Link>
          </div>
        </div>
      </div>
    </section>
  )
}