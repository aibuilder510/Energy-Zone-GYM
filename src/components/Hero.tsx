import { ChevronDown, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollDown = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = servicesSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* Background Image with layers */}
      <div 
        id="hero-bg"
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1400')`,
        }}
      />
      
      {/* Linear Overlays */}
      <div 
        id="hero-overlay-linear"
        className="absolute inset-0 z-1 bg-gradient-to-b from-[#080808]/50 via-[#080808]/85 to-[#080808]"
      />
      
      {/* Radial Glow Overlay */}
      <div 
        id="hero-overlay-radial"
        className="absolute inset-0 z-2"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(200, 0, 30, 0.12) 0%, transparent 75%)',
        }}
      />

      {/* Fight Poster Centered Content */}
      <div 
        id="hero-content"
        className="relative z-10 max-w-[900px] w-full px-4 mx-auto text-center flex flex-col items-center justify-center pt-20"
      >
        {/* Top Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-6 font-sans text-[10px] md:text-[11px] font-semibold text-[#787878] tracking-[0.15em] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8001E]"></span>
          <span>SECTOR 38, GURUGRAM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8001E]"></span>
          <span>OPEN NOW</span>
        </motion.div>

        {/* Main Dramatic Headline */}
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col select-none font-bebas tracking-normal text-left sm:text-center"
        >
          <span 
            id="hero-line1"
            className="text-[#F0F0F0] text-[56px] md:text-[100px] leading-[0.88] block uppercase"
          >
            TRAIN HARD.
          </span>
          <span 
            id="hero-line2"
            className="text-[#F0F0F0] text-[80px] md:text-[140px] leading-[0.85] block uppercase"
          >
            FIGHT
          </span>
          <span 
            id="hero-line3"
            className="text-[#C8001E] text-[80px] md:text-[140px] leading-[0.85] block uppercase"
          >
            HARDER.
          </span>
        </motion.h1>

        {/* Horizontal Rule */}
        <motion.div
          id="hero-divider"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-[1px] bg-[#1E1E1E] max-w-[600px] w-full my-8"
        />

        {/* Stats Line */}
        <motion.div
          id="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[10px] md:text-[12px] font-medium text-[#787878] tracking-[0.1em] uppercase mb-8"
        >
          <span className="flex items-center gap-1">
            4.8 <Star className="w-3.5 h-3.5 fill-[#C8001E] text-[#C8001E] inline-block" />
          </span>
          <span className="text-[#C8001E] font-bold">·</span>
          <span>283 REVIEWS</span>
          <span className="text-[#C8001E] font-bold">·</span>
          <span>OPEN TILL 12 AM</span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          id="hero-buttons"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4"
        >
          <button
            id="hero-btn-trial"
            onClick={() => {
              const formSection = document.getElementById('freetrial');
              if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-[#C8001E] hover:bg-[#A0001A] text-[#F0F0F0] font-bebas text-[18px] px-10 py-4 rounded-[2px] transition-colors duration-200 tracking-wider shadow-lg shadow-black/40 min-w-[200px]"
          >
            BOOK FREE TRIAL
          </button>
          
          <a
            id="hero-btn-call"
            href="tel:+918587857531"
            className="border border-[#3A3A3A] hover:border-[#C8001E] text-[#F0F0F0] hover:text-[#C8001E] font-bebas text-[18px] px-10 py-4 rounded-[2px] transition-all duration-200 tracking-wider min-w-[200px] inline-flex items-center justify-center"
          >
            CALL US
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Down Arrow */}
      <motion.button
        id="hero-scroll-indicator"
        onClick={handleScrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#3A3A3A] hover:text-[#C8001E] transition-colors p-2"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
