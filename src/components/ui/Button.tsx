import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<string, string> = {
  primary:
    'bg-gradient-to-r from-dark-primary to-dark-secondary text-white shadow-glow-purple hover:brightness-110',
  secondary:
    'glass text-light-text dark:text-dark-text hover:border-dark-primary/50 border border-black/5',
  ghost:
    'text-light-text/80 dark:text-dark-muted hover:text-dark-primary dark:hover:text-dark-accent',
};

export function Button({
  variant = 'primary',
  icon,
  className = '',
  children,
  as = 'button',
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (as === 'a' && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={classes}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
