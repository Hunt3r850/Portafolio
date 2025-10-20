import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import '../styles/hacker-theme.css';

const HackerHeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = t('hero.name');

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-20">
      {/* Matrix Background Effect */}
      <div className="matrix-bg"></div>
      <div className="circuit-overlay"></div>
      
      {/* Scan Lines Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-green-400/20"
            style={{
              top: `${i * 5}%`,
              animation: `scan-line ${2 + i * 0.1}s infinite linear`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 mt-8">
        {/* Terminal Window */}
        <div className="terminal-window max-w-4xl mx-auto mb-8">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <div className="terminal-title">root@ahbyte-portfolio:~$</div>
          </div>
          <div className="terminal-content">
            <div className="mb-4">
              <span className="text-green-400">$</span>
              <span className="text-cyan-400 ml-2">whoami</span>
            </div>
            <div className="mb-6">
              <div className="typing-text text-2xl md:text-4xl font-bold text-green-400 font-mono">
                {displayText}
                <span className="animate-pulse">|</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="text-green-400">$</span>
              <span className="text-cyan-400 ml-2">cat /etc/profile</span>
            </div>
            <div className="text-left space-y-2 text-sm md:text-base bg-black/30 p-4 rounded border border-green-400/30">
              <div className="text-green-300">
                <span className="text-yellow-400">ROLE:</span> {t("hero.title")}
              </div>
              <div className="text-green-300">
                <span className="text-yellow-400">SPECIALIZATION:</span> {t('hero.subtitle')}
              </div>
              <div className="text-green-300">
                <span className="text-yellow-400">EXPERIENCE:</span> 18+ years in cybersecurity
              </div>
              <div className="text-green-300">
                <span className="text-yellow-400">STATUS:</span> <span className="text-green-400 animate-pulse">ONLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image with Hexagonal Frame - now using background-image */}
        <div className="hex-container mb-8">
          <div
            className="hex-image-bg"
            style={{ backgroundImage: `url(https://hunt3r850.github.io/Portafolio/ahmed-hacker-profile.png)` }}
          ></div>
          <div className="absolute inset-0 bg-green-400/20 animate-pulse rounded-full blur-xl"></div>
        </div>

        {/* ASCII Art */}
        <div className="ascii-art mb-8 text-xs md:text-sm">
{`
╔══════════════════════════════════════╗
║           SYSTEM ACCESS              ║
║  ████████████████████████████  100%  ║
║                                      ║
║  [✓] Ethical Hacking Certified       ║
║  [✓] Network Security Expert         ║
║  [✓] Cybersecurity Specialist        ║
║  [✓] IT Auditor                      ║
╚══════════════════════════════════════╝
`}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="neon-button group">
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-green-400">$</span>
              {t("hero.contactButton")}
            </span>
          </button>
          <button className="neon-button group border-cyan-400 text-cyan-400 hover:bg-cyan-400">
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-cyan-400">{'>'}</span>
              {t("navigation.about")}
            </span>
          </button>
        </div>

        {/* Status Bar */}
        <div className="mt-12 terminal-window max-w-2xl mx-auto">
          <div className="terminal-content py-3">
            <div className="flex justify-between items-center text-xs">
              <div className="flex items-center gap-4">
                <span className="text-green-400">●</span>
                <span>SECURE CONNECTION</span>
              </div>
              <div className="flex items-center gap-4">
                <span>LOCATION: Winterthur, Switzerland</span>
                <span className="text-cyan-400">READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glitch absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold opacity-10" data-text="HACKER">
          HACKER
        </div>
      </div>

      <style jsx>{`
        .hex-image-bg {
          width: 100px; /* Adjust as needed */
          height: 100px; /* Adjust as needed */
          background-size: cover;
          background-position: center;
          -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          border: 2px solid #0ff;
          box-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff;
          transition: all 0.3s ease-in-out;
        }
        .hex-container:hover .hex-image-bg {
          box-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0, 0 0 40px #0f0;
        }
        @keyframes scan-line {
          0% { opacity: 0; transform: translateY(-100vh); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(100vh); }
        }
      `}</style>
    </section>
  );
};

export default HackerHeroSection;
