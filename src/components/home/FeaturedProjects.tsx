'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../projects/ProjectCard';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const featuredProjects = [
  {
    id: 'project1',
    title: 'Azure Skyline Residence',
    category: 'Residential',
    description: 'A modern residential complex with panoramic views and sustainable design features.',
    imageSrc: '/project1.svg',
    href: '/projects/azure-skyline-residence',
  },
  {
    id: 'project2',
    title: 'Harmony Corporate Center',
    category: 'Commercial',
    description: 'An innovative office space designed for collaboration and productivity.',
    imageSrc: '/project2.svg',
    href: '/projects/harmony-corporate-center',
  },
  {
    id: 'project3',
    title: 'Urban Oasis Park',
    category: 'Public Space',
    description: 'A revitalized urban area transformed into a community gathering space.',
    imageSrc: '/project3.svg',
    href: '/projects/urban-oasis-park',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-[var(--muted)] dark:bg-[#111]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Explore our most innovative and impactful architectural designs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="/projects" variant="primary">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;