import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Tilt from 'react-parallax-tilt';
import { motion } from 'motion/react';

export default function UseCases() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(SVGLineElement | null)[]>([]);

  const cases = [
    {
      title: "Developers",
      desc: "Debug complex errors, understand legacy code, and architect solutions without leaving your IDE."
    },
    {
      title: "Students",
      desc: "Learn concepts deeply instead of just copying answers. Get a tutor that's available 24/7."
    },
    {
      title: "Entrepreneurs",
      desc: "Build MVPs faster. When you get stuck on technical hurdles, ScreenMentor unblocks you."
    },
    {
      title: "Non-Technical",
      desc: "Navigate complex software, set up automations, and solve IT issues with guided help."
    }
  ];

  useEffect(() => {
    // Rotate the container
    gsap.to(containerRef.current, {
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: "none"
    });

    // Counter-rotate the items so they stay upright
    gsap.to(itemsRef.current, {
      rotation: -360,
      duration: 40,
      repeat: -1,
      ease: "none"
    });

    // Animate the strings (marching ants effect)
    gsap.to(linesRef.current, {
      strokeDashoffset: -24,
      duration: 1,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <section className="py-24 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
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
              <div className="bg-[#0b0b0f] p-8 rounded-full border border-[#ff7a00]/30 shadow-[0_0_50px_rgba(255,122,0,0.2)]">
                <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap">
                  Who is it for?
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
                <line ref={el => linesRef.current[0] = el} x1="400" y1="400" x2="400" y2="100" stroke="rgba(255,122,0,0.4)" strokeWidth="2" strokeDasharray="6 6" />
                <line ref={el => linesRef.current[1] = el} x1="400" y1="400" x2="700" y2="400" stroke="rgba(255,122,0,0.4)" strokeWidth="2" strokeDasharray="6 6" />
                <line ref={el => linesRef.current[2] = el} x1="400" y1="400" x2="400" y2="700" stroke="rgba(255,122,0,0.4)" strokeWidth="2" strokeDasharray="6 6" />
                <line ref={el => linesRef.current[3] = el} x1="400" y1="400" x2="100" y2="400" stroke="rgba(255,122,0,0.4)" strokeWidth="2" strokeDasharray="6 6" />
                
                {/* Connection dots */}
                <circle cx="400" cy="100" r="6" fill="#ff7a00" />
                <circle cx="700" cy="400" r="6" fill="#ff7a00" />
                <circle cx="400" cy="700" r="6" fill="#ff7a00" />
                <circle cx="100" cy="400" r="6" fill="#ff7a00" />
              </svg>

              {/* Nodes */}
              {cases.map((item, i) => {
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
                      className="w-[320px]"
                    >
                      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable={true} glareMaxOpacity={0.15} glareColor="#ffffff" glarePosition="all">
                        <div className="glass p-8 rounded-3xl border-white/10 hover:border-[#ff7a00]/50 transition-colors cursor-pointer shadow-2xl bg-[#0b0b0f]/90 backdrop-blur-xl group">
                          <div className="w-12 h-12 rounded-full bg-[#ff7a00]/10 flex items-center justify-center text-[#ff7a00] mb-4 font-bold text-xl group-hover:scale-110 transition-transform">
                            0{i + 1}
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                          <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
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
