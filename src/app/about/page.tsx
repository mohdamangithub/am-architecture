'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center"
    >
      <div className="relative w-64 h-64 rounded-full overflow-hidden mb-6">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-[var(--primary)] mb-4">{role}</p>
      <p className="text-center text-[var(--secondary)]">{bio}</p>
    </motion.div>
  );
};

const teamMembers: TeamMemberProps[] = [
  {
    name: 'Alexander Mitchell',
    role: 'Principal Architect & Founder',
    image: '/team-member1.svg',
    bio: 'With over 20 years of experience, Alexander founded AM Architecture with a vision to create spaces that inspire and endure. His award-winning designs blend functionality with artistic expression.',
  },
  {
    name: 'Sophia Reynolds',
    role: 'Senior Architect',
    image: '/team-member2.svg',
    bio: 'Sophia specializes in sustainable design and has led some of our most innovative eco-friendly projects. Her work has been recognized for its environmental sensitivity and creative solutions.',
  },
  {
    name: 'David Chen',
    role: 'Interior Design Director',
    image: '/team-member3.svg',
    bio: 'David brings spaces to life from the inside out, focusing on creating interiors that are both beautiful and functional. His designs prioritize user experience and attention to detail.',
  },
  {
    name: 'Olivia Martinez',
    role: 'Project Manager',
    image: '/team-member4.svg',
    bio: 'Olivia ensures that our projects run smoothly from concept to completion. Her exceptional organizational skills and client communication make complex projects seem effortless.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] mb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-image.svg"
            alt="AM Architecture Studio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About AM Architecture
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl"
            >
              Creating spaces that inspire, endure, and transform lives since 2010
            </motion.p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <section className="mb-20">
          <SectionTitle 
            title="Our Story" 
            subtitle="The journey of AM Architecture"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg mb-6">
                Founded in 2010 by Alexander Mitchell, AM Architecture began with a simple mission: to create spaces that inspire, endure, and transform lives. What started as a small studio with just three architects has grown into a renowned firm with a diverse team of over 50 professionals.
              </p>
              
              <p className="mb-6">
                Our journey has been marked by a commitment to excellence, innovation, and sustainability. We believe that great architecture goes beyond aesthetics—it shapes how people live, work, and interact with their environment.
              </p>
              
              <p>
                {`Over the years, we've had the privilege of working on a wide range of projects, from intimate residential spaces to large-scale public buildings. Each project, regardless of size or scope, receives the same level of attention and dedication from our team.`}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/about-image.svg"
                alt="AM Architecture Studio"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="mb-20 bg-[var(--muted)] dark:bg-[#111] py-16 rounded-lg">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide our work"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-[var(--secondary)]">We push boundaries and explore new possibilities in architectural design.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-[var(--secondary)]">We design with the future in mind, prioritizing environmental responsibility.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-[var(--secondary)]">We believe in the power of teamwork and partnership with our clients.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-[var(--secondary)]">We strive for the highest standards in every aspect of our work.</p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="mb-20">
          <SectionTitle 
            title="Our Team" 
            subtitle="Meet the talented professionals behind AM Architecture"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </section>
        
        {/* Awards & Recognition Section */}
        <section className="mb-20">
          <SectionTitle 
            title="Awards & Recognition" 
            subtitle="Our commitment to excellence has been recognized globally"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 border border-[var(--muted-foreground)] rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">International Design Excellence Award</h3>
              <p className="text-[var(--primary)] mb-4">2022</p>
              <p className="text-[var(--secondary)]">Recognized for our innovative approach to sustainable urban design in the Modern Public Library project.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-[var(--muted-foreground)] rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">{`Architectural Digest's Firm of the Year`}</h3>
              <p className="text-[var(--primary)] mb-4">2021</p>
              <p className="text-[var(--secondary)]">Honored for our portfolio of residential projects that blend modern aesthetics with functional living spaces.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 border border-[var(--muted-foreground)] rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Green Building Innovation Award</h3>
              <p className="text-[var(--primary)] mb-4">2020</p>
              <p className="text-[var(--secondary)]">Awarded for our commitment to sustainable design practices and energy-efficient solutions.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 border border-[var(--muted-foreground)] rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Urban Renewal Excellence Award</h3>
              <p className="text-[var(--primary)] mb-4">2019</p>
              <p className="text-[var(--secondary)]">Recognized for our work in transforming abandoned industrial spaces into vibrant community centers.</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}