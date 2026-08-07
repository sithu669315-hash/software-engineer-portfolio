import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  strong?: boolean;
  hover?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  strong = false,
  hover = true,
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`${strong ? 'glass-strong' : 'glass'} rounded-3xl shadow-glass-light dark:shadow-glass-dark ${
        hover ? 'transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-glow-purple' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
