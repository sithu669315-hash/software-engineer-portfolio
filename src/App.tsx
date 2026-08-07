import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Skills } from './components/sections/Skills/Skills';
import { Projects } from './components/sections/Projects/Projects';
import { Contact } from './components/sections/Contact/Contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-light-bg text-light-text transition-colors duration-500 dark:bg-dark-bg dark:text-dark-text">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-full focus:bg-dark-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
