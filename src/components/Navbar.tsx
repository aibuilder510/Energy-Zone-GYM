import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', id: 'home' },
    { label: 'SERVICES', id: 'services' },
    { label: 'SCHEDULE', id: 'schedule' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height compensation
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
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/92 backdrop-blur-md border-b border-[#1E1E1E] py-4'
            : 'bg-transparent py-6'
        } px-4 md:px-8`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left - Logo treatment */}
          <div 
            id="nav-logo"
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            {/* Fitness Logo Icon (Dumbbell + Lightning energy bolt) */}
            <div className="w-9 h-9 rounded-[4px] bg-[#141414] border border-[#1E1E1E] group-hover:border-[#C8001E] flex items-center justify-center p-1.5 transition-all duration-300 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full">
                <circle cx="16" cy="16" r="14" stroke="#C8001E" strokeWidth="1.5" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Dumbbell weight plates */}
                <path d="M10 11h2v10h-2zm10 0h2v10h-2z" fill="#F0F0F0" />
                {/* Dumbbell inner collars */}
                <path d="M12 13h1v6h-1zm7 0h1v6h-1z" fill="#A8A8A8" />
                {/* Barbell bar */}
                <rect x="7" y="15" width="18" height="2" rx="0.5" fill="#F0F0F0" />
                {/* Center lightning bolt */}
                <polygon points="17,8 11,17 15,17 14,24 21,14 17,14" fill="#C8001E" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-bebas text-[20px] text-[#F0F0F0] leading-none tracking-[0.08em] group-hover:text-[#C8001E] transition-colors duration-200">
                ENERGY ZONE
              </span>
              <span className="font-sans text-[9px] font-semibold text-[#C8001E] tracking-[0.2em] mt-0.5 uppercase">
                GYM · SECTOR 38
              </span>
            </div>
          </div>

          {/* Center - Nav Links (Desktop) */}
          <div id="nav-links-desktop" className="desktop-nav-links hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className="relative py-2 font-sans text-[12px] tracking-[0.12em] font-medium text-[#787878] hover:text-[#F0F0F0] transition-colors duration-150 uppercase"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#C8001E] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right - Buttons (Desktop) */}
          <div id="nav-actions-desktop" className="hidden md:flex items-center gap-6">
            <button
              id="btn-trial-nav"
              onClick={() => handleNavClick('freetrial')}
              className="group relative font-sans text-[12px] tracking-[0.1em] font-medium text-[#C8001E] uppercase"
            >
              BOOK FREE TRIAL
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8001E] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              id="btn-join-nav"
              onClick={() => handleNavClick('freetrial')}
              className="bg-[#C8001E] hover:bg-[#A0001A] text-[#F0F0F0] font-bebas text-[16px] px-6 py-2 tracking-wider rounded-[2px] transition-colors duration-200"
            >
              JOIN NOW
            </button>
          </div>

          {/* Hamburger Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            className="hamburger-button text-[#F0F0F0] hover:text-[#C8001E] transition-colors p-1 flex items-center justify-center bg-[#141414]/90 border border-[#1E1E1E] rounded-[4px] w-10 h-10 fixed top-[16px] right-[16px] z-[100]"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Right Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#080808]/80 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              id="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[75vw] max-w-[320px] bg-[#0F0F0F] border-l border-[#1E1E1E] z-50 p-6 flex flex-col md:hidden justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-12">
                  {/* Mini Logo */}
                  <div className="flex flex-col">
                    <div className="w-5 h-[2px] bg-[#C8001E] mb-1"></div>
                    <span className="font-bebas text-18px text-[#F0F0F0] tracking-[0.08em]">
                      ENERGY ZONE
                    </span>
                  </div>
                  <button
                    id="mobile-drawer-close"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#F0F0F0] hover:text-[#C8001E] transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div id="mobile-nav-links" className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      id={`mobile-nav-link-${link.id}`}
                      onClick={() => handleNavClick(link.id)}
                      className={`text-left font-bebas text-32px tracking-wide transition-colors ${
                        activeSection === link.id ? 'text-[#C8001E]' : 'text-[#F0F0F0] hover:text-[#C8001E]'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              <div id="mobile-nav-footer" className="flex flex-col gap-4 mt-auto">
                <button
                  id="mobile-btn-trial"
                  onClick={() => handleNavClick('freetrial')}
                  className="border border-[#3A3A3A] hover:border-[#C8001E] text-[#F0F0F0] font-bebas text-18px py-3 rounded-[2px] transition-colors"
                >
                  BOOK FREE TRIAL
                </button>
                <button
                  id="mobile-btn-join"
                  onClick={() => handleNavClick('freetrial')}
                  className="bg-[#C8001E] hover:bg-[#A0001A] text-[#F0F0F0] font-bebas text-18px py-3 rounded-[2px] transition-colors"
                >
                  JOIN NOW
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
