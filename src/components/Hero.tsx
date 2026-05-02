import React from 'react' // eslint-disable-line @typescript-eslint/no-unused-vars;
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="btn-red"></span>
            <span className="btn-yellow"></span>
            <span className="btn-green"></span>
          </div>
          <span className="terminal-title">root@ahmed-portfolio:~$</span>
        </div>
        <div className="hero-text">
          <h1 className="hero-name">{t.hero.name}</h1>
          <p className="hero-title">{t.hero.title}</p>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-status">
            <span className="status-indicator"></span>
            <span>{t.hero.status}</span>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Portafolio/ahmed-hacker-profile.png" alt="Ahmed" className="profile-img" />
        </div>
      </div>
    </section>
  );
}
