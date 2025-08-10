'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Modern Living Co.',
    quote: 'AM Architecture transformed our vision into reality. Their attention to detail and innovative approach resulted in a headquarters that perfectly represents our brand.',
    image: '/testimonial1.svg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Property Developer',
    company: 'Urban Spaces',
    quote: 'Working with AM Architecture was a seamless experience. Their team understood our needs and delivered a design that exceeded our expectations while staying within budget.',
    image: '/testimonial2.svg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Homeowner',
    company: '',
    quote: 'Our dream home became a reality thanks to AM Architecture. They listened to our ideas and created a space that perfectly suits our lifestyle and aesthetic preferences.',
    image: '/testimonial3.svg',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000);
  };

  return (
    <section className="py-20 bg-[var(--muted)] dark:bg-[#111]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Hear from those who have experienced our architectural services"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === current && (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-[var(--primary)]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <p className="text-lg md:text-xl italic mb-6 text-[var(--foreground)]">
                      "{testimonial.quote}"
                    </p>
                    
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    
                    <p className="text-[var(--secondary)]">
                      {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-[var(--primary)] w-6' : 'bg-[var(--secondary)]/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;