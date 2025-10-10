import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Shield, Network, Database, Globe, Users, Briefcase, Award, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const [skillProgress, setSkillProgress] = useState<number[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const skills = [
    { name: t('skills.technical.0'), level: 95, icon: Network }, // Administración de Redes
    { name: t('skills.technical.1'), level: 90, icon: Shield }, // Técnicas de Hacking Ético
    { name: t('skills.technical.2'), level: 88, icon: Briefcase }, // Auditoría Contable-Financiera
    { name: t('skills.technical.3'), level: 85, icon: Globe }, // Implementación de Políticas
    { name: t('skills.technical.4'), level: 87, icon: Database }, // Procesamiento Multimedia
    { name: t('skills.technical.5'), level: 92, icon: Shield }, // Ciberseguridad
  ];

  const stats = [
    {
      number: '18+',
      label: t('about.yearsExperience'),
      icon: Calendar,
    },
    {
      number: '50+',
      label: t('about.projectsCompleted'),
      icon: Briefcase,
    },
    {
      number: '15+',
      label: t('about.certifications'),
      icon: Award,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill progress bars
            const progressBars = Array.from({ length: skills.length }, (_, i) => skills[i].level);
            setSkillProgress(progressBars);
            
            // Animate visible items
            const items = Array.from({ length: stats.length }, () => true);
            setVisibleItems(items);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, [skills.length, stats.length]);

  return (
    <section id="about" className="py-24 bg-black/95 relative">
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/90 to-black/80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text font-futuristic">
            {t('about.heading')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto mb-8 rounded-full shadow-lg" />
          <p className="text-xl text-green-300 max-w-3xl mx-auto leading-relaxed font-mono bg-black/50 p-6 rounded-lg border border-green-400/30">
            {t('about.content')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`terminal-window p-8 text-center hover:shadow-lg transition-all duration-300 ${
                visibleItems[index] ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-black" />
                </div>
              </div>
              <div className="text-4xl font-bold text-green-400 mb-2 font-mono">{stat.number}</div>
              <div className="text-green-300 font-medium font-mono">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="terminal-window p-6">
            <h3 className="text-3xl font-bold mb-8 neon-text font-futuristic">{t('skills.technicalSkills')}</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                        <skill.icon className="h-4 w-4 text-black" />
                      </div>
                      <span className="font-medium text-green-300 font-mono">{skill.name}</span>
                    </div>
                    <span className="text-sm text-cyan-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="hacker-progress">
                    <div 
                      className="hacker-progress-bar"
                      style={{ width: `${skillProgress[index] || 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="terminal-window p-6">
              <h3 className="text-3xl font-bold mb-8 neon-text font-futuristic">{t('skills.softSkills')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {t('skills.soft').map((skill: string, index: number) => (
                  <div
                    key={index}
                    className="p-3 text-center bg-black/50 border border-green-400/30 rounded text-green-300 font-mono hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="terminal-window p-6">
              <h4 className="text-xl font-semibold mb-4 text-green-400 font-futuristic">{t('languages.heading')}</h4>
              <div className="space-y-3">
                {t('languages.list').map((lang: any, index: number) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-black/50 rounded-lg border border-green-400/30">
                    <span className="font-medium text-green-300 font-mono">{lang.language}</span>
                    <span className="text-cyan-400 font-mono text-sm border border-cyan-400/50 px-2 py-1 rounded">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

