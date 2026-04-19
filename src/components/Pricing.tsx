import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying it out.",
      features: [
        "3 messages per day",
        "2 screenshots per day",
        "Standard response speed",
        "Community support"
      ],
      buttonText: "Start Free",
      popular: false
    },
    {
      name: "Pro B",
      price: "$7",
      period: "/mo",
      description: "Bring your own API key.",
      features: [
        "Unlimited usage",
        "Bring Your Own Key (BYOK)",
        "Priority support",
        "Early access to features"
      ],
      buttonText: "Get Pro B",
      popular: false
    },
    {
      name: "Pro A",
      price: "$15.99",
      period: "/mo",
      description: "Everything included.",
      features: [
        "Unlimited usage",
        "Uses our premium AI models",
        "Fastest response speed",
        "Priority support"
      ],
      buttonText: "Get Pro A",
      popular: true
    },
    {
      name: "Pro Combo",
      price: "$19.99",
      period: "/mo",
      description: "Ultimate flexibility.",
      features: [
        "Both BYOK & Hosted modes",
        "Unlimited usage",
        "Fastest response speed",
        "Priority support"
      ],
      buttonText: "Get Combo",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#ff7a00]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-400">Invest in your productivity.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" className="h-full">
                <div className={`glass p-8 rounded-3xl relative flex flex-col h-full hover:border-[#ff7a00]/30 transition-colors ${
                  plan.popular ? 'border-[#ff7a00]/50 shadow-[0_0_30px_rgba(255,122,0,0.1)]' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff7a00] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-gray-400">{plan.period}</span>}
                    </div>
                    <p className="text-sm text-gray-400 mt-3">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="w-5 h-5 text-[#ff7a00] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.popular 
                      ? 'bg-[#ff7a00] hover:bg-[#e66e00] text-white' 
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
