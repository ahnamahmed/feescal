export default function MarketplaceLogo() {
  const marketplaces = [
    "eBay", "Vinted", "Depop", "Mercari", "TikTok Shop", "StockX", "Whatnot", "Grailed", "Amazon"
  ];

  return (
    <section id="marketplaces" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Sharp Eyebrow Text */}
        <div className="flex flex-col items-center mb-12">
          <p className="text-[10px] font-black tracking-[0.3em] text-indigo-600/80 uppercase">
            Updated for 2026 Fiscal Standards
          </p>
          <div className="h-px w-12 bg-slate-200 mt-4"></div>
        </div>

        {/* The Marquee Container with Faded Edges */}
        <div className="relative w-full group">
          {/* Left/Right Gradient Mask for Premium Feel */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Motion Wrapper */}
          <div className="flex overflow-hidden select-none">
            <div className="flex flex-nowrap shrink-0 gap-16 animate-infinite-scroll">
              {/* Double the list for seamless loop */}
              {[...marketplaces, ...marketplaces].map((brand, i) => (
                <span
                  key={i}
                  className="text-2xl font-black text-slate-300 hover:text-indigo-500 transition-colors duration-300 cursor-default tracking-tighter"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}