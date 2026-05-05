import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="py-16 px-4 bg-black text-green-400 font-mono relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glitch-effect" data-text={t.certifications.title}>{t.certifications.title}</h2>
        
        <div className="terminal-window p-8">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="terminal-title">certifications.log</span>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.certifications.items.map((cert: any, index: number) => (
                <div key={index} className="cert-card p-6 border border-green-700 rounded-lg shadow-lg bg-gray-900 bg-opacity-50 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
                  <h4 className="text-xl font-bold text-cyan-400 mb-2">{cert.title}</h4>
                  <p className="text-md text-green-300 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-400">{cert.date} - {cert.type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
