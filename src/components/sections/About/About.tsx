import { motion } from 'framer-motion';
import { Briefcase, GraduationCap,} from 'lucide-react';
import { timeline } from '../../../data/timeline';
import { SectionHeading } from '../../ui/SectionHeading';
import { GlassCard } from '../../ui/GlassCard';

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title=""
          description="I'm a Computer Science student passionate about software engineering and building modern web applications. I enjoy solving real-world problems through clean architecture, maintainable code, and thoughtful software design.I enjoy building reliable and maintainable software that solves real-world problems."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          {/* Bio + highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8">
              <p className="text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                I believe software should be easy to understand, maintain, and extend. Rather than only making features work, I focus on writing clean, structured code and designing systems that remain reliable as they grow.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                My foundation includes Object-Oriented Programming, the SOLID principles, MVC architecture, Repository and Service patterns, relational database design.
              </p>

          
            </GlassCard>
          </motion.div>

          {/* Timeline */}
          <div className="lg:col-span-3">
            <ol className="relative space-y-8 border-l border-black/10 dark:border-white/10 pl-8">
              {timeline.map((entry, i) => (
                <motion.li
                  key={entry.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <span
                    className={`absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full glass-strong ${
                      entry.type === 'work'
                        ? 'text-dark-primary dark:text-dark-accent'
                        : 'text-dark-secondary'
                    }`}
                  >
                    {entry.type === 'work' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                  </span>

                  <GlassCard className="p-5" hover>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-base font-semibold text-light-text dark:text-dark-text">
                        {entry.title}
                      </h3>
                      <span className="font-mono text-xs text-dark-primary dark:text-dark-accent">
                        {entry.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-light-muted dark:text-dark-muted">{entry.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-light-muted dark:text-dark-muted">
                      {entry.description}
                    </p>
                  </GlassCard>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
