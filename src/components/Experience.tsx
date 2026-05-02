import React from 'react' // eslint-disable-line @typescript-eslint/no-unused-vars;
import { useLanguage } from '../contexts/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">{t.experience.title}</h2>
        <div className="timeline">
          {t.experience.items.map((item: any, index: number) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{item.position}</h3>
                <p className="company">{item.company}</p>
                <p className="period">{item.period}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
