import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import HowItWorksModal from './HowItWorksModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff7a00]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-sm text-gray-300 mb-6">
                <Sparkles className="w-4 h-4 text-[#ff7a00]" />
                <span>Your AI Thinking Partner</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                Stop guessing.<br />
                <span className="text-gradient-primary">Start solving.</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
                An AI mentor that sees your screen, understands your problem, and guides you step-by-step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#ff7a00] hover:bg-[#e66e00] text-white px-8 py-4 rounded-full text-base font-semibold transition-all hover:shadow-[0_0_30px_rgba(255,122,0,0.4)] flex items-center justify-center gap-2">
                  Install Extension
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="glass hover:bg-white/5 text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2"
                >
                  See How It Works
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff7a00]/20 to-transparent rounded-2xl blur-2xl" />
              <div className="relative glass rounded-2xl p-2 border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop" 
                  alt="ScreenMentor Interface" 
                  className="rounded-xl w-full object-cover opacity-80"
                />
                {/* Overlay UI mockup */}
                <div className="absolute bottom-6 right-6 w-72 glass rounded-xl p-4 border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#ff7a00] flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm font-medium">ScreenMentor</div>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    I see you're trying to center that div. Instead of absolute positioning, have you considered using Flexbox?
                  </p>
                  <div className="bg-black/50 rounded-lg p-2 text-xs font-mono text-gray-400">
                    display: flex;<br/>
                    align-items: center;<br/>
                    justify-content: center;
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <HowItWorksModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}
