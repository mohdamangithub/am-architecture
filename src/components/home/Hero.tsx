'use client';

// Temporarily comment out framer-motion to avoid errors
// import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] opacity-90" />
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[var(--accent)]/10 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[var(--primary)]/20 blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[var(--secondary)]/15 blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full bg-[var(--accent)]/10 blur-2xl animate-float-delayed" />
      </div>

      {/* 3D Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [perspective:1000px] [transform:rotateX(60deg)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-white py-20">
        <div className="max-w-3xl">
          <div className="mb-2 inline-block">
            <span className="bg-[var(--accent)] text-white caption px-4 py-1 rounded-full">Innovative Design Studio</span>
          </div>
          <h1 className="heading-xl mb-6 leading-tight">
            <span className="block">Redefining</span>
            <span className="block text-[var(--accent)] dark:text-[var(--accent)] drop-shadow-glow">Modern</span>
            <span className="block">Architecture</span>
          </h1>
          
          <p className="body-lg mb-10 text-white/90 max-w-2xl">
            Creating innovative spaces where <span className="text-[var(--accent)] font-medium">form meets function</span> and vision becomes reality.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Button href="/projects" size="lg" className="rounded-full px-10 shadow-glow">
              Our Projects
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="rounded-full px-10 border-2 hover:shadow-glow-light">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/80 caption mb-2">SCROLL TO EXPLORE</span>
        <div className="w-6 h-10 border-2 border-[var(--accent)]/70 rounded-full flex justify-center pt-2 shadow-glow-light">
          <div className="w-1 h-3 bg-[var(--accent)] rounded-full animate-bounce" />
        </div>
        <div className="mt-4 flex space-x-2">
          <div className="w-1 h-1 rounded-full bg-white/30"></div>
          <div className="w-6 h-1 rounded-full bg-[var(--accent)]/70"></div>
          <div className="w-1 h-1 rounded-full bg-white/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;