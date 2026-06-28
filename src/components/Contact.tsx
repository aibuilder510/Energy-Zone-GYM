import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="bg-[#0F0F0F] py-20 px-4 md:px-8 border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="contact-header" className="mb-12">
          <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-3">
            VISIT US
          </span>
          <h2 className="font-bebas text-[40px] md:text-[64px] text-[#F0F0F0] leading-none uppercase">
            FIND US. <br />
            <span className="text-[#C8001E]">TRAIN WITH US.</span>
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div id="contact-content" className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-[#1E1E1E] pt-12">
          
          {/* Left Column - Contact Info */}
          <div id="contact-info" className="flex flex-col">
            
            {/* Block 1: Call Us */}
            <motion.div
              id="contact-block-phone"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border-b border-[#1E1E1E] pb-8"
            >
              <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-2">
                CALL US
              </span>
              <a 
                href="tel:+918587857531" 
                id="contact-phone-link"
                className="font-bebas text-[30px] sm:text-[36px] text-[#F0F0F0] hover:text-[#C8001E] transition-colors duration-200 block tracking-wide select-all"
              >
                +91 85878 57531
              </a>
            </motion.div>

            {/* Block 2: Address */}
            <motion.div
              id="contact-block-address"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="border-b border-[#1E1E1E] py-8"
            >
              <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-2">
                ADDRESS
              </span>
              <span className="font-bebas text-[24px] sm:text-[28px] text-[#F0F0F0] leading-tight block tracking-wide select-all">
                House No. 343P, Behind Villa Dairy
              </span>
              <span className="font-sans text-[14px] text-[#787878] font-medium block mt-1 uppercase tracking-wide">
                Sector 38, Gurugram, Haryana 122018
              </span>
            </motion.div>

            {/* Block 3: Hours */}
            <motion.div
              id="contact-block-hours"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="py-8"
            >
              <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-4">
                HOURS
              </span>
              <div id="contact-hours-rows" className="flex flex-col gap-4 max-w-md">
                {/* Morning Row */}
                <div className="flex justify-between items-center border-b border-[#1E1E1E]/50 pb-2">
                  <span className="font-sans text-[13px] font-semibold text-[#787878] tracking-wider uppercase">
                    MON–SAT MORNING
                  </span>
                  <span className="font-sans text-[13px] font-bold text-[#F0F0F0] uppercase tracking-wide">
                    5:30 AM – 11:00 AM
                  </span>
                </div>
                {/* Evening Row */}
                <div className="flex justify-between items-center border-b border-[#1E1E1E]/50 pb-2">
                  <span className="font-sans text-[13px] font-semibold text-[#787878] tracking-wider uppercase">
                    MON–SAT EVENING
                  </span>
                  <span className="font-sans text-[13px] font-bold text-[#F0F0F0] uppercase tracking-wide">
                    5:00 PM – 12:00 AM
                  </span>
                </div>
                {/* Sunday Row */}
                <div className="flex justify-between items-center">
                  <span className="font-sans text-[13px] font-semibold text-[#787878] tracking-wider uppercase">
                    SUNDAY
                  </span>
                  <span className="font-sans text-[13px] font-bold text-[#C8001E] uppercase tracking-wide italic">
                    Contact to confirm
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Google Map iframe */}
          <motion.div
            id="contact-map-container"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full h-[360px] md:h-full min-h-[320px] lg:min-h-[400px] relative overflow-hidden rounded-[8px] border border-[#1E1E1E]"
          >
            <iframe
              id="contact-google-map"
              src="https://maps.google.com/maps?q=Energy%20Zone%20Gym%20Sector%2038%20Gurugram&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(30%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Energy Zone Gym Location Map"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
