'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  href: string;
}

const ProjectCard = ({
  id,
  title,
  category,
  description,
  imageSrc,
  href,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href} className="block h-full">
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-300" />
        </div>

        <motion.div
          animate={{
            y: isHovered ? -10 : 0,
            opacity: isHovered ? 1 : 0.9,
          }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-6 text-white"
        >
          <span className="mb-2 inline-block text-sm font-medium text-[var(--accent)]">
            {category}
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm text-white/80 line-clamp-2">{description}</p>
          
          <motion.span
            animate={{
              x: isHovered ? 5 : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-4 inline-flex items-center text-sm font-medium text-[var(--accent)]"
          >
            View Project
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
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;