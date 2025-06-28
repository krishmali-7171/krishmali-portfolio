
import { ArrowDown, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden neon-border animate-glow">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Krish Mali"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
            Krish Shirishkumar Mali
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-light">
            Web Developer | AI Enthusiast | Student at MIT ADT
          </p>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
            Passionate Computer Science Engineering student crafting innovative web applications 
            and intelligent systems with modern technologies.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover-lift"
          >
            View My Work
          </Button>
          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-8 py-3 rounded-full transition-all duration-300"
          >
            About Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://github.com/krishmali-7171"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-neon-blue transition-colors duration-300 hover-lift"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:krishmali7171@gmail.com"
            className="text-foreground/60 hover:text-neon-blue transition-colors duration-300 hover-lift"
          >
            <Mail size={28} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-foreground/40 hover:text-neon-blue transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
