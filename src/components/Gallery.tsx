import { motion } from 'motion/react';
import { GALLERY_IMAGES } from '../data';

export default function Gallery() {
  return (
    <section 
      id="gallery" 
      className="bg-[#080808] py-20 border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10 flex items-end justify-between">
        {/* Header Left */}
        <div id="gallery-header">
          <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-3">
            INSIDE THE GYM
          </span>
          <h2 className="font-bebas text-[40px] md:text-[64px] text-[#F0F0F0] leading-none uppercase">
            THE FLOOR IS <br />
            <span className="text-[#C8001E]">WAITING.</span>
          </h2>
        </div>

        {/* Scroll Hint Right */}
        <div id="gallery-hint" className="hidden sm:block">
          <span className="font-sans text-[10px] font-bold text-[#3A3A3A] tracking-[0.15em] uppercase animate-pulse">
            SCROLL &rarr;
          </span>
        </div>
      </div>

      {/* Horizontal Scroll Strip */}
      <div 
        id="gallery-slider-container"
        className="w-full overflow-x-auto no-scrollbar scroll-smooth flex py-2"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex gap-3 px-4 md:px-8 lg:px-[max(32px,calc((100vw-1200px)/2))]">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              id={`gallery-item-${index}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative flex-shrink-0 h-[240px] md:h-[380px] w-[280px] md:w-[480px] group overflow-hidden rounded-[4px] cursor-pointer bg-[#141414]"
            >
              {/* Image */}
              <img
                src={img.url}
                alt={img.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.8] group-hover:brightness-[1.1] group-hover:scale-102 transition-all duration-500 ease-out"
              />

              {/* Bottom Dark Gradient Overlay */}
              <div 
                id={`gallery-overlay-${index}`}
                className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"
              />

              {/* Text Label */}
              <div 
                id={`gallery-label-container-${index}`}
                className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10 flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 bg-[#C8001E] rounded-full"></div>
                <span className="font-sans text-[11px] md:text-[12px] font-semibold text-white tracking-[0.1em] uppercase">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Hint (visible under sm breakpoint) */}
      <div id="gallery-mobile-hint" className="sm:hidden text-center mt-4">
        <span className="font-sans text-[10px] font-bold text-[#3A3A3A] tracking-[0.12em] uppercase">
          &larr; SWIPE TO VIEW &rarr;
        </span>
      </div>

      {/* Note Below */}
      <div id="gallery-footer-note" className="text-center mt-10">
        <p className="font-sans text-[12px] text-[#3A3A3A] italic font-medium">
          📸 Representative images — actual facility photos coming soon.
        </p>
      </div>
    </section>
  );
}
