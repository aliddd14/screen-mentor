import { motion } from 'motion/react';
import Tilt from 'react-parallax-tilt';

export default function SocialProof() {
  const testimonials = [
    {
      quote: "It's like having a senior engineer looking over my shoulder, but without the judgment. It actually taught me how to debug React hydration errors.",
      author: "Sarah J.",
      role: "Frontend Developer"
    },
    {
      quote: "I used to spend hours on StackOverflow. Now I just take a screenshot of my terminal and ScreenMentor walks me through the fix.",
      author: "Michael T.",
      role: "Indie Hacker"
    },
    {
      quote: "The BYOK feature is brilliant. I get premium AI mentoring while keeping my API costs incredibly low.",
      author: "David L.",
      role: "Software Engineer"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Loved by builders</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" className="h-full">
                <div className="glass p-8 rounded-3xl border-white/5 h-full hover:border-[#ff7a00]/30 transition-colors">
                  <div className="flex gap-1 text-[#ff7a00] mb-6">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 italic">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-white">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
