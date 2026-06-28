import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import BatchTimings from './components/BatchTimings';
import Services from './components/Services';
import CoachingTeam from './components/CoachingTeam';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FreeTrialForm from './components/FreeTrialForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'services', 'schedule', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger when section is in the middle of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div id="app-root" className="bg-[#080808] text-[#F0F0F0] font-sans antialiased selection:bg-[#C8001E] selection:text-white min-h-screen">
      
      {/* Fixed Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <Hero />

      {/* Running Manifesto Strip */}
      <Manifesto />

      {/* Services Section */}
      <Services />

      {/* Coaching Team Section */}
      <CoachingTeam />

      {/* Batch Timings Schedule Section */}
      <BatchTimings />

      {/* Magazine-style Horizontal Gallery */}
      <Gallery />

      {/* Testimonials Quote Blocks */}
      <Testimonials />

      {/* Centered Free Trial Form */}
      <FreeTrialForm />

      {/* Contact Information & Map Embed */}
      <Contact />

      {/* Brand Footer */}
      <Footer setActiveSection={setActiveSection} />

      {/* Interactive Floating Tooltip Buttons */}
      <FloatingButtons />

    </div>
  );
}
