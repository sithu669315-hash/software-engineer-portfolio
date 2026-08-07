import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { scrollToId } from '../../utils/scroll';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollPosition();
  const active = useActiveSection(navLinks.map((l) => l.id));

  const handleClick = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ease-premium ${
          scrolled ? 'glass shadow-glass-light dark:shadow-glass-dark' : 'bg-transparent'
        }`}
      >
        <button
          onClick={() => handleClick('home')}
          className="font-display text-lg font-bold tracking-tight text-light-text dark:text-dark-text"
        >
          SiSi<span className="text-gradient">.dev</span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id
                  ? 'text-dark-primary dark:text-dark-accent'
                  : 'text-light-text/70 dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-dark-primary/10 dark:bg-dark-primary/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            as="a"
            href="/public/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="!px-4 !py-2 text-xs"
            icon={<Download size={14} />}
          >
            Resume
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full glass"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-2 flex flex-col gap-1 rounded-3xl glass p-4 shadow-glass-light dark:shadow-glass-dark md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                  active === link.id
                    ? 'bg-dark-primary/10 text-dark-primary dark:text-dark-accent'
                    : 'text-light-text/80 dark:text-dark-muted'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-dark-primary to-dark-secondary px-4 py-3 text-sm font-semibold text-white"
            >
              <Download size={14} /> Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
