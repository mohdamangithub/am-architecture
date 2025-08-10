import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  bgColor?: string;
  withPadding?: boolean;
}

const Section = ({
  children,
  className = '',
  id,
  fullWidth = false,
  bgColor,
  withPadding = true,
}: SectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const style = bgColor ? { backgroundColor: bgColor } : {};
  const paddingClass = withPadding ? 'py-12 md:py-24' : '';

  return (
    <section
      id={id}
      className={`${paddingClass} ${className}`}
      style={style}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={fullWidth ? 'w-full' : 'container mx-auto px-4 sm:px-6 lg:px-8'}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;