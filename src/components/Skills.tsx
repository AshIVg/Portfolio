import React, { useEffect, useRef, useState } from 'react';
import SectionEffects from './SectionEffects';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
      ]
    },
    {
      title: 'Data Science & AI/ML',
      skills: [
        { name: 'SQL', level: 90 },
        { name: 'Pandas & NumPy', level: 85 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'TensorFlow', level: 75 },
      ]
    },
    {
      title: 'Data Visualization',
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Excel', level: 90 },
        { name: 'Tableau', level: 75 },
        { name: 'Matplotlib', level: 80 },
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Express.js', level: 80 },
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 section-cosmic-alt relative overflow-hidden">
      <SectionEffects sectionId="skills" effectType="skills" intensity="medium" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-orbitron text-glow-cyan">Skills & Expertise</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light font-exo">
            Here are the technologies and tools I use to analyze data, build applications, and create AI/ML solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="group card-cosmic rounded-lg p-8 transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-lg font-bold text-white mb-6 text-center tracking-tight font-orbitron">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between mb-3">
                      <span className="text-slate-300 font-medium text-sm group-hover/skill:text-white transition-colors duration-200 font-exo">
                        {skill.name}
                      </span>
                      <span className="text-slate-400 text-sm font-medium font-exo">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-cosmic h-3 rounded-full overflow-hidden">
                      <div
                        className="skill-progress-cosmic h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;