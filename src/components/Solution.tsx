import { motion } from 'motion/react';
import { BrainCircuit } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#ff7a00]/5 skew-y-3 transform origin-bottom-left" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ff7a00]/10 text-[#ff7a00] mb-6">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not another AI tool.<br />
              <span className="text-gradient-primary">A thinking partner.</span>
            </h2>
            <p className="text-xl text-gray-400">
              ScreenMentor doesn't just give you code to copy-paste. It asks questions, breaks down the problem, and guides your thinking.
            </p>
          </motion.div>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-bold">You</span>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 text-gray-300">
                    "Why is this API call failing? Look at my network tab."
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#ff7a00] flex items-center justify-center shrink-0">
                    <BrainCircuit className="w-5 h-5 text-white" />
                  </div>
                  <div className="glass rounded-2xl p-4 text-gray-300 border-[#ff7a00]/30">
                    <p className="mb-3">I see the 401 Unauthorized error in your network tab. Let's look at your headers.</p>
                    <p className="mb-3 text-[#ff7a00]">Notice anything missing in the Authorization header format?</p>
                    <div className="bg-black/50 p-3 rounded-lg font-mono text-sm">
                      Authorization: `Bearer {"${token}"}`
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff7a00]/20 to-transparent blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                alt="Code Analysis" 
                className="rounded-2xl relative z-10 border border-white/10 opacity-80"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
