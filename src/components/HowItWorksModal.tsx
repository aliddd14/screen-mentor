import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { X } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HowItWorksModal({ isOpen, onClose }: HowItWorksModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#0b0b0f] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0 bg-[#0b0b0f]/80 backdrop-blur-md z-10">
        <h2 className="text-xl font-bold">How ScreenMentor Works</h2>
        <button 
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-y-auto relative"
      >
        <div className="h-[400vh] relative">
          {/* Sticky Container for Visuals */}
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            
            {/* Step 1: The Problem */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]),
                y: useTransform(scrollYProgress, [0, 0.25], [0, -50])
              }}
            >
              <h3 className="text-4xl md:text-6xl font-bold mb-6">You hit a wall.</h3>
              <p className="text-xl text-gray-400 max-w-2xl">
                An obscure error message. A UI bug that makes no sense. You've been stuck for hours.
              </p>
              <div className="mt-12 glass p-6 rounded-2xl border-red-500/30 text-left max-w-lg w-full">
                <div className="text-red-400 font-mono text-sm">
                  TypeError: Cannot read properties of undefined (reading 'map')<br/>
                  &nbsp;&nbsp;at renderList (App.tsx:42:15)
                </div>
              </div>
            </motion.div>

            {/* Step 2: Capture Context */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
              style={{
                opacity: useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]),
                scale: useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1])
              }}
            >
              <h3 className="text-4xl md:text-6xl font-bold mb-6 text-[#ff7a00]">ScreenMentor sees it.</h3>
              <p className="text-xl text-gray-400 max-w-2xl">
                It captures your screen, terminal, and network tab instantly. No copy-pasting required.
              </p>
              <div className="mt-12 relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,122,0,0.2)]">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Code Analysis" 
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#ff7a00]"
                      style={{
                        width: useTransform(scrollYProgress, [0.3, 0.45], ["0%", "100%"])
                      }}
                    />
                  </div>
                  <p className="text-sm text-[#ff7a00] mt-2 font-mono">Analyzing visual context...</p>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Guided Resolution */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
              style={{
                opacity: useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]),
                y: useTransform(scrollYProgress, [0.5, 0.6], [50, 0])
              }}
            >
              <h3 className="text-4xl md:text-6xl font-bold mb-6">It guides your thinking.</h3>
              <p className="text-xl text-gray-400 max-w-2xl">
                Instead of giving you the answer, it acts as a senior engineer, asking the right questions.
              </p>
              <div className="mt-12 glass p-6 rounded-2xl border-[#ff7a00]/30 text-left max-w-lg w-full">
                <p className="mb-4 text-gray-300">I see the error on line 42. It looks like `data.items` is undefined.</p>
                <p className="text-[#ff7a00] font-medium">Before we map over it, what should we check first?</p>
                <div className="mt-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-sm border border-white/10 text-gray-400">Check API response</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-sm border border-white/10 text-gray-400">Add optional chaining</span>
                </div>
              </div>
            </motion.div>

            {/* Step 4: Success */}
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
              style={{
                opacity: useTransform(scrollYProgress, [0.85, 0.95], [0, 1]),
                scale: useTransform(scrollYProgress, [0.85, 0.95], [0.9, 1])
              }}
            >
              <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold mb-6">You learn and solve.</h3>
              <p className="text-xl text-gray-400 max-w-2xl mb-12">
                You didn't just fix the bug. You understood it. You're a better developer now.
              </p>
              <button 
                onClick={onClose}
                className="bg-[#ff7a00] hover:bg-[#e66e00] text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_30px_rgba(255,122,0,0.4)]"
              >
                Start Using ScreenMentor
              </button>
            </motion.div>

          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.05, 0.9, 1], [1, 0.5, 0.5, 0])
          }}
        >
          <span className="text-sm text-gray-400 uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-400 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
