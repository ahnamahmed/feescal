import Link from "next/link";
import Image from "next/image";
export default function Nav() {
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
          <a className="text-sm font-semibold hover:text-indigo-600 transition-colors" href="#marketplaces">Marketplaces</a>
          <a className="text-sm font-semibold hover:text-indigo-600 transition-colors" href="#pricing">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold px-4 py-2 hover:bg-slate-100 rounded-lg transition-all">Log in</button>
          <Link href="/calculator" className="bg-indigo-600 text-white text-sm font-bold h-11 px-6 rounded-xl hover:shadow-lg hover:shadow-indigo-600/30 transition-all flex items-center">
            Try for Free
          </Link>
        </div>
      </div>
    </nav>
  )
}