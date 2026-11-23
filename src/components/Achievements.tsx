import { FileText, Download, ExternalLink, Award, Sparkles, Brain, CheckCircle2, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Achievements = () => {
  const paperStats = [
    { label: 'Relevance Score', value: '92%', change: '+41.5% vs conventional' },
    { label: 'Placement Success', value: '+33%', change: 'Higher selection rate' },
    { label: 'Student Anxiety', value: '-42%', change: 'Reduction in test stress' },
    { label: 'Confidence Score', value: '4.1/5', change: '+46.4% improvement' },
  ];

  const highlights = [
    'Curriculum-coverage constrained Item Response Theory (IRT) model preventing out-of-syllabus questions',
    'Fine-tuned transformer architecture for generating industry-standard, pedagogically sound questions',
    'LSTM neural network modeling individual learning velocity, forgetting curves, and concept retention',
    'Real-time multi-objective optimization balancing skill acquisition while minimizing student burnout',
  ];

  const additionalAchievements = [
    {
      title: 'Academic Excellence in Computer Science',
      institution: 'MIT ADT University',
      timeline: '2023 - 2027',
      description: 'Pursuing B.Tech in CSE with specialization in AI/ML and full-stack software development.',
      icon: <Award className="w-6 h-6 text-neon-blue" />,
    },
    {
      title: 'Web Development Internship',
      institution: 'Prodigy InfoTech',
      timeline: '2024',
      description: 'Developed responsive, high-performance web applications and engineered user-focused digital solutions.',
      icon: <Sparkles className="w-6 h-6 text-neon-purple" />,
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-background/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="glass border-neon-blue/30 text-neon-blue bg-neon-blue/10 px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Milestones & Research
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text animate-fade-in">
            Achievements & Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Highlighting academic research contributions, published work, and key milestones in AI and computer engineering.
          </p>
        </div>

        {/* Featured Research Paper Card */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-12 border border-neon-blue/30 relative overflow-hidden hover-lift shadow-2xl">
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 bg-neon-blue/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge className="bg-neon-blue/20 text-neon-blue border border-neon-blue/40 px-3 py-1 text-sm font-semibold flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              Research Paper
            </Badge>
            <Badge className="bg-neon-purple/20 text-neon-purple border border-neon-purple/40 px-3 py-1 text-sm font-semibold flex items-center gap-1.5">
              <Brain className="w-4 h-4" />
              Artificial Intelligence & EdTech
            </Badge>
            <Badge variant="outline" className="text-foreground/70 border-white/20 text-xs">
              Primary Author
            </Badge>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
                AI-Powered Academic-Progress-Aligned Assessment Platform
              </h3>
              <p className="text-neon-blue font-medium text-lg">
                A Novel Approach to Personalized Student Evaluation and Placement Preparation
              </p>

              <p className="text-foreground/75 leading-relaxed text-base">
                Addresses fundamental flaws in contemporary campus assessment platforms (AMCAT, CoCubes, TalentBattle)
                that evaluate students through generic, rigid question banks. Proposes an intelligent, adaptive platform
                that synchronizes with actual curriculum progression, utilizing transformer models for targeted question synthesis
                and recurrent neural networks to calibrate learning velocity while preventing test anxiety.
              </p>

              {/* Research Highlights */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-sm uppercase tracking-wider text-neon-purple font-semibold">Key Innovations:</h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-foreground/80 glass p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-neon-blue shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={`${import.meta.env.BASE_URL}ai_assessment_platform_paper.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/80 hover:to-neon-purple/80 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover-lift"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read Full Paper
                  </Button>
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}ai_assessment_platform_paper.pdf`}
                  download="AI_Assessment_Platform_Research_Paper.pdf"
                  className="inline-flex"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-neon-blue/40 text-neon-blue hover:bg-neon-blue/10 px-6 py-3 rounded-full flex items-center gap-2 glass"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </a>
              </div>
            </div>

            {/* Empirical Results & Metrics */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <div className="flex items-center gap-2 mb-4 text-neon-purple">
                  <BarChart3 className="w-5 h-5" />
                  <h4 className="font-semibold uppercase tracking-wider text-xs">
                    Empirical Experimental Results
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {paperStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-neon-blue/30 transition-colors"
                    >
                      <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-foreground/90 mb-1">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-neon-blue/80">
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 p-4 rounded-xl bg-neon-blue/5 border border-neon-blue/20 text-xs text-foreground/70 leading-relaxed">
                  <strong className="text-neon-blue block mb-1">Research Conclusion:</strong>
                  Testing validated that curriculum-synchronized AI assessment led to 33% higher success in industry hiring tests and reduced concept mastery time by 28%.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {additionalAchievements.map((item, index) => (
            <div
              key={item.title}
              className="glass p-6 rounded-2xl border border-white/10 hover-lift flex items-start gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-3 glass rounded-xl bg-white/[0.02] border border-white/10 shrink-0">
                {item.icon}
              </div>
              <div>
                <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                  <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
                  <Badge variant="outline" className="text-xs border-neon-blue/30 text-neon-blue">
                    {item.timeline}
                  </Badge>
                </div>
                <div className="text-sm text-neon-purple mb-2 font-medium">{item.institution}</div>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

