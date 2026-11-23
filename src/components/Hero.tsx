
import { ArrowDown, Github, Mail, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-neon-pink/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating UI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Badge - Top Left */}
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <Badge className="glass border-neon-blue/30 text-neon-blue bg-neon-blue/10 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Available for Work
          </Badge>
        </div>

        {/* Floating Badge - Top Right */}
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1.5s' }}>
          <Badge className="glass border-neon-purple/30 text-neon-purple bg-neon-purple/10 px-4 py-2">
            <Code className="w-4 h-4 mr-2" />
            Web Developer
          </Badge>
        </div>

        {/* Floating Badge - Bottom Left */}
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2.5s' }}>
          <Badge className="glass border-neon-pink/30 text-neon-pink bg-neon-pink/10 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            AI Enthusiast
          </Badge>
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-1/4 w-6 h-6 border-2 border-neon-blue/30 rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-neon-purple/20 rounded-full animate-float" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-1/2 left-1/5 w-8 h-1 bg-gradient-to-r from-neon-blue/40 to-transparent animate-float" style={{ animationDelay: '2.2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Enhanced Profile Section */}
        <div className="mb-12 animate-fade-in">
          <div className="relative inline-block">
            {/* Profile Image with enhanced styling */}
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden neon-border animate-glow relative">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Krish Mali"
                className="w-full h-full object-cover object-top"
              />
              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
            </div>
            
            {/* Floating achievement badges around profile */}
            <div className="absolute -top-4 -right-8 animate-float" style={{ animationDelay: '0.8s' }}>
              <div className="glass rounded-full p-3 border border-neon-blue/20">
                <div className="text-neon-blue text-xs font-semibold">2027</div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -left-8 animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="glass rounded-full p-3 border border-neon-purple/20">
                <div className="text-neon-purple text-xs font-semibold">MIT ADT</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Hero Text */}
        <div className="animate-fade-in space-y-6" style={{ animationDelay: '0.2s' }}>
          {/* Welcome message */}
          <div className="inline-flex items-center glass rounded-full px-4 py-2 border border-white/10 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-sm text-foreground/80">Welcome to my portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight">
            Krish Shirishkumar Mali
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="outline" className="text-lg px-6 py-2 border-neon-blue/30 text-neon-blue">
              Web Developer
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2 border-neon-purple/30 text-neon-purple">
              AI Enthusiast
            </Badge>
            <Badge variant="outline" className="text-lg px-6 py-2 border-neon-pink/30 text-neon-pink">
              MIT ADT Student
            </Badge>
          </div>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate Computer Science Engineering student crafting innovative web applications 
            and intelligent systems with modern technologies.
          </p>
        </div>

        {/* Enhanced CTA Section */}
        <div className="animate-fade-in space-y-8" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover-lift text-lg shadow-2xl"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              View My Work
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="border-2 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 px-10 py-4 rounded-full transition-all duration-300 hover-lift text-lg glass"
            >
              About Me
            </Button>
          </div>

          {/* Social Links with enhanced styling */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/krishmali-7171"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="p-4 glass rounded-full border border-white/10 hover:border-neon-blue/50 transition-all duration-300 hover-lift">
                <Github className="w-6 h-6 text-foreground/60 group-hover:text-neon-blue transition-colors duration-300" />
              </div>
            </a>
            <a
              href="mailto:krishmali7171@gmail.com"
              className="group relative"
            >
              <div className="p-4 glass rounded-full border border-white/10 hover:border-neon-purple/50 transition-all duration-300 hover-lift">
                <Mail className="w-6 h-6 text-foreground/60 group-hover:text-neon-purple transition-colors duration-300" />
              </div>
            </a>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-2 text-foreground/40 hover:text-neon-blue transition-all duration-300"
          >
            <span className="text-sm font-medium tracking-wider uppercase">Scroll Down</span>
            <div className="animate-bounce">
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
