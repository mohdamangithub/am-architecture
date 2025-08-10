import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import ServicesOverview from '@/components/home/ServicesOverview';
import AboutSection from '@/components/home/AboutSection';
import Stats from '@/components/home/Stats';
import Testimonials from '@/components/home/Testimonials';
import ContactCTA from '@/components/home/ContactCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <AboutSection />
      <Stats />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
