import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages: Array<{ code: 'es' | 'en' | 'de' | 'it'; name: string; flag: string }> = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <nav className="cyber-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/Portafolio/ahmed-hacker-profile.png" alt="Ahmed" className="logo-img" />
          <span className="logo-text">root@AHByte</span>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">{t.navigation.home}</a>
          <a href="#about" className="nav-link">{t.navigation.about}</a>
          <a href="#experience" className="nav-link">{t.navigation.experience}</a>
          <a href="#certifications" className="nav-link">{t.navigation.certifications}</a>
          <a href="#contact" className="nav-link">{t.navigation.contact}</a>
        </div>

        <div className="nav-language">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value as 'es' | 'en' | 'de' | 'it')}
            className="lang-select"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}
