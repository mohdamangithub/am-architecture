'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="/about-image.svg"
              alt="Architecture Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <span className="text-sm font-medium">Since 2010</span>
              <h3 className="text-2xl font-bold mt-2">Award-winning design studio</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">We Create Spaces That Inspire</h2>
            
            <p className="text-lg text-[var(--secondary)] mb-6">
              AM Architecture is a leading design firm specializing in innovative architectural solutions for residential, commercial, and public spaces.
            </p>
            
            <p className="text-[var(--secondary)] mb-8">
              {`Our team of experienced architects and designers is dedicated to creating spaces that are not only aesthetically pleasing but also functional, sustainable, and tailored to our clients' needs. We believe that great architecture has the power to transform lives and communities.`}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-2">15+</h4>
                <p className="text-[var(--secondary)]">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">200+</h4>
                <p className="text-[var(--secondary)]">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">25+</h4>
                <p className="text-[var(--secondary)]">Design Awards</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">50+</h4>
                <p className="text-[var(--secondary)]">Team Members</p>
              </div>
            </div>
            
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;