
import { Github, ExternalLink, TrendingUp, Eye, Wifi, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Time Series Analysis Project',
      description: 'Advanced forecasting system using ARIMA and Matplotlib with 85%+ accuracy on real-time datasets. Built comprehensive data visualization and prediction models.',
      tech: ['Python', 'ARIMA', 'Matplotlib', 'Pandas'],
      icon: <TrendingUp className="w-8 h-8 text-neon-blue" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
      github: 'https://github.com/krishmali-7171',
      live: '#'
    },
    {
      title: 'Crime Scan',
      description: 'Real-time criminal detection system using OpenCV and Tkinter. Features facial recognition, database integration, and live monitoring capabilities.',
      tech: ['Python', 'OpenCV', 'Tkinter', 'Machine Learning'],
      icon: <Eye className="w-8 h-8 text-neon-purple" />,
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=300&fit=crop',
      github: 'https://github.com/krishmali-7171',
      live: '#'
    },
    {
      title: 'WiFi-Based Metal Detector',
      description: 'IoT system using Arduino with live monitoring capabilities. Innovative approach to metal detection using WiFi signal analysis and real-time data transmission.',
      tech: ['Arduino', 'IoT', 'C++', 'WiFi Modules'],
      icon: <Wifi className="w-8 h-8 text-neon-blue" />,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop',
      github: 'https://github.com/krishmali-7171',
      live: '#'
    },
    {
      title: 'Weather Web App',
      description: 'Modern weather application with 3D UI elements. Fetches real-time weather data via OpenWeather API with beautiful visualizations and forecasting.',
      tech: ['JavaScript', 'HTML/CSS', 'OpenWeather API', '3D CSS'],
      icon: <Cloud className="w-8 h-8 text-neon-purple" />,
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop',
      github: 'https://github.com/krishmali-7171',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            A showcase of innovative projects demonstrating expertise in web development, 
            AI/ML, and IoT technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-2 glass rounded-lg">
                    {project.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 gradient-text">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full border border-neon-blue/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    className="bg-neon-blue/20 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/30 flex items-center space-x-2"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neon-purple/30 text-neon-purple hover:bg-neon-purple/20 flex items-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://github.com/krishmali-7171', '_blank')}
            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white px-8 py-3 rounded-full"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
