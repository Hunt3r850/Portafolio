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
    <nav className="fixed w-full top-0 left-0 z-50 bg-black bg-opacity-90 backdrop-filter backdrop-blur-lg border-b border-green-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-8 rounded-full border-2 border-cyan-400" src="/Portafolio/ahmed-hacker-profile.png" alt="Ahmed" />
              <span className="ml-3 text-white text-xl font-bold glitch-effect" data-text="root@AHByte">root@AHByte</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-green-400 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">{t.navigation.home}</a>
              <a href="#about" className="text-green-400 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">{t.navigation.about}</a>
              <a href="#experience" className="text-green-400 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">{t.navigation.experience}</a>
              <a href="#certifications" className="text-green-400 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">{t.navigation.certifications}</a>
              <a href="#contact" className="text-green-400 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">{t.navigation.contact}</a>
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as 'es' | 'en' | 'de' | 'it')}
                className="bg-gray-800 text-green-400 text-sm rounded-md border border-green-700 focus:ring-green-500 focus:border-green-500 py-1 px-2"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button" 
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu" 
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" className="text-green-400 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>{t.navigation.home}</a>
          <a href="#about" className="text-green-400 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>{t.navigation.about}</a>
          <a href="#experience" className="text-green-400 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>{t.navigation.experience}</a>
          <a href="#certifications" className="text-green-400 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>{t.navigation.certifications}</a>
          <a href="#contact" className="text-green-400 hover:bg-green-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setMobileMenuOpen(false)}>{t.navigation.contact}</a>
          <select 
            value={language} 
            onChange={(e) => {
              setLanguage(e.target.value as 'es' | 'en' | 'de' | 'it');
              setMobileMenuOpen(false);
            }}
            className="bg-gray-800 text-green-400 text-base rounded-md border border-green-700 focus:ring-green-500 focus:border-green-500 py-1 px-2 w-full mt-2"
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
