import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('about.stats.experience'), value: '18+' },
    { label: t('about.stats.projects'), value: '50+' },
    { label: t('about.stats.certifications'), value: '20+' },
  ];

  return (
    <section id="about" className="py-16 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 font-mono mb-4">
            <span className="text-cyan-400">&gt;</span> {t('about.title')}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Description */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <div className="terminal-title">profile.md</div>
            </div>
            <div className="terminal-content text-green-400 leading-relaxed">
              <p className="mb-4">{t('about.description')}</p>
              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Cybersecurity Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Network Administrator</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Ethical Hacker</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">✓</span>
                  <span>IT Auditor</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div key={index} className="terminal-window">
                <div className="terminal-content">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-green-400 font-mono">{stat.label}</span>
                    <span className="text-cyan-400 text-2xl font-bold">{stat.value}</span>
                  </div>
                  <div className="h-2 bg-black border border-green-400/30 rounded overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Preview */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <div className="terminal-title">technical_skills.sh</div>
            </div>
            <div className="terminal-content space-y-2 text-sm">
              {[
                'Network Administration',
                'Ethical Hacking',
                'Cybersecurity',
                'System Auditing',
                'Penetration Testing',
              ].map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-cyan-400">→</span>
                  <span className="text-green-400">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <div className="terminal-title">certifications.txt</div>
            </div>
            <div className="terminal-content space-y-2 text-sm">
              {[
                'CAPT (Hackviser)',
                'CRTOM (Red Team)',
                'CPPS (Phishing)',
                'Ethical Hacking',
                'AWS Practitioner',
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-yellow-400">◆</span>
                  <span className="text-green-400">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <div className="terminal-dot red"></div>
                <div className="terminal-dot yellow"></div>
                <div className="terminal-dot green"></div>
              </div>
              <div className="terminal-title">languages.conf</div>
            </div>
            <div className="terminal-content space-y-2 text-sm">
              {[
                { lang: 'Spanish', level: 'Native' },
                { lang: 'English', level: 'B2' },
                { lang: 'Italian', level: 'B2' },
                { lang: 'German', level: 'A1' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="text-green-400">{item.lang}</span>
                  <span className="text-cyan-400 text-xs">{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
