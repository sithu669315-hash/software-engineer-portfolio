import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '../../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] p-6 shadow-glass-dark sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-bold text-light-text dark:text-dark-text">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-dark-primary dark:text-dark-accent">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close project details"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full glass"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  loading="lazy"
                  className="h-44 w-full rounded-2xl object-cover"
                />
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-light-muted dark:text-dark-muted">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-black/5 dark:border-white/10 px-3 py-1 font-mono text-[11px] text-light-text/80 dark:text-dark-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-display text-sm font-semibold text-light-text dark:text-dark-text">
                  Key features
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-light-muted dark:text-dark-muted">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dark-primary dark:bg-dark-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-display text-sm font-semibold text-light-text dark:text-dark-text">
                    Challenge
                  </h4>
                  <p className="mt-1 text-sm text-light-muted dark:text-dark-muted">{project.challenges}</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-light-text dark:text-dark-text">
                    Solution
                  </h4>
                  <p className="mt-1 text-sm text-light-muted dark:text-dark-muted">{project.solutions}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-display text-sm font-semibold text-light-text dark:text-dark-text">
                Architecture
              </h4>
              <p className="mt-1 text-sm text-light-muted dark:text-dark-muted">{project.architecture}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-dark-primary to-dark-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-glow-purple"
              >
                Live demo <ExternalLink size={14} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-light-text dark:text-dark-text"
              >
                <Github size={14} /> Source
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
