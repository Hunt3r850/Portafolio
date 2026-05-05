import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-16 px-4 bg-black text-green-400 font-mono relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glitch-effect" data-text={t.experience.title}>{t.experience.title}</h2>
        
        <div className="terminal-window p-8">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="terminal-title">experience.log</span>
          </div>
          <div className="terminal-content">
            <div className="relative border-l-2 border-green-700 ml-4 pl-8">
              {t.experience.items.map((item: any, index: number) => (
                <div key={index} className="mb-10 last:mb-0 relative">
                  <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-9 top-1 border-2 border-cyan-400 shadow-lg animate-pulse"></div>
                  <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-xl border border-green-700 hover:border-cyan-500 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-cyan-400 mb-2">{item.position}</h3>
                    <p className="text-lg text-green-300 mb-1">{item.company} - {item.location}</p>
                    <p className="text-sm text-gray-400 mb-4">{item.period}</p>
                    <p className="text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
