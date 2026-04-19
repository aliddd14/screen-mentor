import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: "How is this different from ChatGPT?",
      a: "ChatGPT requires you to copy-paste code and explain your context. ScreenMentor sees your screen directly, understands the visual context (like UI bugs or terminal errors), and is prompted to act as a mentor guiding you to the solution, rather than just spitting out code."
    },
    {
      q: "Is my data safe?",
      a: "Yes. We take privacy seriously. Screenshots are sent securely to the AI model for analysis and are not stored on our servers or used for training."
    },
    {
      q: "Can I use my own API key?",
      a: "Absolutely. Our Pro B plan allows you to Bring Your Own Key (BYOK) for OpenAI or Anthropic, giving you complete control over your data and costs."
    },
    {
      q: "Do I need technical skills to use this?",
      a: "Not at all! While developers love it, ScreenMentor is designed to help anyone navigate complex software, understand errors, or learn new tools."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden border-white/5"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between font-medium"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
