"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
    DollarSign,
    Package,
    Truck,
    Calculator as CalcIcon,
    ShoppingBag,
    Settings2,
    Trophy,
    Percent,
    Star,
    Bookmark,
    Smartphone,
    Info,
    RotateCcw,
    Share2,
    Check,
    ArrowLeft
} from "lucide-react";
import { generateResults, feeDatabase } from "@/lib/feeEngine";
import Link from "next/link";
import Image from "next/image";

const round = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

export default function CalculatorPage() {
    const [salePrice, setSalePrice] = useState<number | "">(0);
    const [itemCost, setItemCost] = useState<number | "">(0);
    const [shippingCost, setShippingCost] = useState<number | "">(0);
    const [sellerPaysShipping, setSellerPaysShipping] = useState(true);

    const [isProMode, setIsProMode] = useState(false);
    const [tiktokAffiliatePercent, setTiktokAffiliatePercent] = useState<number | "">(0);
    const [stockxSellerLevel, setStockxSellerLevel] = useState<1 | 2 | 3 | 4 | 5>(1);
    const [isNonStandardCategory, setIsNonStandardCategory] = useState(false);
    const [copied, setCopied] = useState(false);

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("reseller_calculator_settings");
        if (saved) {
            try {
                const data = JSON.parse(saved);
                if (typeof data.salePrice !== 'undefined') setSalePrice(data.salePrice);
                if (typeof data.itemCost !== 'undefined') setItemCost(data.itemCost);
                if (typeof data.shippingCost !== 'undefined') setShippingCost(data.shippingCost);
                if (typeof data.sellerPaysShipping !== 'undefined') setSellerPaysShipping(data.sellerPaysShipping);
                if (typeof data.isProMode !== 'undefined') setIsProMode(data.isProMode);
                if (typeof data.tiktokAffiliatePercent !== 'undefined') setTiktokAffiliatePercent(data.tiktokAffiliatePercent);
                if (typeof data.stockxSellerLevel !== 'undefined') setStockxSellerLevel(data.stockxSellerLevel);
                if (typeof data.isNonStandardCategory !== 'undefined') setIsNonStandardCategory(data.isNonStandardCategory);
            } catch (e) {
                console.error("Failed to load settings", e);
            }
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        const data = {
            salePrice,
            itemCost,
            shippingCost,
            sellerPaysShipping,
            isProMode,
            tiktokAffiliatePercent,
            stockxSellerLevel,
            isNonStandardCategory
        };
        localStorage.setItem("reseller_calculator_settings", JSON.stringify(data));
    }, [salePrice, itemCost, shippingCost, sellerPaysShipping, isProMode, tiktokAffiliatePercent, stockxSellerLevel, isNonStandardCategory]);

    // Raw calculations - only runs when pricing variables change
    const rawResults = useMemo(() => {
        return generateResults({
            price: Number(salePrice) || 0,
            shipping: Number(shippingCost) || 0,
            cost: Number(itemCost) || 0,
            sellerPaysShipping,
            tiktokAffiliatePercent: Number(tiktokAffiliatePercent) || 0,
            stockxSellerLevel,
            isNonStandardCategory
        });
    }, [salePrice, shippingCost, itemCost, sellerPaysShipping, tiktokAffiliatePercent, stockxSellerLevel, isNonStandardCategory]);

    // Final display results - filters and sorts rawResults
    const results = useMemo(() => {
        const platforms: any[] = [];

        Object.keys(rawResults).forEach(id => {
            const platform = feeDatabase[id];
            const res = rawResults[id];
            const isPro = id === "whatnot" || id === "tiktok" || id === "stockx";

            if (isPro && !isProMode) return;

            const platformResult = {
                id,
                name: platform.name,
                isPro,
                totalFee: res.fee,
                profit: res.profit,
                margin: res.margin,
                sellingFee: res.platformFee,
                procFee: res.procFee,
                note: undefined as string | undefined
            };

            if (id === "stockx") platformResult.note = "Includes flat $5 shipping fee";
            if (id === "vinted") platformResult.note = "Buyer pays Protection Fee";
            if (id === "mercari") platformResult.note = "10% Seller Commission + Shipping";
            if (id === "grailed") platformResult.note = "9% commission + 3.49% payment processing";
            if (id === "tiktok") {
                const affiliateNote = Number(tiktokAffiliatePercent) > 0 ? `Includes ${tiktokAffiliatePercent}% affiliate` : "";
                const categoryNote = isNonStandardCategory ? "12.5% Non-Standard" : "";
                platformResult.note = [affiliateNote, categoryNote].filter(Boolean).join(" | ");
            }

            platforms.push(platformResult);
        });

        return platforms.sort((a, b) => b.profit - a.profit);
    }, [rawResults, isProMode, tiktokAffiliatePercent, isNonStandardCategory]);

    const maxProfit = results.length > 0 ? results[0].profit : 0;

    const handleReset = () => {
        setSalePrice(0);
        setItemCost(0);
        setShippingCost(0);
        setSellerPaysShipping(true);
        setTiktokAffiliatePercent(0);
        setStockxSellerLevel(1);
        setIsNonStandardCategory(false);
    };

    const handleShare = () => {
        const summary = `💰 Reseller Profit Summary (2026)\n` +
            `--------------------------------\n` +
            `Sale Price: $${Number(salePrice || 0).toFixed(2)}\n` +
            `Item Cost: $${Number(itemCost || 0).toFixed(2)}\n` +
            `Shipping: $${Number(shippingCost || 0).toFixed(2)} (${sellerPaysShipping ? 'Seller Pays' : 'Buyer Pays'})\n` +
            `--------------------------------\n` +
            results.map((p: any, i: number) => `${i === 0 ? '🏆 ' : '- '}${p.name}: $${p.profit.toFixed(2)} (Margin: ${p.margin.toFixed(1)}%)`).join('\n') +
            `\n--------------------------------\n` +
            `Calculated via Feescal`;

        navigator.clipboard.writeText(summary);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 bg-[#f8fafc]">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Link href="/" className="p-2 hover:bg-slate-100 rounded-[4px] transition-colors mr-1">
                            <ArrowLeft className="w-5 h-5 text-slate-400" />
                        </Link>
                        <div className="flex flex-col">
                            <div className="h-8 flex items-center">
                                <Image
                                    src="/logo.svg"
                                    alt="Feescal Logo"
                                    width={240}
                                    height={240}
                                    priority
                                    className="h-36 w-auto"
                                />
                            </div>
                            <div className="mt-2">
                                <span className="text-[11px] font-medium text-gray-500 tracking-tight leading-none mt-1">
                                    Profit & Fee Analysis for the Modern Reseller
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3 bg-white p-1.5 rounded-[4px] border border-slate-100 shadow-sm">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-tighter pl-2">Pro Mode</span>
                        <button
                            onClick={() => setIsProMode(!isProMode)}
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isProMode ? "bg-indigo-600" : "bg-slate-200"}`}
                        >
                            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${isProMode ? "translate-x-5" : "translate-x-0"}`} />
                        </button>
                    </div>
                </div>

                {/* Control Panel (Variables) */}
                <div className="saas-card p-8 bg-white">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center space-x-2">
                            <Settings2 className="w-4 h-4 text-indigo-500" />
                            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Control Panel</h2>
                        </div>
                        <button
                            onClick={handleReset}
                            className="group flex items-center space-x-1.5 text-[10px] font-black text-slate-400 hover:text-indigo-600 transition-colors uppercase tracking-[0.1em]"
                        >
                            <RotateCcw className="w-3 h-3 group-hover:rotate-[-90deg] transition-transform duration-300" />
                            <span>Clear All</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="salePrice" className="label-text">Sale Price</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                        <DollarSign className="h-4 w-4 text-slate-400" />
                                    </div>
                                    <input
                                        type="number"
                                        id="salePrice"
                                        className="input-field input-with-icon text-lg font-bold"
                                        placeholder="0.00"
                                        value={salePrice}
                                        onChange={(e) => setSalePrice(e.target.value === "" ? "" : Number(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="itemCost" className="label-text">Item Cost</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                            <Package className="h-4 w-4 text-slate-400" />
                                        </div>
                                        <input
                                            type="number"
                                            id="itemCost"
                                            className="input-field input-with-icon font-semibold"
                                            placeholder="0.00"
                                            value={itemCost}
                                            onChange={(e) => setItemCost(e.target.value === "" ? "" : Number(e.target.value))}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="shippingCost" className="label-text">Ship Cost</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                            <Truck className="h-4 w-4 text-slate-400" />
                                        </div>
                                        <input
                                            type="number"
                                            id="shippingCost"
                                            className="input-field input-with-icon font-semibold"
                                            placeholder="0.00"
                                            value={shippingCost}
                                            onChange={(e) => setShippingCost(e.target.value === "" ? "" : Number(e.target.value))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-end pb-0.5">
                            <button
                                onClick={() => setSellerPaysShipping(!sellerPaysShipping)}
                                className={`flex items-center justify-between p-3 rounded-[4px] border transition-all ${sellerPaysShipping ? "bg-indigo-50/50 border-indigo-100 text-indigo-700" : "bg-slate-50 border-slate-100 text-slate-600"}`}
                            >
                                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-tight">
                                    <ShoppingBag className="w-4 h-4" />
                                    <span>Seller Pays Ship</span>
                                </div>
                                <div className={`h-2.5 w-2.5 rounded-full ${sellerPaysShipping ? "bg-indigo-600 animate-pulse" : "bg-slate-300"}`} />
                            </button>
                        </div>
                    </div>

                    {/* Pro Settings Row */}
                    {isProMode && (
                        <div className="mt-8 pt-8 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-500">
                            {/* TikTok Shop Card */}
                            <div className="bg-slate-50/50 border border-slate-100 rounded-[4px] p-5 space-y-6">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-1">
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-slate-200 text-slate-600 text-[10px] font-black px-2 py-0.5 rounded-[2px] tracking-tight border border-slate-300/50 uppercase">TikTok Shop</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <label className="label-text mb-0">Non-Standard Category (12.5%)</label>
                                            <div className="group relative">
                                                <div className="p-1 bg-white rounded-full border border-slate-100 cursor-help shadow-sm">
                                                    <Info className="w-3 h-3 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                                                </div>
                                                <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-slate-900 text-white text-[10px] font-medium rounded-[4px] shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all pointer-events-none z-50">
                                                    As of March 2, 2026, TikTok Shop default rates are 12.5% for non-standard categories.
                                                    <div className="absolute left-4 top-full w-2 h-2 bg-slate-900 rotate-45 -translate-y-1"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setIsNonStandardCategory(!isNonStandardCategory)}
                                            className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isNonStandardCategory ? "bg-indigo-600" : "bg-slate-200"}`}
                                        >
                                            <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${isNonStandardCategory ? "translate-x-5" : "translate-x-0"}`} />
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <label className="label-text">Affiliate Commission</label>
                                            <span className="text-xs font-black text-indigo-600">{tiktokAffiliatePercent}%</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="30"
                                            value={Number(tiktokAffiliatePercent) || 0}
                                            onChange={(e) => setTiktokAffiliatePercent(Number(e.target.value))}
                                            className="w-full h-1.5 bg-white border border-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* StockX Card */}
                            <div className="bg-slate-50/50 border border-slate-100 rounded-[4px] p-5 space-y-6">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-1">
                                    <div className="flex items-center space-x-2">
                                        <span className="bg-slate-200 text-slate-600 text-[10px] font-black px-2 py-0.5 rounded-[2px] tracking-tight border border-slate-300/50 uppercase">StockX</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="label-text">Seller Level</label>
                                    <div className="flex space-x-1 bg-white p-1 rounded-[4px] border border-slate-100">
                                        {[1, 2, 3, 4, 5].map((level) => (
                                            <button
                                                key={level}
                                                onClick={() => setStockxSellerLevel(level as 1 | 2 | 3 | 4 | 5)}
                                                className={`flex-1 py-1.5 text-[10px] font-black rounded-[2px] transition-all ${stockxSellerLevel === level ? "bg-indigo-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                                            >
                                                LV {level}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Results Stream */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between px-1">
                        <div className="flex items-center space-x-3">
                            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Platform Comparison</h3>
                            <button
                                onClick={handleShare}
                                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-[4px] text-[9px] font-black uppercase tracking-wider transition-all border ${copied
                                    ? "bg-emerald-50 border-emerald-200 text-emerald-600 shadow-sm"
                                    : "bg-white border-slate-100 text-slate-400 hover:text-indigo-600 hover:border-indigo-100 shadow-sm"
                                    }`}
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-2.5 h-2.5 animate-in zoom-in duration-300" />
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Share2 className="w-2.5 h-2.5" />
                                        <span>Share Results</span>
                                    </>
                                )}
                            </button>
                        </div>
                        <div className="h-px flex-1 bg-slate-100 ml-4" />
                    </div>

                    <div className="grid gap-3">
                        {results.map((platform: any, index: number) => {
                            const isWinner = index === 0;
                            const isPositive = platform.profit >= 0;

                            return (
                                <div
                                    key={platform.id}
                                    className={`saas-card p-6 bg-white relative group ${isWinner ? "border-l-4 border-l-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.1)] shadow-emerald-500/5 transition-all duration-500 ring-1 ring-emerald-500/10" : ""}`}
                                >
                                    {isWinner && (
                                        <div className="absolute -top-px -right-px bg-emerald-500 text-white text-[9px] font-black px-2.5 py-1 rounded-bl-[4px] flex items-center space-x-1.5 tracking-widest shadow-lg shadow-emerald-200">
                                            <Trophy className="w-3 h-3" />
                                            <span>TOP CHOICE</span>
                                        </div>
                                    )}

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                                        <div className="flex-1 text-center md:text-left">
                                            <div className="flex items-center justify-center md:justify-start space-x-2 mb-1">
                                                <h4 className="text-base font-bold text-slate-900 leading-tight">{platform.name}</h4>
                                                {platform.isPro && (
                                                    <span className="bg-indigo-50 text-indigo-600 text-[9px] font-black px-1.5 py-0.5 rounded-[2px] tracking-tight border border-indigo-100/50">PRO</span>
                                                )}
                                            </div>
                                            {platform.note && (
                                                <p className="text-[10px] text-slate-400 font-medium flex items-center justify-center md:justify-start italic">
                                                    <span>{platform.note}</span>
                                                </p>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 flex-[2] w-full">
                                            <div className="text-center md:text-left">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-1">Total Fee</p>
                                                <p className="text-sm font-bold text-slate-700">${platform.totalFee.toFixed(2)}</p>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-1">Plat | Proc</p>
                                                <p className="text-sm font-bold text-slate-500">
                                                    <span className="text-slate-700">${platform.sellingFee.toFixed(2)}</span>
                                                    <span className="mx-1.5 opacity-30">/</span>
                                                    <span className="text-slate-400">${platform.procFee.toFixed(2)}</span>
                                                </p>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-1">Margin</p>
                                                <p className="text-sm font-bold text-slate-700">{platform.margin.toFixed(1)}%</p>
                                            </div>
                                            <div className="col-span-2 md:col-span-1 text-center md:text-right pt-4 md:pt-0 border-t border-slate-50 md:border-none">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mb-1">Net Profit</p>
                                                <p className={`${isWinner ? "text-3xl md:text-2xl" : "text-2xl md:text-xl"} font-black ${isPositive ? "text-emerald-500" : "text-rose-500"}`}>
                                                    ${platform.profit.toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* About & Methodology */}
                <div className="bg-slate-50/50 rounded-xl p-8 border border-slate-100/50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-slate-900 flex items-center space-x-2">
                                <Info className="w-3.5 h-3.5 text-indigo-500" />
                                <span>Why this tool?</span>
                            </h3>
                            <p className="text-xs leading-relaxed text-slate-500">
                                This tool is designed to help you calculate the net profit you can make from reselling items on eBay, Poshmark, Whatnot, and TikTok Shop. It takes into account the fees and commissions charged by these platforms and helps you understand how much you can make from selling your items.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-slate-900 flex items-center space-x-2">
                                <Percent className="w-3.5 h-3.5 text-indigo-500" />
                                <span>How it works</span>
                            </h3>
                            <p className="text-xs leading-relaxed text-slate-500">
                                Our engine factors in &lsquo;hidden&rsquo; friction costs that others miss, including eBay&apos;s $0.40 per-order fee and TikTok&apos;s complex affiliate commission logic. We have also fully integrated Poshmark&apos;s new 2026 structure ($1/$2/$3 + 5.99%) to give you the most accurate net profit possible.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-slate-900 flex items-center space-x-2">
                                <Trophy className="w-3.5 h-3.5 text-indigo-500" />
                                <span>How to use it</span>
                            </h3>
                            <p className="text-xs leading-relaxed text-slate-500">
                                Don&apos;t just look at profit—watch your margin. High-turnover items with tighter margins are often better suited for performance platforms like Whatnot, while high-ticket luxury goods should be steered toward StockX or eBay to maximize the protective benefit of their tiered fee caps.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200/50 flex justify-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Last Updated: March 2026</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-12 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="p-1.5 bg-indigo-50 rounded-[4px]">
                                <Bookmark className="w-4 h-4 text-indigo-600" />
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Quick Access</h3>
                        </div>
                        <p className="text-xs font-medium text-slate-500 leading-relaxed pr-8">
                            Press <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-black text-slate-600 shadow-sm mx-1">Ctrl + D</kbd> on Windows or <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-black text-slate-600 shadow-sm mx-1">Cmd + D</kbd> on Mac to save your workflow.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="p-1.5 bg-emerald-50 rounded-[4px]">
                                <Smartphone className="w-4 h-4 text-emerald-600" />
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Save as App</h3>
                        </div>
                        <p className="text-xs font-medium text-slate-500 leading-relaxed pr-8">
                            On Chrome via <span className="text-slate-700 font-bold underline decoration-slate-200">Tools → Add to Home Screen</span> or Safari via the <span className="text-slate-700 font-bold underline decoration-slate-200">Share icon</span> for a full-screen standalone workspace.
                        </p>
                    </div>

                    <div className="md:col-span-2 text-center pt-8">
                        <div className="inline-flex items-center px-3 py-1 bg-slate-100 rounded-full space-x-2 border border-slate-200/50">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Settings Persisted Globally</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
