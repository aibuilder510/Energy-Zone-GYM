import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [featured, second, third] = TESTIMONIALS;

  return (
    <section 
      id="testimonials" 
      className="bg-[#0F0F0F] py-24 px-4 md:px-8 border-b border-[#1E1E1E]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div id="testimonials-header" className="mb-16 text-left sm:text-center">
          <span className="font-sans text-[10px] font-semibold text-[#C8001E] tracking-[0.2em] uppercase block mb-3">
            WHAT MEMBERS SAY
          </span>
          <h2 className="font-bebas text-[40px] md:text-[64px] text-[#F0F0F0] leading-none uppercase">
            4.8 STARS. <br className="sm:hidden" />
            <span className="text-[#C8001E]"> 283 REVIEWS.</span>
          </h2>
        </div>

        {/* Featured Big Testimonial Card */}
        <motion.div
          id="featured-testimonial"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto flex flex-col items-center text-center px-4 md:px-12 py-10"
        >
          {/* Decorative Giant Quotation Mark */}
          <div className="absolute top-0 left-0 md:left-6 font-bebas text-[140px] text-[#C8001E] opacity-30 select-none leading-none -translate-y-12">
            "
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-6 text-[#C8001E] z-10">
            {[...Array(featured.stars)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C8001E] stroke-none" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="font-sans text-[20px] md:text-[22px] text-[#F0F0F0] font-medium leading-relaxed max-w-[680px] z-10">
            "{featured.text}"
          </blockquote>

          {/* Attribution */}
          <cite className="font-sans text-[13px] text-[#787878] not-italic mt-6 font-semibold uppercase tracking-wider block">
            {featured.author}
          </cite>
        </motion.div>

        {/* Thin Divider */}
        <div className="h-[1px] bg-[#1E1E1E] max-w-[400px] w-full mx-auto my-12" />

        {/* 6 Real Reviews Grid */}
        <div id="smaller-testimonials" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              reviewer: "Yugal Pal",
              initials: "YP",
              text: "The mentor nature is a lot of friendly, motivating. Along with the helpful guidance for body building. One more special thing I would like to tell that it has a friendly environment for both boys and girls and each kind of person either lean body boys, fatty girls, body builder or any other body types is treated equally. There fore it best for the people who are suffering from body shaming or ragging in life."
            },
            {
              reviewer: "Rahual Sarraf",
              initials: "RS",
              text: "Gym is well equipped. Trainer is very attentive and will guide you as if you are his own responsibility. Even the guys how have joined here will motivate you. Its very good gym for both boys and girls."
            },
            {
              reviewer: "Ritesh",
              initials: "R",
              text: "I am enjoying workouts in this gym due to the wide variety of equipment and proper training. Gym trainers have a good knowledge of weight loss and body building. They are very supportive and of cherishing nature. Overall, this gym is excellent."
            },
            {
              reviewer: "Divya Singh",
              initials: "DS",
              text: "Fantastic personal training. Trainers genuinely care and go above and beyond to help you achieve your goals. The gym is clean, and I would highly recommend it! It's reasonably priced and offers a great workout atmosphere."
            },
            {
              reviewer: "Punit Aggarwal",
              initials: "PA",
              text: "I have been coming to this gym for the past two months, and I have gained 7 kg of muscle mass. The gym trainer is exceptional and has vast experience. Training in the gym is safe and fun."
            },
            {
              reviewer: "Teena Verma",
              initials: "TV",
              text: "Excellent personal training with pocket friendly. Mr. Parvinder who really care and go above and beyond to help to achieve my fitness goals and I am seeing results for sure. Highly recommended ✌️"
            }
          ].map((review, index) => (
            <motion.div
              key={index}
              id={`testimonial-card-${index + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="review-card bg-[#141414] border border-[#1E1E1E] hover:border-[#C8001E]/30 transition-all duration-300 rounded-[8px] p-6 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Avatar and Reviewer Info */}
                <div className="flex items-center gap-3">
                  {/* Avatar Circle */}
                  <div className="w-10 h-10 rounded-full bg-[#C8001E] flex items-center justify-center text-white font-bebas text-[18px]">
                    {review.initials}
                  </div>
                  {/* Right of Avatar */}
                  <div>
                    <h4 className="font-sans text-[14px] text-[#F0F0F0] font-semibold">
                      {review.reviewer}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {/* Google G colored SVG */}
                      <svg viewBox="0 0 24 24" className="w-[12px] h-[12px]" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                      </svg>
                      <span className="font-sans text-[11px] text-[#787878] leading-none">
                        Google Review
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mt-4 text-[#C8001E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-[14px] h-[14px] fill-[#C8001E] stroke-none" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-[14px] text-[#787878] leading-[1.75] mt-3">
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center CTA Link */}
        <div id="testimonials-cta" className="mt-12 text-center">
          <a
            href="https://maps.google.com/?q=Energy+Zone+Gym+Sector+38+Gurugram"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-[#787878] hover:text-[#C8001E] transition-colors duration-200"
          >
            Read all 283 reviews on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
