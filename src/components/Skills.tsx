
const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95, icon: '🌐' },
    { name: 'CSS', level: 90, icon: '🎨' },
    { name: 'JavaScript', level: 85, icon: '⚡' },
    { name: 'Python', level: 88, icon: '🐍' },
    { name: 'Java', level: 80, icon: '☕' },
    { name: 'Responsive Design', level: 92, icon: '📱' },
    { name: 'AI/ML Basics', level: 75, icon: '🤖' },
    { name: 'React', level: 82, icon: '⚛️' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass p-6 rounded-xl hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{skill.name}</h3>
              </div>

              {/* Progress Circle */}
              <div className="relative w-24 h-24 mx-auto">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/20"
                    strokeWidth="3"
                    fill="none"
                    stroke="currentColor"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-neon-blue"
                    strokeWidth="3"
                    strokeDasharray={`${skill.level}, 100`}
                    strokeLinecap="round"
                    fill="none"
                    stroke="currentColor"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-neon-blue">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
