import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import '../styles/hacker-theme.css';

const HackerNavigation: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navigation height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const navItems = [
    { id: 'home', label: t('navigation.home'), command: 'cd ~' },
    { id: 'about', label: t('navigation.about'), command: 'cat about.txt' },
    { id: 'experience', label: t('navigation.experience'), command: 'ls -la /experience' },
    { id: 'skills', label: t('navigation.skills'), command: './skills.sh' },
    { id: 'education', label: t('navigation.education'), command: 'cat education.log' },
    { id: 'contact', label: t('navigation.contact'), command: 'mail -s contact' },
  ];

  return (
    <>
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'hacker-nav backdrop-blur-md' 
          : 'bg-transparent'
      }`}>
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand - Responsive sizing */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <img 
                src="https://hunt3r850.github.io/Portafolio/ahmed-hacker-profile.png" 
                alt="AHByte Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg border border-cyan-400/50 shadow-lg shadow-cyan-400/20 hover:shadow-green-400/30 transition-all duration-300"
              />
              <div className="text-green-400 font-mono text-sm sm:text-lg hidden xs:block">
                <span className="text-cyan-400">root@</span>
                <span className="neon-text font-futuristic">AHByte</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-item group relative px-3 py-2 text-xs sm:text-sm font-mono transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-cyan-400 border-cyan-400' 
                      : 'text-green-400 hover:text-cyan-400'
                  }`}
                  title={item.command}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-cyan-400/10 border border-cyan-400 rounded"></div>
                  )}
                </button>
              ))}
              <div className="ml-4">
                <LanguageSelector />
              </div>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <div className="hidden sm:block">
                <LanguageSelector />
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-green-400 hover:text-cyan-400 transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu - Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-black/95 border-t border-green-400/30 backdrop-blur-sm">
              <div className="flex flex-col space-y-1 py-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-mono transition-all duration-300 border-l-2 ${
                      activeSection === item.id 
                        ? 'text-cyan-400 border-cyan-400 bg-cyan-400/10' 
                        : 'text-green-400 border-transparent hover:text-cyan-400 hover:border-cyan-400'
                    }`}
                    title={item.command}
                  >
                    <div className="flex justify-between items-center">
                      <span>{item.label}</span>
                      <span className="text-xs text-gray-500 hidden sm:inline">{item.command}</span>
                    </div>
                  </button>
                ))}
                <div className="sm:hidden px-4 py-3 border-t border-green-400/30">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Terminal Command Line */}
        {isScrolled && (
          <div className="border-t border-green-400/30 bg-black/50 backdrop-blur-sm">
            <div className="w-full px-4 sm:px-6 py-2">
              <div className="text-xs font-mono text-green-400 flex items-center overflow-x-auto">
                <span className="text-cyan-400 whitespace-nowrap">ahmed@portfolio</span>
                <span className="text-white mx-1">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white mx-1">$</span>
                <span className="ml-2 animate-pulse">_</span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Command Palette Overlay - Hidden on mobile */}
      <div className="fixed top-20 left-4 z-40 pointer-events-none hidden sm:block">
        <div className="terminal-window w-64 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <div className="terminal-title">commands.sh</div>
          </div>
          <div className="terminal-content text-xs space-y-1">
            {navItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span className="text-yellow-400">{item.label}:</span>
                <span className="text-green-400">{item.command}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Status Bar - Responsive positioning */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="terminal-window">
          <div className="terminal-content py-2 px-3 sm:px-4 text-xs">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="hidden sm:inline">SYSTEM ONLINE</span>
              <span className="sm:hidden">ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HackerNavigation;
