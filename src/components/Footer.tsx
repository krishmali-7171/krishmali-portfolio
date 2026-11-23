
import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/80 border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <div className="mb-6">
            <h3 className="font-orbitron font-bold text-2xl gradient-text">
              Krish Mali
            </h3>
            <p className="text-foreground/60 mt-2">
              Web Developer | AI Enthusiast | Student at MIT ADT
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/krishmali-7171"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-neon-blue/20 transition-all duration-300 hover-lift group"
            >
              <Github className="w-5 h-5 text-foreground/60 group-hover:text-neon-blue" />
            </a>
            <a
              href="mailto:krishmali7171@gmail.com"
              className="p-3 glass rounded-full hover:bg-neon-purple/20 transition-all duration-300 hover-lift group"
            >
              <Mail className="w-5 h-5 text-foreground/60 group-hover:text-neon-purple" />
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Services', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const element = document.querySelector(`#${item.toLowerCase()}`);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-foreground/60 hover:text-neon-blue transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-foreground/60 flex items-center justify-center gap-2 text-sm">
              © {currentYear} Krish Shirishkumar Mali. Made with
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              and lots of code.
            </p>
            <p className="text-foreground/40 text-xs mt-2">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
