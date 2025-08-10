'use client';

import { motion } from 'framer-motion';

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, label, delay }: StatItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center px-4"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">{value}</h3>
      <p className="text-[var(--secondary)]">{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-[var(--muted)] dark:bg-[#111]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value="15+" label="Years of Experience" delay={0} />
          <StatItem value="200+" label="Projects Completed" delay={0.1} />
          <StatItem value="25+" label="Design Awards" delay={0.2} />
          <StatItem value="50+" label="Team Members" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default Stats;