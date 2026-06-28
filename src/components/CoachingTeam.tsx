import { motion } from 'motion/react';
import { COACHES } from '../data';

export default function CoachingTeam() {
  return (
    <section 
      id="coaching" 
      className="bg-[#0F0F0F] py-20 px-4 md:px-8 border-b border-[#1E1E1E] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div id="coaching-header" className="mb-16 text-left md:text-center">
          <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-3">
            ELITE INSTRUCTORS
          </span>
          <h2 className="font-bebas text-[40px] md:text-[64px] text-[#F0F0F0] leading-none uppercase">
            MEET THE <br className="md:hidden" />
            <span className="text-[#C8001E]"> COMMANDERS.</span>
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-[#787878] max-w-[500px] md:mx-auto leading-relaxed mt-4 md:text-center">
            No casual trainers here. Our roster consists of elite martial artists, 
            former special forces operators, and championship-proven athletes.
          </p>
        </div>

        {/* 3-Card Sports Poster Layout */}
        <div id="coaching-grid" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COACHES.map((coach, index) => (
            <motion.div
              key={coach.id}
              id={`coach-card-${coach.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="relative aspect-[3/4] max-w-[400px] w-full mx-auto overflow-hidden border border-[#1E1E1E] hover:border-[#C8001E] transition-all duration-300 rounded-[4px] group bg-[#141414]"
            >
              {/* Background Image */}
              <img
                src={coach.imageUrl}
                alt={coach.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.1] grayscale-[20%] group-hover:scale-103 group-hover:brightness-[0.9] transition-all duration-500 ease-out"
              />

              {/* Linear Vignette Overlay */}
              <div 
                id={`coach-vignette-${coach.id}`}
                className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#0F0F0F]/40 to-transparent opacity-90" 
              />

              {/* Dynamic Subtle Red Glow behind details */}
              <div 
                id={`coach-glow-${coach.id}`}
                className="absolute inset-0 bg-radial-gradient(circle at 50% 90%, rgba(200,0,30,0.15) 0%, transparent 60%) opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
              />

              {/* Experience Top Badge */}
              <div 
                id={`coach-badge-${coach.id}`}
                className="absolute top-4 left-4 z-10 bg-[#C8001E] text-white font-sans text-[9px] font-bold tracking-[0.12em] px-2.5 py-1 rounded-[1px] uppercase shadow-md"
              >
                {coach.experience}
              </div>

              {/* Bottom Coach Details */}
              <div 
                id={`coach-details-${coach.id}`}
                className="absolute bottom-6 left-6 right-6 z-20 flex flex-col"
              >
                {/* Professional Title */}
                <span className="font-sans text-[10px] font-bold text-[#C8001E] tracking-[0.18em] uppercase mb-1">
                  {coach.title}
                </span>

                {/* Name */}
                <h3 className="font-bebas text-[28px] sm:text-[32px] text-white tracking-wider leading-none mb-1 group-hover:text-[#FF0A2F] transition-colors duration-200">
                  {coach.name}
                </h3>

                {/* Specialty */}
                <span className="font-sans text-[12px] text-[#787878] font-semibold uppercase tracking-wider mb-4">
                  {coach.specialty}
                </span>

                {/* Quote / Signature style - Shifts/reveals on hover */}
                <div 
                  id={`coach-sig-${coach.id}`}
                  className="border-l-2 border-[#C8001E] pl-3 py-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                >
                  <p className="font-sans text-[13px] text-[#F0F0F0]/90 italic leading-snug">
                    "{coach.signature}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
