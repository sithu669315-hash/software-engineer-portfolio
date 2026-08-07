import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../../data/projects';
import type { Project } from '../../../types';
import { SectionHeading } from '../../ui/SectionHeading';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title=""
          description=""
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative cursor-pointer overflow-hidden rounded-3xl glass p-0 shadow-glass-light dark:shadow-glass-dark transition-all duration-500 ease-premium hover:-translate-y-2 hover:shadow-glow-purple"
              onClick={() => setSelected(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(project)}
              aria-label={`View details for ${project.name}`}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/70 via-dark-bg/10 to-transparent" />
                {project.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-dark-primary to-dark-secondary px-3 py-1 font-mono text-[10px] font-semibold text-white">
                    Featured
                  </span>
                )}
                <span className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-500 group-hover:border-dark-primary/40" />
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-light-text dark:text-dark-text">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-dark-primary dark:text-dark-accent">{project.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-light-muted dark:text-dark-muted line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/5 dark:border-white/10 px-2.5 py-1 font-mono text-[10px] text-light-text/70 dark:text-dark-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-light-text dark:text-dark-text transition-colors hover:text-dark-primary dark:hover:text-dark-accent"
                  >
                    Live demo <ExternalLink size={12} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-light-text/70 dark:text-dark-muted transition-colors hover:text-dark-primary dark:hover:text-dark-accent"
                  >
                    <Github size={12} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
