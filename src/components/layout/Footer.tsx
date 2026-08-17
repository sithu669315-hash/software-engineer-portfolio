import { motion } from "framer-motion";
import { ArrowUp, Github, Mail } from "lucide-react";
import { navLinks } from "../../data/navigation";
import { scrollToId } from "../../utils/scroll";

const socials = [
  { icon: Github, href: "https://github.com/sithu669315-hash", label: "GitHub" },
  //{ icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  //{ icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:sithu669315@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-black/5 dark:border-white/5 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <button
            onClick={() => scrollToId("home")}
            className="font-display text-xl font-bold text-light-text dark:text-dark-text"
          >
            SiSi<span className="text-gradient">.dev</span>
          </button>
          <p className="mt-2 max-w-xs text-sm text-light-muted dark:text-dark-muted">
            Building the maintainable, scalable, usable, clean Software
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToId(link.id)}
              className="text-sm text-light-text/70 dark:text-dark-muted transition-colors hover:text-dark-primary dark:hover:text-dark-accent"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-light-text/70 dark:text-dark-muted transition-colors hover:text-dark-primary dark:hover:text-dark-accent"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col-reverse items-center gap-4 border-t border-black/5 dark:border-white/5 pt-6 text-xs text-light-muted dark:text-dark-muted md:flex-row md:justify-between">
        <p>
          © {new Date().getFullYear()} Si Thu Hein Htet. All rights reserved.
        </p>
        <motion.button
          onClick={() => scrollToId("home")}
          whileHover={{ y: -3 }}
          className="flex items-center gap-2 rounded-full glass px-4 py-2 text-light-text/80 dark:text-dark-muted"
        >
          Back to top <ArrowUp size={12} />
        </motion.button>
      </div>
    </footer>
  );
}
