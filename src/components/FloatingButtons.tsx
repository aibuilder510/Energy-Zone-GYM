import { useState } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';

const WhatsappIcon = FaWhatsapp as any;

export default function FloatingButtons() {
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const [showWaTooltip, setShowWaTooltip] = useState(false);

  return (
    <>
      {/* Call Button (Bottom: 88px, Right: 16px) */}
      <div 
        className="fixed bottom-[88px] right-[16px] z-[9999] overflow-visible flex items-center justify-end"
        style={{ transformOrigin: 'center center' }}
      >
        {/* Tooltip Left */}
        <AnimatePresence>
          {showCallTooltip && (
            <motion.div
              id="call-tooltip"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-16 bg-[#141414] border border-[#1E1E1E] text-[#F0F0F0] font-sans text-[12px] font-semibold py-2 px-3 rounded-[4px] shadow-lg whitespace-nowrap tracking-wider uppercase"
            >
              Call Us
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Circle Button */}
        <motion.a
          id="floating-btn-call"
          href="tel:+918587857531"
          onMouseEnter={() => setShowCallTooltip(true)}
          onMouseLeave={() => setShowCallTooltip(false)}
          whileHover={{ scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="w-[52px] h-[52px] bg-[#C8001E] hover:bg-[#A0001A] text-white rounded-full flex items-center justify-center shadow-lg shadow-black/50 transition-colors duration-200 cursor-pointer overflow-visible"
          style={{ transformOrigin: 'center center' }}
        >
          <Phone className="w-[20px] h-[20px] fill-current" />
        </motion.a>
      </div>

      {/* WhatsApp Button (Bottom: 24px, Right: 16px) */}
      <div 
        className="fixed bottom-[24px] right-[16px] z-[9999] overflow-visible flex items-center justify-end"
        style={{ transformOrigin: 'center center' }}
      >
        {/* Tooltip Left */}
        <AnimatePresence>
          {showWaTooltip && (
            <motion.div
              id="wa-tooltip"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-16 bg-[#141414] border border-[#1E1E1E] text-[#F0F0F0] font-sans text-[12px] font-semibold py-2 px-3 rounded-[4px] shadow-lg whitespace-nowrap tracking-wider uppercase"
            >
              WhatsApp Us
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Circle Button */}
        <motion.a
          id="floating-btn-wa"
          href="https://wa.me/918587857531?text=Hi!%20Interested%20in%20Energy%20Zone%20Gym.%20Can%20you%20help%20me%20with%20more%20details%3F"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setShowWaTooltip(true)}
          onMouseLeave={() => setShowWaTooltip(false)}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.1 }}
          className="w-[52px] h-[52px] bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-lg shadow-black/50 transition-colors duration-200 cursor-pointer overflow-visible"
          style={{ transformOrigin: 'center center' }}
        >
          <WhatsappIcon className="text-white text-[28px]" />
        </motion.a>
      </div>
    </>
  );
}
