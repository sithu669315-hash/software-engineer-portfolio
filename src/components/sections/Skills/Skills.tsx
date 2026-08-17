import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories, skills } from '../../../data/skills';
import { SectionHeading } from '../../ui/SectionHeading';
import { GlassCard } from '../../ui/GlassCard';

export function Skills() {
  const [active, setActive] = useState<(typeof skillCategories)[number] | 'All'>('All');

  const filtered = useMemo(
    () => (active === 'All' ? skills : skills.filter((s) => s.category === active)),
    [active],
  );

  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title=""
          description=""
        />

        <div className="mb-10 flex flex-wrap gap-2">
          {(['All', ...skillCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                active === cat
                  ? 'bg-gradient-to-r from-dark-primary to-dark-secondary text-white shadow-glow-purple'
                  : 'glass text-light-text/70 dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard className="group p-5" hover>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-dark-primary/10 text-dark-primary dark:text-dark-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-light-text dark:text-dark-text">{skill.name}</p>
                      <p className="text-[11px] text-light-muted dark:text-dark-muted">{skill.category}</p>
                    </div>
                  </div>

                  <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-dark-primary to-dark-accent"
                    />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
