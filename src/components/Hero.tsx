import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const fullText = `${t.hero.name}\n${t.hero.title}\n${t.hero.subtitle}\n${t.hero.status}`;

  useEffect(() => {
    let i = 0;
    let currentText = '';
    setIsTyping(true);
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText.charAt(i);
        setDisplayedText(currentText);
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingInterval);
  }, [t.hero]);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen bg-black text-green-400 font-mono overflow-hidden pt-16">
      <div className="relative z-10 p-8 terminal-window w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
        <div className="terminal-header flex items-center justify-between">
          <div className="terminal-dots flex space-x-2">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
          </div>
          <span className="terminal-title text-sm text-green-400">root@ahmed-portfolio:~$</span>
          <div className="w-16"></div>
        </div>
        <div className="terminal-content p-4 whitespace-pre-wrap">
          {displayedText}
          {isTyping && <span className="animate-pulse">_</span>}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a href="#contact" className="neon-button flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            Contacto
          </a>
          <a href="#about" className="neon-button flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Acerca de
          </a>
        </div>
      </div>
    </section>
  );
}
