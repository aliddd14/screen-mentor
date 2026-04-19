import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Difference from './components/Difference';
import Pricing from './components/Pricing';
import UseCases from './components/UseCases';
import SocialProof from './components/SocialProof';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-[#ff7a00] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Difference />
        <Pricing />
        <UseCases />
        <SocialProof />
        <Trust />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
