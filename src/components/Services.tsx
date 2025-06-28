
import { Globe, Smartphone, Lightbulb, Code, Palette, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Modern, responsive websites built with HTML, CSS, JavaScript, and React. Clean code, fast performance, and pixel-perfect designs.',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimized', 'Fast Loading']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring your website looks perfect on all devices. From smartphones to desktops, seamless user experience.',
      features: ['Mobile-First', 'Cross-Browser', 'Touch Friendly', 'Performance Optimized']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Smart Applications',
      description: 'AI-powered applications using Python and machine learning. Intelligent systems that solve real-world problems with innovative solutions.',
      features: ['AI/ML Integration', 'Data Analysis', 'Automation', 'Predictive Models']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Custom Development',
      description: 'Tailored solutions built to your specific requirements. From simple scripts to complex systems, bringing your ideas to life.',
      features: ['Custom Solutions', 'API Integration', 'Database Design', 'Scalable Architecture']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design approach focusing on intuitive interfaces and engaging user experiences. Beautiful and functional designs.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Speed up your applications with advanced optimization techniques. Better performance means better user engagement.',
      features: ['Code Optimization', 'Image Compression', 'Caching Strategies', 'Load Time Reduction']
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in">
            Services I Offer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your needs. From concept to deployment, 
            I deliver high-quality work that exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass p-8 rounded-2xl hover-lift animate-fade-in group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="p-3 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-lg w-fit mb-6 text-neon-blue group-hover:text-neon-purple transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {service.title}
                </h3>

                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground/60">
                      <div className="w-1.5 h-1.5 bg-neon-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Start Your Project?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-md">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology 
              and innovative solutions.
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
