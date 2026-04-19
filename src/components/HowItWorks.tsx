import { motion } from 'motion/react';
import { ScanSearch, Cpu, Lightbulb, CheckCircle2 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ScanSearch className="w-8 h-8" />,
      title: "1. Capture Context",
      description: "ScreenMentor instantly sees what you see. No more copying and pasting code snippets or describing UI bugs.",
      details: ["Reads terminal errors", "Analyzes network requests", "Understands UI state"]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "2. Deep Analysis",
      description: "Advanced vision AI processes your entire screen to understand the exact state of your application and codebase.",
      details: ["Identifies the root cause", "Cross-references docs", "Maps out dependencies"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "3. Guided Resolution",
      description: "Instead of just giving you the answer, it acts as a senior mentor, asking the right questions to help you learn.",
      details: ["Socratic questioning", "Step-by-step breakdowns", "Best practice tips"]
    }
  ];

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How it works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A seamless process designed to keep you in the flow state.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative items-start">
          {/* Connecting diagonal line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-tr from-transparent via-[#ff7a00]/30 to-transparent -translate-y-1/2 z-0 transform -rotate-6" />

          {steps.map((step, index) => {
            // Climbing stairs effect: 1st is lowest (mt-32), 2nd is middle (mt-16), 3rd is highest (mt-0)
            const mtClasses = ["md:mt-32", "md:mt-16", "md:mt-0"];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative z-10 h-full ${mtClasses[index]}`}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" className="h-full">
                  <div className="relative z-10 glass p-8 rounded-3xl h-full hover:border-[#ff7a00]/50 transition-all duration-300 shadow-xl bg-[#0b0b0f]/80 backdrop-blur-md group">
                    <div className="w-20 h-20 rounded-2xl bg-[#ff7a00]/10 flex items-center justify-center text-[#ff7a00] mb-8 border border-[#ff7a00]/20 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(255,122,0,0.2)]">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#ff7a00]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
