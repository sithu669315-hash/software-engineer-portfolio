import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      <span className="eyebrow text-dark-primary dark:text-dark-accent">{eyebrow}</span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-light-muted dark:text-dark-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
}
