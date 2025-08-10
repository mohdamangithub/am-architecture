'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/projects/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle';

// Sample project data - in a real application, this would come from a database or API
const projects = [
  {
    id: 1,
    title: 'Modern Lakeside Villa',
    category: 'Residential',
    description: 'A contemporary villa with panoramic lake views, featuring sustainable materials and energy-efficient design.',
    image: '/project1.svg',
    slug: 'modern-lakeside-villa',
  },
  {
    id: 2,
    title: 'Urban Office Complex',
    category: 'Commercial',
    description: 'A state-of-the-art office building designed for collaboration and productivity in the heart of the city.',
    image: '/project2.svg',
    slug: 'urban-office-complex',
  },
  {
    id: 3,
    title: 'Minimalist Beach House',
    category: 'Residential',
    description: 'A sleek, minimalist beach house that blends seamlessly with its natural surroundings.',
    image: '/project3.svg',
    slug: 'minimalist-beach-house',
  },
  {
    id: 4,
    title: 'Community Arts Center',
    category: 'Public',
    description: 'A vibrant community space designed to foster creativity and cultural engagement.',
    image: '/project4.svg',
    slug: 'community-arts-center',
  },
  {
    id: 5,
    title: 'Sustainable Apartment Complex',
    category: 'Residential',
    description: 'An eco-friendly apartment complex with green roofs, solar panels, and community gardens.',
    image: '/project5.svg',
    slug: 'sustainable-apartment-complex',
  },
  {
    id: 6,
    title: 'Boutique Hotel Renovation',
    category: 'Commercial',
    description: 'A careful renovation of a historic building into a luxury boutique hotel, preserving original architectural elements.',
    image: '/project6.svg',
    slug: 'boutique-hotel-renovation',
  },
  {
    id: 7,
    title: 'Modern Public Library',
    category: 'Public',
    description: 'A contemporary library designed as a community hub for learning and social interaction.',
    image: '/project7.svg',
    slug: 'modern-public-library',
  },
  {
    id: 8,
    title: 'Luxury Retail Space',
    category: 'Commercial',
    description: 'An elegant retail environment designed to enhance the shopping experience and showcase premium products.',
    image: '/project8.svg',
    slug: 'luxury-retail-space',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Public'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Projects" 
          subtitle="Explore our portfolio of innovative architectural designs"
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${activeCategory === category 
                ? 'bg-[var(--primary)] text-white' 
                : 'bg-[var(--muted)] hover:bg-[var(--muted-foreground)] text-[var(--foreground)]'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              id={project.id.toString()}
              title={project.title}
              category={project.category}
              description={project.description}
              imageSrc={project.image}
              href={`/projects/${project.slug}`}
            />
          ))}
        </motion.div>
        
        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold mb-4">No projects found</h3>
            <p className="text-[var(--secondary)]">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
}