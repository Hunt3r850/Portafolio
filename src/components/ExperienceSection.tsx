import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: any[] = (t('experience.items') as unknown as any[]) || []

  return (
    <section id="experience" className="py-16 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 font-mono mb-4">
            <span className="text-cyan-400">&gt;</span> {t('experience.title')}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="terminal-window cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                </div>
                <div className="terminal-title">{exp.company}</div>
              </div>

              <div className="terminal-content">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                  <div>
                    <h3 className="text-cyan-400 font-mono font-bold text-lg">{exp.title}</h3>
                    <p className="text-green-400/70 text-sm">
                      <span className="text-yellow-400">{exp.location}</span>
                      {' | '}
                      <span className="text-yellow-400">{exp.period}</span>
                    </p>
                  </div>
                  <span className="text-cyan-400 text-xl">
                    {expandedIndex === index ? '▼' : '▶'}
                  </span>
                </div>

                {/* Description - Expandable */}
                {expandedIndex === index && (
                  <div className="mt-4 pt-4 border-t border-green-400/30 text-green-400 text-sm leading-relaxed animate-in fade-in duration-300">
                    {exp.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="terminal-window text-center">
            <div className="terminal-content">
              <div className="text-3xl font-bold text-cyan-400 mb-2">18+</div>
              <div className="text-green-400 text-sm">Years in IT</div>
            </div>
          </div>
          <div className="terminal-window text-center">
            <div className="terminal-content">
              <div className="text-3xl font-bold text-cyan-400 mb-2">7</div>
              <div className="text-green-400 text-sm">Positions Held</div>
            </div>
          </div>
          <div className="terminal-window text-center">
            <div className="terminal-content">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-green-400 text-sm">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
