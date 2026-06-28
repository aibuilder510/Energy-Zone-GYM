import { Instagram, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export default function Footer({ setActiveSection }: FooterProps) {
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="footer" className="bg-[#050505] border-t border-[#1E1E1E] pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top 4-Column Section */}
        <div id="footer-top" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#1E1E1E] pb-12 mb-8">
          
          {/* Col 1 - Brand */}
          <div id="footer-col-brand" className="flex flex-col">
            <div className="flex items-center gap-3 group cursor-pointer mb-2" onClick={() => handleNavClick('home')}>
              <div className="w-8 h-8 rounded-[4px] bg-[#141414] border border-[#1E1E1E] group-hover:border-[#C8001E] flex items-center justify-center p-1.5 transition-all duration-300 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full">
                  <circle cx="16" cy="16" r="14" stroke="#C8001E" strokeWidth="1.5" fill="none" className="opacity-40" />
                  <path d="M10 11h2v10h-2zm10 0h2v10h-2z" fill="#F0F0F0" />
                  <path d="M12 13h1v6h-1zm7 0h1v6h-1z" fill="#A8A8A8" />
                  <rect x="7" y="15" width="18" height="2" rx="0.5" fill="#F0F0F0" />
                  <polygon points="17,8 11,17 15,17 14,24 21,14 17,14" fill="#C8001E" />
                </svg>
              </div>
              <span className="font-bebas text-[22px] text-[#F0F0F0] tracking-[0.06em] uppercase">
                ENERGY ZONE GYM
              </span>
            </div>
            <p className="font-sans text-[13px] text-[#787878] italic mt-1 font-medium">
              "Train with intention."
            </p>
            <p className="font-sans text-[12px] text-[#3A3A3A] mt-4 leading-relaxed font-semibold uppercase">
              House No. 343P, Behind Villa Dairy <br />
              Sector 38, Gurugram, <br />
              Haryana 122018
            </p>
          </div>

          {/* Col 2 - Quick Links */}
          <div id="footer-col-links" className="flex flex-col">
            <span className="font-sans text-[10px] font-bold text-[#C8001E] tracking-[0.2em] uppercase mb-4 block">
              NAVIGATE
            </span>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('home')}
                className="text-left font-sans text-[13px] text-[#787878] hover:text-[#F0F0F0] transition-colors duration-150 py-0.5"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className="text-left font-sans text-[13px] text-[#787878] hover:text-[#F0F0F0] transition-colors duration-150 py-0.5"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick('schedule')}
                className="text-left font-sans text-[13px] text-[#787878] hover:text-[#F0F0F0] transition-colors duration-150 py-0.5"
              >
                Schedule
              </button>
              <button
                onClick={() => handleNavClick('freetrial')}
                className="text-left font-sans text-[13px] text-[#787878] hover:text-[#F0F0F0] transition-colors duration-150 py-0.5"
              >
                Free Trial
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left font-sans text-[13px] text-[#787878] hover:text-[#F0F0F0] transition-colors duration-150 py-0.5"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Col 3 - Contact Quick */}
          <div id="footer-col-contact" className="flex flex-col">
            <span className="font-sans text-[10px] font-bold text-[#C8001E] tracking-[0.2em] uppercase mb-4 block">
              REACH US
            </span>
            <div className="flex flex-col gap-3 font-sans text-[13px] text-[#787878]">
              <a 
                href="tel:+918587857531" 
                className="hover:text-[#C8001E] transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8001E]" />
                <span>+91 85878 57531</span>
              </a>
              <a 
                href="https://instagram.com/gym_energy_zone" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-[#C8001E] transition-colors flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C8001E]" />
                <span>@gym_energy_zone</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C8001E] mt-0.5 flex-shrink-0" />
                <span>Sector 38, Gurugram</span>
              </div>
            </div>
          </div>

          {/* Col 4 - Social */}
          <div id="footer-col-social" className="flex flex-col">
            <span className="font-sans text-[10px] font-bold text-[#C8001E] tracking-[0.2em] uppercase mb-4 block">
              FOLLOW
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/gym_energy_zone"
                target="_blank"
                rel="noreferrer"
                id="footer-insta-icon-link"
                className="p-3 bg-[#0F0F0F] border border-[#1E1E1E] hover:border-[#C8001E] text-[#787878] hover:text-[#C8001E] rounded-full transition-all duration-300 transform hover:scale-105"
                title="Follow Energy Zone Gym on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div id="footer-bottom" className="text-center pt-4">
          <p className="font-sans text-[11px] text-[#3A3A3A] font-semibold tracking-wider uppercase">
            © 2026 Energy Zone Gym. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
