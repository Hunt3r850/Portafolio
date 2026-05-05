import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 px-4 bg-black text-green-400 font-mono relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glitch-effect" data-text={t.about.title}>{t.about.title}</h2>
        
        <div className="terminal-window p-8 mb-12">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="terminal-title">about.sh</span>
          </div>
          <div className="terminal-content">
            <p className="text-lg leading-relaxed mb-6">{t.about.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
              {Object.entries(t.about.stats).map(([key, value]) => (
                <div key={key} className="stat-card p-6 border border-green-700 rounded-lg shadow-lg bg-gray-900 bg-opacity-50 hover:shadow-green-500/50 transition-all duration-300">
                  <p className="text-5xl font-bold text-cyan-400 mb-2 animate-pulse">{value}</p>
                  <p className="text-sm uppercase tracking-wider text-green-300">{key}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="terminal-window p-8 mb-12">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="terminal-title">skills.sh</span>
          </div>
          <div className="terminal-content">
            <h3 className="text-3xl font-bold mb-8 text-center glitch-effect" data-text={t.skills.title}>{t.skills.title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-cyan-400">Habilidades Técnicas</h4>
                <div className="space-y-6">
                  {t.skills.technical.map((skill: any) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg">{skill.name}</span>
                        <span className="text-sm text-green-300">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-semibold mb-6 text-cyan-400">Habilidades Blandas</h4>
                <ul className="list-disc list-inside space-y-2 text-lg mb-8">
                  {t.skills.soft.map((skill: string) => (
                    <li key={skill} className="hover:text-cyan-400 transition-colors duration-200">{skill}</li>
                  ))}
                </ul>
                <h4 className="text-2xl font-semibold mb-6 text-cyan-400">Idiomas</h4>
                <ul className="list-disc list-inside space-y-2 text-lg">
                  {t.skills.languages.map((lang: any) => (
                    <li key={lang.name} className="hover:text-cyan-400 transition-colors duration-200">{lang.name} ({lang.level})</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
