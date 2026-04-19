import { MonitorPlay } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full border border-white/10 shadow-2xl w-[95%] max-w-7xl">
      <div className="px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/ScreenMentor.jpg" alt="ScreenMentor Icon" className="w-8 h-8 rounded-lg object-cover" />
          <span className="font-bold text-xl tracking-tight">ScreenMentor</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Log in
          </button>
          <button className="bg-[#ff7a00] hover:bg-[#e66e00] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(255,122,0,0.3)]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
