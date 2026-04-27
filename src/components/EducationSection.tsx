import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const EducationSection: React.FC = () => {
  const { t } = useLanguage();

  const certifications: any[] = (t('education.certifications') as unknown as any[]) || [];

  return (
    <section id="education" className="py-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 font-mono mb-4">
            <span className="text-cyan-400">&gt;</span> {t('education.title')}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="terminal-window group hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
            >
              <div className="terminal-header">
                <div className="terminal-dots">
                  <div className="terminal-dot red"></div>
                  <div className="terminal-dot yellow"></div>
                  <div className="terminal-dot green"></div>
                </div>
                <div className="terminal-title">cert_{index + 1}.txt</div>
              </div>

              <div className="terminal-content">
                {/* Certificate Title */}
                <h3 className="text-cyan-400 font-mono font-bold text-lg mb-2 group-hover:text-green-400 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-400">◆</span>
                  <span className="text-green-400 text-sm">{cert.issuer}</span>
                </div>

                {/* Location (if available) */}
                {cert.location && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-yellow-400">📍</span>
                    <span className="text-green-400 text-sm">{cert.location}</span>
                  </div>
                )}

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-green-400/30">
                  <span className="text-cyan-400">→</span>
                  <span className="text-green-400/70 text-sm">{cert.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-12 terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <div className="terminal-title">certification_stats.log</div>
          </div>

          <div className="terminal-content">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">20+</div>
                <div className="text-green-400 text-sm">Total Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">5+</div>
                <div className="text-green-400 text-sm">Security Certs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">8+</div>
                <div className="text-green-400 text-sm">Professional Certs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">2026</div>
                <div className="text-green-400 text-sm">Latest Update</div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-12 terminal-window">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <div className="terminal-title">learning_path.md</div>
          </div>

          <div className="terminal-content space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">2001-2007</span>
              <div>
                <p className="text-green-400 font-mono">Bachelor's Degree - Mathematics-Computer Science</p>
                <p className="text-green-400/70 text-sm">Instituto Superior Enrique José Varona, Havana</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">2007-2019</span>
              <div>
                <p className="text-green-400 font-mono">Professional Development - IT & Security</p>
                <p className="text-green-400/70 text-sm">Multiple institutions and organizations</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold">2023-2026</span>
              <div>
                <p className="text-green-400 font-mono">Advanced Security Certifications</p>
                <p className="text-green-400/70 text-sm">Ethical Hacking, Red Team Operations, Penetration Testing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
