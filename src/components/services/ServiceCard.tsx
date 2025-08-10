'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, href, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg bg-white dark:bg-[#111] p-8 shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
        {icon}
      </div>
      
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      
      <p className="mb-6 text-[var(--secondary)]">{description}</p>
      
      <Link 
        href={href} 
        className="inline-flex items-center text-sm font-medium text-[var(--primary)] transition-all duration-300 group-hover:translate-x-1"
      >
        Learn more
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </Link>
      
      <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-[var(--primary)]/5 transition-transform duration-300 group-hover:scale-150" />
    </motion.div>
  );
};

export default ServiceCard;