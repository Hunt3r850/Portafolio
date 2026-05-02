import React from 'react' // eslint-disable-line @typescript-eslint/no-unused-vars;
import { useLanguage } from '../contexts/LanguageContext';

export function SocialLinks() {
  const { t } = useLanguage();

  return (
    <section className="social-section">
      <div className="section-container">
        <h2 className="section-title">{t.social.title}</h2>
        <p className="section-description">{t.social.description}</p>
        <div className="social-grid">
          {t.social.platforms.map((platform: any, index: number) => (
            <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className="social-card">
              <div className="social-icon">{platform.icon}</div>
              <h3>{platform.name}</h3>
              <p>{platform.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
