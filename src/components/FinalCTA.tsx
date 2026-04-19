import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#ff7a00]/10" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Stop wasting time<br />figuring things out.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of builders who have upgraded their workflow with an AI mentor that actually understands their context.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-[#ff7a00] hover:bg-[#e66e00] text-white px-10 py-5 rounded-full text-lg font-bold transition-all hover:shadow-[0_0_40px_rgba(255,122,0,0.5)] flex items-center justify-center gap-3 mx-auto">
            Get ScreenMentor
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
