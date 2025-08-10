'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/services/ServiceCard';

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  reverse?: boolean;
}

const ServiceDetail = ({ title, description, features, image, reverse = false }: ServiceDetailProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-[var(--secondary)] mb-6">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative h-[400px] rounded-lg overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

const services = [
  {
    id: 1,
    title: 'Interior Design',
    description: 'Transform your interior spaces with our expert design services.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    href: '#interior-design',
  },
  {
    id: 2,
    title: 'Exterior Design',
    description: 'Create stunning facades and outdoor spaces that make a lasting impression.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: '#exterior-design',
  },
  {
    id: 3,
    title: 'Structural Design',
    description: 'Ensure the integrity and safety of your building with our structural expertise.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    href: '#structural-design',
  },
  {
    id: 4,
    title: 'Consultation',
    description: 'Get expert advice and guidance for your architectural projects.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    href: '#consultation',
  },
  {
    id: 5,
    title: 'Renovation',
    description: 'Breathe new life into existing spaces with our renovation services.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    href: '#renovation',
  },
  {
    id: 6,
    title: 'Sustainable Design',
    description: 'Create environmentally responsible buildings with our sustainable design approach.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '#sustainable-design',
  },
];

const serviceDetails = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Our interior design services focus on creating spaces that are not only aesthetically pleasing but also functional and tailored to your specific needs. We believe that the interior of a building should reflect its purpose while providing comfort and inspiration to its occupants.',
    features: [
      'Space planning and layout optimization',
      'Material and finish selection',
      'Custom furniture design',
      'Lighting design',
      'Color scheme development',
      'Acoustic considerations',
      'Accessibility compliance',
    ],
    image: '/interior-design.svg',
  },
  {
    id: 'exterior-design',
    title: 'Exterior Design',
    description: 'The exterior of a building is its introduction to the world. Our exterior design services focus on creating facades that make a statement while harmonizing with the surrounding environment. We consider factors such as climate, context, and client preferences to create exteriors that are both beautiful and practical.',
    features: [
      'Facade design and material selection',
      'Landscape integration',
      'Outdoor living space design',
      'Sustainable exterior solutions',
      'Climate-responsive design',
      'Curb appeal enhancement',
      'Exterior lighting design',
    ],
    image: '/exterior-design.svg',
    reverse: true,
  },
  {
    id: 'structural-design',
    title: 'Structural Design',
    description: 'A building is only as good as its structure. Our structural design services ensure that your building is not only aesthetically pleasing but also safe, stable, and built to last. We work closely with engineers to create innovative structural solutions that support your architectural vision.',
    features: [
      'Structural system selection and optimization',
      'Load calculation and analysis',
      'Foundation design',
      'Seismic design considerations',
      'Structural material selection',
      'Building code compliance',
      'Coordination with architectural design',
    ],
    image: '/structural-design.svg',
  },
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'Not sure where to start with your project? Our consultation services provide expert advice and guidance to help you make informed decisions about your architectural needs. We can help you clarify your vision, establish a budget, and develop a roadmap for your project.',
    features: [
      'Project feasibility studies',
      'Site analysis and selection',
      'Budget development and cost estimation',
      'Regulatory and zoning guidance',
      'Sustainable design strategies',
      'Material and technology recommendations',
      'Project timeline planning',
    ],
    image: '/consultation.svg',
    reverse: true,
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: 'Breathe new life into existing spaces with our renovation services. Whether you\'re looking to update a historic building or modernize a dated space, our team has the expertise to transform your existing structure while respecting its original character and addressing modern needs.',
    features: [
      'Historic preservation and restoration',
      'Adaptive reuse of existing buildings',
      'Space reconfiguration',
      'Building system upgrades',
      'Energy efficiency improvements',
      'Accessibility enhancements',
      'Phased renovation planning'
    ],
    image: '/renovation.svg',
  },
  {
    id: 'sustainable-design',
    title: 'Sustainable Design',
    description: 'We are committed to creating environmentally responsible buildings that minimize resource consumption and environmental impact. Our sustainable design services integrate green building practices into every aspect of the design process, from site selection to material choices to energy systems.',
    features: [
      'Energy-efficient building design',
      'Renewable energy integration',
      'Water conservation strategies',
      'Sustainable material selection',
      'Indoor air quality optimization',
      'Green certification guidance (LEED, BREEAM, etc.)',
      'Lifecycle cost analysis',
    ],
    image: '/sustainable-design.svg',
    reverse: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive architectural solutions for your needs"
        />
        
        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              index={index}
            />
          ))}
        </div>
        
        {/* Service Details */}
        <div className="space-y-32">
          {serviceDetails.map((service, index) => (
            <section key={service.id} id={service.id}>
              <ServiceDetail 
                title={service.title}
                description={service.description}
                features={service.features || []}
                image={service.image}
                reverse={service.reverse}
              />
            </section>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-32 bg-[var(--primary)] text-white rounded-lg p-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Contact us today to discuss how our architectural services can bring your vision to life.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            href="/contact"
            className="inline-block bg-white text-[var(--primary)] font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all"
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </div>
  );
}