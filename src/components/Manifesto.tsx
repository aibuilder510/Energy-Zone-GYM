export default function Manifesto() {
  const text = "WE DON'T DO CASUAL FITNESS HERE  ·  ENERGY ZONE  ·  TRAIN WITH INTENTION  ·  ENERGY ZONE  ·  SECTOR 38'S MOST INTENSE GYM  ·  ENERGY ZONE  ·  SINCE DAY ONE  ·  NO EXCUSES  ·  ENERGY ZONE  ·  ";
  
  return (
    <section 
      id="manifesto" 
      className="relative w-full bg-[#C8001E] py-6 overflow-hidden z-20 border-y border-[#FF0A2F]/20 select-none"
    >
      <div id="manifesto-marquee-wrapper" className="flex overflow-hidden">
        {/* Double the content to create seamless loop */}
        <div id="manifesto-marquee-track-1" className="animate-marquee inline-flex whitespace-nowrap">
          <span className="font-bebas text-[22px] text-white tracking-[0.06em] uppercase">
            {text}
          </span>
          <span className="font-bebas text-[22px] text-white tracking-[0.06em] uppercase">
            {text}
          </span>
        </div>
        <div id="manifesto-marquee-track-2" className="animate-marquee inline-flex whitespace-nowrap" aria-hidden="true">
          <span className="font-bebas text-[22px] text-white tracking-[0.06em] uppercase">
            {text}
          </span>
          <span className="font-bebas text-[22px] text-white tracking-[0.06em] uppercase">
            {text}
          </span>
        </div>
      </div>
    </section>
  );
}
