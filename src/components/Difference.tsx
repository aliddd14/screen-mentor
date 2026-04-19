import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Check } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'motion/react';

export default function Difference() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(SVGLineElement | null)[]>([]);

  const comparisons = [
    {
      bad: "Answer Engine",
      good: "Thinking Partner",
      desc: "Uses the Socratic method to guide you. Asks probing questions to build your mental model."
    },
    {
      bad: "Blind to Context",
      good: "Sees Your Screen",
      desc: "Instantly understands your UI, network tab, terminal errors, and messy codebase."
    },
    {
      bad: "Generic Solutions",
      good: "Personalized Guidance",
      desc: "Adapts to your skill level and provides solutions tailored to your exact project setup."
    },
    {
      bad: "Context Switching",
      good: "Zero Friction",
      desc: "Works as an overlay right where you are coding. Stay in the zone and solve faster."
    }
  ];

  useEffect(() => {
    // Rotate the container
    gsap.to(containerRef.current, {
      rotation: -360, // Rotate opposite direction for variety
      duration: 50,
      repeat: -1,
      ease: "none"
    });

    // Counter-rotate the items so they stay upright
    gsap.to(itemsRef.current, {
      rotation: 360,
      duration: 50,
      repeat: -1,
      ease: "none"
    });

    // Animate the strings (marching ants effect)
    gsap.to(linesRef.current, {
      strokeDashoffset: 24,
      duration: 1,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff7a00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center min-h-[600px] md:min-h-[800px]"
        >
          <div className="relative w-[800px] h-[800px] flex items-center justify-center scale-[0.5] sm:scale-[0.75] md:scale-100">
            
            {/* Center Text */}
            <div className="absolute z-20 text-center pointer-events-none">
              <div className="bg-[#0b0b0f] p-8 rounded-full border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap">
                  Why ScreenMentor?
                </h2>
              </div>
            </div>

            {/* Revolving System */}
            <div 
              ref={containerRef}
              className="absolute w-full h-full flex items-center justify-center"
            >
              {/* SVG Strings */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line ref={el => linesRef.current[0] = el} x1="400" y1="400" x2="400" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 6" />
                <line ref={el => linesRef.current[1] = el} x1="400" y1="400" x2="700" y2="400" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 6" />
                <line ref={el => linesRef.current[2] = el} x1="400" y1="400" x2="400" y2="700" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 6" />
                <line ref={el => linesRef.current[3] = el} x1="400" y1="400" x2="100" y2="400" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="6 6" />
                
                {/* Connection dots */}
                <circle cx="400" cy="100" r="6" fill="#ffffff" opacity="0.2" />
                <circle cx="700" cy="400" r="6" fill="#ffffff" opacity="0.2" />
                <circle cx="400" cy="700" r="6" fill="#ffffff" opacity="0.2" />
                <circle cx="100" cy="400" r="6" fill="#ffffff" opacity="0.2" />
              </svg>

              {/* Nodes */}
              {comparisons.map((item, i) => {
                const transforms = [
                  "translateY(-300px)",
                  "translateX(300px)",
                  "translateY(300px)",
                  "translateX(-300px)"
                ];
                
                return (
                  <div key={i} className="absolute z-30" style={{ transform: transforms[i] }}>
                    <div
                      ref={el => itemsRef.current[i] = el}
                      className="w-[340px]"
                    >
                      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all">
                        <div className="glass p-6 rounded-3xl border-white/10 hover:border-[#ff7a00]/50 transition-colors cursor-pointer shadow-2xl bg-[#0b0b0f]/90 backdrop-blur-xl group">
                          
                          <div className="flex items-center gap-3 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                              <X className="w-4 h-4 text-red-400" />
                            </div>
                            <span className="text-sm text-gray-400 line-through">{item.bad}</span>
                          </div>

                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 rounded-full bg-[#ff7a00]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,122,0,0.3)]">
                              <Check className="w-4 h-4 text-[#ff7a00]" />
                            </div>
                            <span className="text-xl font-bold text-[#ff7a00]">{item.good}</span>
                          </div>
                          
                          <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </Tilt>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
