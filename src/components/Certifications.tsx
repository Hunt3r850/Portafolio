import React from 'react' // eslint-disable-line @typescript-eslint/no-unused-vars;
import { useLanguage } from '../contexts/LanguageContext';

export function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        <h2 className="section-title">{t.certifications.title}</h2>
        <div className="certifications-grid">
          {t.certifications.items.map((cert: any, index: number) => (
            <div key={index} className="cert-card">
              <div className="cert-header">
                <h4>{cert.title}</h4>
                <span className="cert-type">{cert.type}</span>
              </div>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
