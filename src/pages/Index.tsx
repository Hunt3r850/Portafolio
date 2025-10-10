import React from 'react';
import HackerNavigation from '@/components/HackerNavigation';
import MatrixBackground from '@/components/MatrixBackground';
import HackerHeroSection from '@/components/HackerHeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import '@/styles/hacker-theme.css';

const IndexContent = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black text-green-400 overflow-x-hidden font-mono">
      {/* Background Elements */}
      <MatrixBackground />
      
      {/* Navigation */}
      <HackerNavigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HackerHeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer id="footer" className="terminal-window mx-4 mb-4">
        <div className="terminal-header">
          <div className="terminal-dots">
            <div className="terminal-dot red"></div>
            <div className="terminal-dot yellow"></div>
            <div className="terminal-dot green"></div>
          </div>
          <div className="terminal-title">system_info.log</div>
        </div>
        <div className="terminal-content">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="neon-text font-futuristic text-lg">
              {t('hero.name')}
            </div>
            <p className="text-green-300">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-green-400/30 text-xs text-center">
            <div className="ascii-art">
{`
╔══════════════════════════════════════════════════════════════╗
║  [SYSTEM STATUS: ONLINE] [SECURITY: MAXIMUM] [ACCESS: ROOT]  ║
╚══════════════════════════════════════════════════════════════╝
`}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;

