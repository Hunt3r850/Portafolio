import React from 'react' // eslint-disable-line @typescript-eslint/no-unused-vars;
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">{t.about.title}</h2>
        <p className="section-description">{t.about.description}</p>
        
        <div className="stats-grid">
          {Object.entries(t.about.stats).map(([key, value]) => (
            <div key={key} className="stat-card">
              <div className="stat-value">{value}</div>
            </div>
          ))}
        </div>

        <div className="skills-section">
          <h3>{t.skills.title}</h3>
          <div className="skills-grid">
            {t.skills.technical.map((skill: any) => (
              <div key={skill.name} className="skill-bar">
                <div className="skill-name">{skill.name}</div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
