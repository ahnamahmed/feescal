"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator as CalcIcon,
  Trophy,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Layers,
  Clock,
  DollarSign,
  CheckCircle2,
  XCircle,
  Zap,
  Shield,
  Star,
} from "lucide-react";
import { generateResults, feeDatabase } from "@/lib/feeEngine";

/* ─── Animation Helpers ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─── Lite Calculator Preview ─── */
function LitePreview() {
  const results = useMemo(() => {
    const raw = generateResults({
      price: 85,
      shipping: 8,
      cost: 30,
      sellerPaysShipping: true,
    });

    const platforms = Object.keys(raw).map((id) => ({
      id,
      name: feeDatabase[id].name,
      profit: raw[id].profit,
      margin: raw[id].margin,
      fee: raw[id].fee,
    }));

    return platforms.sort((a, b) => b.profit - a.profit).slice(0, 4);
  }, []);

  const winner = results[0];

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100/80 overflow-hidden w-full max-w-md">
      {/* Mini header */}
      <div className="px-6 pt-6 pb-4 border-b border-slate-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-indigo-600 rounded-[4px]">
              <CalcIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-slate-900">Feescal</span>
          </div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Live Preview</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Sale</p>
            <p className="text-base font-black text-slate-900">$85</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Cost</p>
            <p className="text-base font-black text-slate-900">$30</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Ship</p>
            <p className="text-base font-black text-slate-900">$8</p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-6 py-4 space-y-2">
        {results.map((p, i) => {
          const isWinner = i === 0;
          return (
            <div
              key={p.id}
              className={`flex items-center justify-between p-3 rounded-lg transition-all ${isWinner
                ? "bg-emerald-50 border border-emerald-200/60 ring-1 ring-emerald-500/10"
                : "bg-slate-50/50 border border-slate-100"
                }`}
            >
              <div className="flex items-center space-x-2">
                {isWinner && <Trophy className="w-3.5 h-3.5 text-emerald-500" />}
                <span className={`text-sm font-bold ${isWinner ? "text-emerald-700" : "text-slate-600"}`}>
                  {p.name}
                </span>
              </div>
              <div className="text-right">
                <span className={`text-base font-black ${isWinner ? "text-emerald-600" : "text-slate-700"}`}>
                  ${p.profit.toFixed(2)}
                </span>
                <span className="text-[10px] font-bold text-slate-400 ml-2">
                  {p.margin.toFixed(1)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom badge */}
      <div className="px-6 pb-5 pt-2">
        <div className="flex items-center justify-center space-x-1.5 py-2 bg-indigo-50 rounded-lg border border-indigo-100/50">
          <Zap className="w-3 h-3 text-indigo-500" />
          <span className="text-[10px] font-black text-indigo-600 uppercase tracking-wider">
            8 Platforms Compared Instantly
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Platform Logos (Monochrome Text) ─── */
const platforms = [
  { name: "eBay", letter: "e" },
  { name: "Poshmark", letter: "P" },
  { name: "TikTok Shop", letter: "T" },
  { name: "StockX", letter: "S" },
  { name: "Mercari", letter: "M" },
  { name: "Depop", letter: "D" },
  { name: "Whatnot", letter: "W" },
  { name: "Vinted", letter: "V" },
];

/* ─── Comparison Data ─── */
const comparisonRows = [
  { feature: "Time per listing", manual: "~5 min research", feescal: "< 2 seconds" },
  { feature: "Platforms compared", manual: "1–2 at best", feescal: "8 simultaneously" },
  { feature: "Hidden fees caught", manual: "Missed often", feescal: "All accounted for" },
  { feature: "2026 fee updates", manual: "Manual lookup", feescal: "Auto-integrated" },
  { feature: "Profit accuracy", manual: "±15–25% off", feescal: "Penny-exact" },
  { feature: "Margin / ROI metrics", manual: "Not calculated", feescal: "Built-in" },
];

/* ═══════════════════════════════════════════
   MAIN LANDING PAGE
   ═══════════════════════════════════════════ */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] overflow-hidden">
      {/* ─── STICKY NAV ─── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-indigo-600 rounded-lg shadow-lg shadow-indigo-200/50">
              <CalcIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-black text-slate-900 tracking-tight">Feescal</span>
          </div>
          <Link
            href="/calculator"
            className="group flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200/50 active:scale-[0.97]"
          >
            <span>Open Calculator</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="relative py-20 md:py-28 lg:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative">
          {/* Left: Copy */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200/60 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <span className="text-xs font-bold text-slate-600">Live: 2026 Fee Updates Integrated</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]"
            >
              Know Your Profit{" "}
              Before You Sale
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-lg"
            >
              Compare fees across <strong className="text-slate-700">8 reselling platforms</strong> in real-time. Stop guessing and start profiting.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4">
              <Link
                href="/calculator"
                className="group inline-flex items-center space-x-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-200/50 active:scale-[0.97]"
              >
                <span>Try Calculator Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#comparison"
                className="inline-flex items-center space-x-2 bg-white hover:bg-slate-50 text-slate-700 text-base font-bold px-8 py-4 rounded-xl border border-slate-200 transition-all duration-200 hover:shadow-md"
              >
                <span>See How It Works</span>
              </a>
            </motion.div>

            {/* Social proof mini */}
            <motion.div variants={fadeUp} custom={4} className="flex items-center space-x-3 pt-2">
              <div className="flex -space-x-2">
                {[
                  "bg-indigo-500",
                  "bg-emerald-500",
                  "bg-amber-500",
                  "bg-rose-500",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-white flex items-center justify-center text-white text-[10px] font-black`}
                  >
                    {["A", "R", "K", "M"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500">
                <strong className="text-slate-700">1,200+</strong> resellers using Feescal
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Live Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="animate-float">
              <LitePreview />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="py-12 border-y border-slate-100 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="text-center space-y-8"
          >
            <motion.p variants={fadeUp} className="text-xs font-black text-slate-400 uppercase tracking-[0.25em]">
              Updated for 2026 Fee Structures
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={1}
              className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
            >
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="flex items-center space-x-2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-sm font-black text-slate-500 border border-slate-200/50">
                    {p.letter}
                  </div>
                  <span className="text-sm font-bold">{p.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── VALUE PROP GRID ─── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16 space-y-4"
          >
            <motion.p variants={fadeUp} className="text-xs font-black text-indigo-600 uppercase tracking-[0.25em]">
              Why Feescal
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
            >
              Built for the Way You Actually Sell
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-slate-500 max-w-2xl mx-auto"
            >
              Every feature designed to save you time and maximize your margins.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Updated 2026 Fees",
                description:
                  "Every platform's latest fee structure—including Poshmark's new tiered model, eBay's per-order fee, and TikTok's affiliate logic—baked in.",
                accent: "from-indigo-500 to-indigo-600",
                iconBg: "bg-indigo-50",
                iconColor: "text-indigo-600",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Margin vs ROI",
                description:
                  "See your profit margin instantly for every platform. Know which items deserve a exposure listing and which need a premium marketplace.",
                accent: "from-emerald-500 to-emerald-600",
                iconBg: "bg-emerald-50",
                iconColor: "text-emerald-600",
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Side-by-Side Comparison",
                description:
                  "Compare all 8 platforms in one view—sorted by profit. No more spreadsheet clutters. One input, instant clarity across every marketplace.",
                accent: "from-amber-500 to-orange-500",
                iconBg: "bg-amber-50",
                iconColor: "text-amber-600",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={i}
                className="group relative bg-white rounded-2xl border border-slate-200/60 p-8 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r ${card.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-6 ${card.iconColor}`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3 tracking-tight">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── COMPARISON SECTION ─── */}
      <section id="comparison" className="py-24 md:py-32 bg-gray-50 border-y border-slate-100 relative overflow-hidden">

        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16 space-y-4"
          >
            <motion.p variants={fadeUp} className="text-xs font-black text-indigo-600 uppercase tracking-[0.25em]">
              The Difference
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
            >
              Manual Guesswork vs. Feescal
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-slate-500 text-lg max-w-xl mx-auto">
              See how much time and money you&apos;re leaving on the table.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
              <div className="px-6 py-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Feature</span>
              </div>
              <div className="px-6 py-4 text-center border-x border-slate-700/30">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-400">Manual</span>
              </div>
              <div className="px-6 py-4 text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600">Feescal</span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonRows.map((row, i) => (
              <motion.div
                key={row.feature}
                variants={fadeUp}
                custom={i * 0.5}
                className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <div className="px-6 py-4 flex items-center">
                  <span className="text-sm font-bold text-slate-700">{row.feature}</span>
                </div>
                <div className="px-6 py-4 flex items-center justify-center space-x-2 border-x border-gray-100">
                  <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="text-sm text-slate-500">{row.manual}</span>
                </div>
                <div className="px-6 py-4 flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm font-bold text-slate-900">{row.feescal}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/calculator"
              className="group inline-flex items-center space-x-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white text-base font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-[0.97]"
            >
              <span>Stop Guessing — Try Feescal Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING SECTION ─── */}
      < section className="py-24 md:py-32" >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="text-center mb-16 space-y-4"
          >
            <motion.p variants={fadeUp} className="text-xs font-black text-indigo-600 uppercase tracking-[0.25em]">
              Pricing
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
            >
              Simple. Transparent. No Surprises.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
          >
            {/* Casual Tier */}
            <motion.div
              variants={fadeUp}
              custom={0}
              className="bg-white rounded-2xl border border-slate-200/60 p-8 hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-500 flex flex-col"
            >
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-5 h-5 text-slate-500" />
                  <h3 className="text-lg font-black text-slate-900">Casual</h3>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-black text-slate-900">$0</span>
                  <span className="text-slate-400 font-bold">/forever</span>
                </div>
                <p className="text-sm text-slate-500 mt-3">Perfect for occasional sellers and getting started.</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "5 core platforms (eBay, Poshmark, Depop, Mercari, Vinted)",
                  "Instant profit calculation",
                  "Side-by-side comparison",
                  "2026 fee updates included",
                  "Mobile-friendly PWA",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/calculator"
                className="block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition-all duration-200"
              >
                Get Started Free
              </Link>
            </motion.div>

            {/* Pro Tier */}
            <motion.div
              variants={fadeUp}
              custom={1}
              className="relative bg-gradient-to-b from-indigo-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl shadow-indigo-200/40 flex flex-col"
            >
              {/* Popular badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="flex items-center space-x-1.5 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-200/30">
                  <Star className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="w-5 h-5 text-indigo-200" />
                  <h3 className="text-lg font-black">Pro</h3>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-5xl font-black">$0</span>
                  <span className="text-indigo-200 font-bold">/beta</span>
                </div>
                <p className="text-sm text-indigo-200 mt-3">For serious resellers who need every edge.</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Casual",
                  "TikTok Shop (w/ affiliate logic)",
                  "StockX (5-level seller tiers)",
                  "Whatnot live seller fees",
                  "Non-standard category rates",
                  "Priority feature requests",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-indigo-100">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/calculator"
                className="block w-full text-center bg-white hover:bg-indigo-50 text-indigo-700 font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg"
              >
                Unlock Pro — Free During Beta
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      < section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100" >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-6 text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ready to profit{" "}
            before you sale?
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Join thousands of resellers who stopped guessing and started profiting with Feescal.
          </p>
          <Link
            href="/calculator"
            className="group inline-flex items-center space-x-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold px-10 py-5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-200/50 active:scale-[0.97]"
          >
            <span>Try Feescal Free Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* ─── FOOTER ─── */}
      < footer className="py-12 border-t border-slate-100" >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-indigo-600 rounded-md">
                <CalcIcon className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-bold text-slate-900">Feescal</span>
              <span className="text-xs text-slate-400 ml-2">Profit & Fee Analysis for the Modern Reseller</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              <span className="text-xs font-bold text-slate-400">All systems operational · Updated March 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
