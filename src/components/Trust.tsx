import { motion } from 'motion/react';
import { Lock, Server, EyeOff } from 'lucide-react';

export default function Trust() {
  const items = [
    {
      icon: EyeOff,
      title: "No Training on Data",
      desc: "We never use your screenshots or code to train our AI models."
    },
    {
      icon: Lock,
      title: "Privacy First",
      desc: "Screenshots are processed ephemerally and deleted immediately."
    },
    {
      icon: Server,
      title: "Local-First Processing",
      desc: "With BYOK, your data goes directly to the AI provider, bypassing our servers."
    }
  ];

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-12">Your data is yours.</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
