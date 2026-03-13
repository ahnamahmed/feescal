"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // Hide the navbar on the calculator page
  if (pathname === "/calculator") return null;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <Image
            src="/logo.svg"
            alt="Feescal Logo"
            width={240}
            height={240}
            priority
            className="h-36 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-sm font-semibold hover:text-indigo-600 transition-colors" href="#features">Features</a>
          <Link className="text-sm font-semibold hover:text-indigo-600 transition-colors" href="/blog">Resources</Link>
          <a className="text-sm font-semibold hover:text-indigo-600 transition-colors" href="#pricing">Pricing</a>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold px-4 py-2 hover:bg-slate-100 rounded-lg transition-all">Log in</button>
          <Link href="/calculator" className="bg-indigo-600 text-white text-sm font-bold h-11 px-6 rounded-xl hover:shadow-lg hover:shadow-indigo-600/30 transition-all flex items-center">
            Try for Free
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-[60] relative"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`w-6 h-0.5 bg-slate-900 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Drawer Container */}
        <div 
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Drawer Header */}
            <div className="flex items-center justify-between mb-8">
              <Image
                src="/logo.svg"
                alt="Feescal Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            
            <div className="h-px bg-slate-100 w-full mb-4" />

            {/* Nav Links */}
            <nav className="flex flex-col flex-grow">
              {[
                { name: "Features", href: "#features" },
                { name: "Resources", href: "/blog" },
                { name: "Pricing", href: "#pricing" },
              ].map((link, idx) => (
                <Link 
                  key={idx}
                  href={link.href}
                  className="flex items-center gap-3 py-4 text-slate-700 font-semibold border-b border-slate-50 hover:text-indigo-600 transition-colors group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </Link>
              ))}
              
              <div className="mt-8 flex flex-col gap-4">
                <button 
                  className="w-full h-12 flex items-center justify-center text-slate-700 font-bold border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </button>
                <Link 
                  href="/calculator"
                  className="w-full h-12 flex items-center justify-center bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Try for Free
                </Link>
              </div>
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                  Updated for 2026 fee structures
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}