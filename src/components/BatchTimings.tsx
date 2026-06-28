import { Sunrise, Sunset, Moon, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { BATCHES } from '../data';

export default function BatchTimings() {
  const iconMap = {
    sunrise: Sunrise,
    sunset: Sunset,
    moon: Moon,
    star: Star,
  };

  return (
    <section 
      id="schedule" 
      className="bg-[#0F0F0F] py-20 px-4 md:px-8 border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div id="schedule-header" className="mb-12">
          <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-3">
            TRAINING SCHEDULE
          </span>
          <h2 className="font-bebas text-[40px] md:text-[64px] text-[#F0F0F0] leading-none mb-4 uppercase">
            FIND YOUR <br />
            <span className="text-[#C8001E]">BATCH.</span>
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-[#787878] max-w-[500px] leading-relaxed">
            Choose your shift. Seven days a week. <br className="hidden sm:block" />
            Pick the batch that fits your schedule and dominate.
          </p>
        </div>

        {/* Batch Cards Grid */}
        <div id="schedule-cards" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {BATCHES.map((batch, index) => {
            const Icon = iconMap[batch.iconName] || Star;
            const timeLines = batch.time.split('\n');
            const hasMultipleLines = timeLines.length > 1;

            return (
              <motion.div
                key={batch.id}
                id={`batch-card-${batch.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-[#141414] border border-[#1E1E1E] hover:border-[#C8001E] transition-colors duration-300 rounded-[8px] p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon */}
                  <div className="text-[#C8001E] mb-6 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Label */}
                  <span className="font-bebas text-[14px] text-[#C8001E] tracking-[0.15em] block mb-2 uppercase">
                    {batch.name}
                  </span>

                  {/* Time Lines */}
                  <div className="flex flex-col gap-2">
                    {timeLines.map((line, lIdx) => (
                      <span 
                        key={lIdx} 
                        className={`font-bebas text-[#F0F0F0] leading-tight block uppercase ${
                          hasMultipleLines 
                            ? 'text-[24px] sm:text-[28px] md:text-[30px]' 
                            : 'text-[36px] sm:text-[40px] md:text-[44px]'
                        }`}
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Divider */}
                  <div className="h-[1px] bg-[#1E1E1E] my-6" />

                  {/* Days */}
                  <span className="font-sans text-[12px] text-[#787878] tracking-[0.12em] font-semibold block mb-2 uppercase">
                    {batch.days}
                  </span>

                  {/* Tag */}
                  <span className="font-sans text-[11px] text-[#3A3A3A] font-semibold tracking-wider block uppercase">
                    {batch.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sunday Note */}
        <motion.div
          id="schedule-sunday-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <p className="font-sans text-[13px] text-[#3A3A3A] italic font-medium">
            * Sunday timings are open for single-shift morning routines.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
