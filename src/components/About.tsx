
import { GraduationCap, Briefcase, Code, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              I'm <span className="text-neon-blue font-semibold">Krish Shirishkumar Mali</span>, 
              a passionate Computer Science Engineering student from MIT ADT University with a keen 
              interest in building interactive and intelligent web applications.
            </p>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science Engineering, I combine academic 
              excellence with practical experience through my internship at Prodigy InfoTech. 
              My expertise spans web development, AI/ML, and creating innovative solutions that 
              bridge technology and user experience.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 glass p-4 rounded-lg hover-lift">
                <div className="p-2 bg-neon-blue/20 rounded-lg">
                  <GraduationCap className="text-neon-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-foreground/70 text-sm">B.Tech CSE, MIT ADT University • Class of 2027</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 glass p-4 rounded-lg hover-lift">
                <div className="p-2 bg-neon-purple/20 rounded-lg">
                  <Briefcase className="text-neon-purple" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Current Role</h3>
                  <p className="text-foreground/70 text-sm">Web Development Intern at Prodigy InfoTech</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 glass p-4 rounded-lg hover-lift">
                <div className="p-2 bg-neon-blue/20 rounded-lg">
                  <Code className="text-neon-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Specialization</h3>
                  <p className="text-foreground/70 text-sm">Front-end Development, AI/ML, Python-based Systems</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 glass p-4 rounded-lg hover-lift">
                <div className="p-2 bg-neon-purple/20 rounded-lg">
                  <FileText className="text-neon-purple" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Research & Publications</h3>
                  <p className="text-foreground/70 text-sm">AI-Powered Adaptive Assessment Platform (Paper Published)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="glass rounded-2xl p-8 hover-lift">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                  alt="Web Development"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-xl font-semibold mb-2 gradient-text">
                    Building the Future
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    Combining creativity with technology to create impactful digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
