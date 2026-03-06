export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">payments</span>
              </div>
              <span className="text-xl font-800 text-slate-900">Feescal</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">The ultimate companion for the modern online seller. Built for speed, designed for accuracy.</p>
          </div>
          <div>
            <h5 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-6">Product</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Calculators</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Case Studies</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-6">Platforms</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">eBay Fee Calculator</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Vinted Profit Tool</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Depop Margin Guide</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">TikTok Shop Fees</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-slate-900 font-black text-sm uppercase tracking-widest mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs font-medium">© 2026 Feescal Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">public</span>
            </a>
            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}