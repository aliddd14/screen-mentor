import { motion } from 'motion/react';
import { Eye, Route, Mic, Globe, Key, Shield } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function Features() {
  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Screenshot Intelligence",
      description: "Understands complex UIs, messy codebases, and obscure error messages instantly."
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Step-by-Step Guidance",
      description: "Breaks down overwhelming problems into manageable, logical steps."
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Mentor",
      description: "Talk through your problems out loud. Sometimes explaining it is half the solution."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Works Anywhere",
      description: "Browser extension works on GitHub, StackOverflow, AWS Console, or your local host."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "BYOK API Support",
      description: "Bring Your Own Key. Use your own OpenAI or Anthropic API keys to save costs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Local-First Privacy",
      description: "Screenshots are processed securely. We don't train on your proprietary code."
    }
  ];

  // Duplicate features to create a seamless loop
  const duplicatedFeatures = [...features, ...features];

  return (
    <section id="features" className="py-24 relative bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Everything you need to build faster</h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden flex group">
        <motion.div
          className="flex gap-6 px-3 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedFeatures.map((feature, index) => (
            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" className="w-[350px] shrink-0">
              <div
                className="glass p-8 rounded-3xl hover:bg-white/[0.06] transition-all duration-300 border-white/5 hover:border-[#ff7a00]/30 hover:shadow-[0_0_30px_rgba(255,122,0,0.15)] h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ff7a00]/10 flex items-center justify-center text-[#ff7a00] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
