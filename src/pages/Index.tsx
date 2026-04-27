import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import HackerNavigation from '@/components/HackerNavigation';
import HackerHeroSection from '@/components/HackerHeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import SocialLinks from '@/components/SocialLinks';
import ContactSection from '@/components/ContactSection';
import MatrixBackground from '@/components/MatrixBackground';

const Index: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
        {/* Matrix Background */}
        <MatrixBackground />

        {/* Navigation */}
        <HackerNavigation />

        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <HackerHeroSection />

          {/* About Section */}
          <AboutSection />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Education Section */}
          <EducationSection />

          {/* Social Links Section */}
          <SocialLinks />

          {/* Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="bg-black border-t border-green-400/30 py-8 px-6 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> echo "© 2025 Ahmed Alfonso Garcia"
              </p>
              <p className="text-green-400/50 font-mono text-xs">
                Crafted with 💻 and 🛡️ | Deployed on GitHub Pages
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href="https://github.com/hunt3r850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                >
                  GitHub
                </a>
                <span className="text-green-400/30">|</span>
                <a
                  href="https://www.linkedin.com/in/ahmed-alfonso-garcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                >
                  LinkedIn
                </a>
                <span className="text-green-400/30">|</span>
                <a
                  href="https://x.com/aalfonso850"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
