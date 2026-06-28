import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function FreeTrialForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Boxing',
    batch: 'MORNING',
  });
  const [error, setError] = useState('');

  const servicesList = [
    'Boxing',
    'Kickboxing',
    'HIIT Classes',
    'Weight Training',
    'Personal Training',
    'Nutrition Consulting',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleBatchSelect = (batch: 'MORNING' | 'EVENING') => {
    setFormData((prev) => ({
      ...prev,
      batch,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return;
    }

    if (!formData.phone.trim()) {
      setError('Please enter your phone number');
      return;
    }

    // Strip any non-digit chars from phone for simple check
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    // Build the WhatsApp message
    const formattedPhone = digitsOnly.startsWith('91') && digitsOnly.length > 10 
      ? digitsOnly 
      : `91${digitsOnly.slice(-10)}`; // Ensure correct format: +91 then 10 digit number

    const textMessage = `Hi! Free trial request from Energy Zone website.
Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Service: ${formData.service}
Batch: ${formData.batch}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/918587857531?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="freetrial" 
      className="bg-[#080808] py-24 px-4 md:px-8 border-b border-[#1E1E1E] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Content */}
        <div id="trial-header" className="text-center mb-12">
          <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-3">
            FREE TRIAL
          </span>
          <h2 className="font-bebas text-[48px] md:text-[80px] text-[#F0F0F0] leading-none uppercase mb-4">
            ONE SESSION. <br />
            <span className="text-[#C8001E]">ON US.</span>
          </h2>
          <p className="font-sans text-[15px] md:text-[16px] text-[#787878] max-w-[440px] mx-auto leading-relaxed">
            Fill in your details. We'll reach out on WhatsApp. <br />
            You come in, train once, and decide. No pressure. No spam.
          </p>
        </div>

        {/* Form Container */}
        <motion.div
          id="trial-form-box"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-[520px] mx-auto bg-[#0F0F0F] border border-[#1E1E1E] rounded-[8px] p-8 md:p-10 shadow-xl shadow-black/50"
        >
          <form id="free-trial-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Input Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-sans text-[11px] font-semibold text-[#787878] tracking-[0.1em] uppercase">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full bg-[#080808] border border-[#1E1E1E] rounded-[4px] px-4 py-3.5 text-[#F0F0F0] font-sans text-[14px] placeholder-[#3A3A3A] transition-colors focus:border-[#C8001E] focus:outline-none focus:ring-2 focus:ring-[#C8001E]/10"
              />
            </div>

            {/* Input Phone */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-sans text-[11px] font-semibold text-[#787878] tracking-[0.1em] uppercase">
                Phone (with WhatsApp)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3A3A3A] font-sans text-[14px] font-medium select-none">
                  +91
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="98765 43210"
                  className="w-full bg-[#080808] border border-[#1E1E1E] rounded-[4px] pl-14 pr-4 py-3.5 text-[#F0F0F0] font-sans text-[14px] placeholder-[#3A3A3A] transition-colors focus:border-[#C8001E] focus:outline-none focus:ring-2 focus:ring-[#C8001E]/10"
                />
              </div>
            </div>

            {/* Select Service Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="font-sans text-[11px] font-semibold text-[#787878] tracking-[0.1em] uppercase">
                Select Service
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-[#080808] border border-[#1E1E1E] rounded-[4px] px-4 py-3.5 text-[#F0F0F0] font-sans text-[14px] transition-colors focus:border-[#C8001E] focus:outline-none appearance-none cursor-pointer"
                >
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv} className="bg-[#0F0F0F]">
                      {srv}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#787878]">
                  {/* Custom downward arrow */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Preferred Batch Side-by-Side buttons */}
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[11px] font-semibold text-[#787878] tracking-[0.1em] uppercase block">
                Preferred Batch
              </span>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  id="btn-batch-morning"
                  onClick={() => handleBatchSelect('MORNING')}
                  className={`py-3.5 rounded-[4px] font-bebas text-[16px] tracking-wider transition-colors duration-200 border ${
                    formData.batch === 'MORNING'
                      ? 'bg-[#C8001E] border-[#C8001E] text-[#F0F0F0]'
                      : 'bg-[#141414] border-[#1E1E1E] text-[#787878] hover:text-[#F0F0F0] hover:border-[#3A3A3A]'
                  }`}
                >
                  MORNING
                </button>
                <button
                  type="button"
                  id="btn-batch-evening"
                  onClick={() => handleBatchSelect('EVENING')}
                  className={`py-3.5 rounded-[4px] font-bebas text-[16px] tracking-wider transition-colors duration-200 border ${
                    formData.batch === 'EVENING'
                      ? 'bg-[#C8001E] border-[#C8001E] text-[#F0F0F0]'
                      : 'bg-[#141414] border-[#1E1E1E] text-[#787878] hover:text-[#F0F0F0] hover:border-[#3A3A3A]'
                  }`}
                >
                  EVENING
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p id="form-error-msg" className="text-[#C8001E] font-sans text-[12px] font-semibold text-center uppercase tracking-wide animate-pulse">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              id="btn-claim-session"
              className="w-full bg-[#C8001E] hover:bg-[#A0001A] text-white font-bebas text-[22px] py-5 rounded-[4px] tracking-wider transition-colors duration-200 uppercase mt-4 cursor-pointer"
            >
              CLAIM MY FREE SESSION
            </button>

            {/* Sub-text disclaimer */}
            <span className="text-[#3A3A3A] font-sans text-[12px] text-center block leading-none font-medium mt-1">
              * Opens WhatsApp with your details pre-filled
            </span>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
