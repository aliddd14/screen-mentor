import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';

export default function Problem() {
  const problems = [
    {
      num: "01",
      title: "Wasted Hours",
      desc: "You waste hours figuring things out, jumping between tabs and documentation."
    },
    {
      num: "02",
      title: "Mismatched Context",
      desc: "Tutorials don't match your exact problem. Your codebase is unique."
    },
    {
      num: "03",
      title: "Lazy AI",
      desc: "Standard AI just gives you the answer. It doesn't help you understand why."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 leading-tight">
            The way we learn and solve problems is <span className="text-gray-500">broken.</span>
          </h2>
        </motion.div>
          
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" className="h-full">
                <div className="glass p-8 rounded-2xl h-full hover:border-[#ff7a00]/30 transition-colors">
                  <div className="text-[#ff7a00] text-xl font-bold mb-4">{prob.num}</div>
                  <h3 className="text-xl font-semibold mb-3">{prob.title}</h3>
                  <p className="text-gray-400">{prob.desc}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
