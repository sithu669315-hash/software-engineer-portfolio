import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { scrollToId } from "../../../utils/scroll";
import { Button } from "../../ui/Button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20 md:pt-24"
    >
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-dark-primary/25 blur-[120px] dark:bg-dark-primary/30" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-dark-accent/20 blur-[100px]" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-dark-secondary/20 blur-[100px]" />
      </div>

      <div className="mx-auto grid max-w-6xl w-full items-center gap-16 md:grid-cols-2">
        {/* LEFT — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="eyebrow flex items-center gap-2 text-dark-primary dark:text-dark-accent font-bold"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-dark-accent opacity-75" />
              <span className="relative inline-flex h-2 w-4 rounded-full bg-dark-accent " />
            </span>
            Open to Junior Software Engineer Opportunities
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-2xl font-bold leading-[1.05] tracking-tight text-light-text dark:text-dark-text sm:text-4xl lg:text-2xl"
          >
            Hi, I&apos;m Si Thu Hein Htet
            <br />
            <span className="text-gradient">Aspiring Junior Software Engineer</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-lg text-base leading-relaxed text-light-muted dark:text-dark-muted sm:text-sm"
          >
       I'm a Computer Science student passionate about building reliable, maintainable, and scalable web applications.
        </motion.p>

         <motion.p
            variants={item}
            className="mt-4 max-w-lg text-base leading-relaxed text-light-muted dark:text-dark-muted sm:text-sm"
          >
       I apply Object-Oriented Programming, SOLID principles, MVC architecture, and clean coding practices to develop well-structured software that solves real-world problems.
        </motion.p>

        <motion.p
            variants={item}
            className="mt-4 max-w-lg text-base leading-relaxed text-light-muted dark:text-dark-muted sm:text-sm"
          >
       I'm continuously improving my software engineering skills and eager to contribute to meaningful projects while growing as a professional Software Engineer.
        </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            <Button
              variant="primary"
              onClick={() => scrollToId("projects")}
              icon={<ArrowRight size={16} />}
            >
              Explore My Projects
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToId("contact")}
              icon={<Mail size={16} />}
            >
              Let's Connect
            </Button>
            <Button
              as="a"
              href="/public/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              icon={<Download size={14} />}
            >
              Resume
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-8">
            {[
              ["5+", "Years experience"],
              ["12+", "Personal Projects"],
              ["12", "Teams collaborated with"],
            ].map(([stat, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-bold text-light-text dark:text-dark-text">
                  {stat}
                </p>
                <p className="text-xs text-light-muted dark:text-dark-muted">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — photo in glass "window" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm md:max-w-"
        >
          {/* Floating abstract blobs behind photo */}
          <div aria-hidden className="absolute -inset-10 -z-10">
            <div className="absolute left-0 top-0 h-56 w-56 animate-blob bg-gradient-to-br from-dark-primary/40 to-dark-secondary/30 blur-1xl" />
            <div className="absolute bottom-0 right-0 h-48 w-48 animate-blob bg-gradient-to-br from-dark-accent/30 to-dark-primary/20 blur-2xl [animation-delay:2s]" />
          </div>

          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="animate-float"
          >
            <div className="glass-strong overflow-hidden rounded-[2rem] p-3 shadow-glass-light dark:shadow-glass-dark">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 px-q pb-3 pt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src="/public/porttofio.png"
                  alt="Portrait of Si Si"
                  className="h-full w-full object-cover transition-transform duration-700 ease-premium hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Floating terminal-status chip — signature element */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="glass-strong absolute -bottom-6 -left-6 flex items-center gap-2 rounded-2xl px-4 py-3 font-mono text-xs shadow-glass-light dark:shadow-glass-dark"
          >
            <span className="text-dark-primary dark:text-dark-accent">$</span>
            <span className="text-light-text dark:text-dark-text">
              status --learning
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="glass-strong absolute -top-6 -right-4 flex flex-col rounded-2xl px-4 py-3 shadow-glass-light dark:shadow-glass-dark"
          >
            <span className="font-display text-sm font-bold text-light-text dark:text-dark-text">
              Junior
            </span>
            <span className="text-[10px] text-light-muted dark:text-dark-muted">
              Developer
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
