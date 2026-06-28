import { Flame, Swords, Activity, Dumbbell, Trophy, Apple } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';

export default function Services() {
  const iconMap = {
    boxing: Flame,
    kickboxing: Swords,
    hiit: Activity,
    weight: Dumbbell,
    pt: Trophy,
    nutrition: Apple,
  };

  return (
    <section 
      id="services" 
      className="bg-[#080808] py-20 border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div id="services-header" className="mb-16">
          <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-3">
            WHAT WE TRAIN
          </span>
          <h2 className="font-bebas text-[40px] md:text-[64px] text-[#F0F0F0] leading-none uppercase">
            6 DISCIPLINES. <br />
            <span className="text-[#C8001E]">ONE GYM.</span>
          </h2>
        </div>

        {/* Services Alternating Rows */}
        <div id="services-rows" className="flex flex-col border-t border-[#1E1E1E]">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            
            // Alternating animation parameters
            const slideFromRight = index % 2 === 1;
            
            return (
              <motion.div
                key={service.id}
                id={`service-row-${service.id}`}
                initial={{ opacity: 0, x: slideFromRight ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="service-row group relative w-full border-b border-[#1E1E1E] py-10 md:py-12 px-2 sm:px-6 md:px-8 flex flex-row items-center justify-between overflow-hidden transition-all duration-300 hover:bg-[#C8001E]/[0.03]"
              >
                {/* Slid-in red border accent on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-0 bg-[#C8001E] transition-all duration-300 group-hover:w-[3px]"></div>

                {/* Left - Large Decorative Number */}
                <div className="flex items-center">
                  <span className="font-bebas text-[54px] sm:text-[68px] md:text-[80px] text-[#1E1E1E] group-hover:text-[#C8001E]/20 select-none leading-none transition-colors duration-300 w-[50px] sm:w-[70px] md:w-[90px] text-left">
                    {service.number}
                  </span>

                  {/* Center-Left - Name and Description */}
                  <div className="ml-4 sm:ml-8 md:ml-12 max-w-[280px] sm:max-w-[420px] md:max-w-[560px]">
                    <h3 className="font-bebas text-[28px] sm:text-[32px] md:text-[36px] text-[#F0F0F0] group-hover:text-[#C8001E] transition-colors duration-200 uppercase leading-tight mb-2">
                      {service.name}
                    </h3>
                    <p className="font-sans text-[13px] sm:text-[14px] text-[#787878] group-hover:text-[#9F9F9F] transition-colors duration-200 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Right - Icon */}
                <div className="text-[#3A3A3A] group-hover:text-[#C8001E] transition-all duration-300 transform group-hover:scale-110 ml-4">
                  {IconComponent && <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 stroke-[1.5]" />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
