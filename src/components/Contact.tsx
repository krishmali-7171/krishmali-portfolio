
import { useState } from 'react';
import { Mail, Github, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'krishmali7171@gmail.com',
      href: 'mailto:krishmali7171@gmail.com'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/krishmali-7171',
      href: 'https://github.com/krishmali-7171'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'MIT ADT University, Pune',
      href: '#'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Available',
      value: 'Mon - Fri, 9AM - 6PM',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-8 gradient-text">
              Let's Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={info.label} className="flex items-center space-x-4 glass p-4 rounded-lg hover-lift">
                  <div className="p-2 bg-neon-blue/20 rounded-lg text-neon-blue">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{info.label}</p>
                    {info.href && info.href !== '#' ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground/70 hover:text-neon-blue transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground/70">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass p-6 rounded-2xl">
              <h4 className="font-semibold mb-4 gradient-text">Why Work With Me?</h4>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  Fresh perspective and innovative solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                  Modern tech stack and best practices
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                  Dedicated to quality and timely delivery
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                  Continuous learning and adaptation
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Send Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="glass border-white/20 focus:border-neon-blue/50 bg-background/20"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="glass border-white/20 focus:border-neon-blue/50 bg-background/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-white/20 focus:border-neon-blue/50 bg-background/20 resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover-lift disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send size={18} />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
