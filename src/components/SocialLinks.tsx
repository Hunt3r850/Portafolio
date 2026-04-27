import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

const SocialLinks: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks: SocialLink[] = [
    {
      name: 'Hackviser',
      url: 'https://app.hackviser.com/profile/AHByte',
      icon: '🛡️',
      color: 'cyan',
      description: 'Security Certifications & Badges',
    },
    {
      name: 'TryHackMe',
      url: 'https://tryhackme.com/p/Hunt3r850',
      icon: '🎯',
      color: 'green',
      description: 'Hacking Challenges & Training',
    },
    {
      name: 'HackTheBox',
      url: 'https://app.hackthebox.com/profile/1743244',
      icon: '📦',
      color: 'purple',
      description: 'Penetration Testing Labs',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/hunt3r850',
      icon: '💻',
      color: 'white',
      description: 'Code & Projects',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmed-alfonso-garcia/',
      icon: '💼',
      color: 'blue',
      description: 'Professional Network',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/aalfonso850',
      icon: '𝕏',
      color: 'gray',
      description: 'Updates & Insights',
    },
  ];

  return (
    <section id="social" className="py-16 px-6 bg-black/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 font-mono mb-4">
            <span className="text-cyan-400">&gt;</span> {t('social.title')}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border border-green-400/30 hover:border-cyan-400/50 bg-black/50 hover:bg-black/80 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{link.icon}</span>
                  <div>
                    <h3 className="text-green-400 font-mono font-bold text-lg group-hover:text-cyan-400 transition-colors">
                      {link.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-green-400/70 text-sm font-mono mb-4 group-hover:text-green-400 transition-colors">
                  {link.description}
                </p>

                {/* Link Arrow */}
                <div className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-sm">Visit Profile</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-border opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-12 terminal-window max-w-2xl mx-auto">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <div className="terminal-title">contact_info.txt</div>
          </div>
          <div className="terminal-content space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-yellow-400">Location:</span>
              <span className="text-green-400">{t('contact.location')}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-yellow-400">Phone:</span>
              <a href={`tel:${t('contact.phone')}`} className="text-cyan-400 hover:text-green-400 transition-colors">
                {t('contact.phone')}
              </a>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-yellow-400">Email:</span>
              <a href={`mailto:${t('contact.email')}`} className="text-cyan-400 hover:text-green-400 transition-colors">
                {t('contact.email')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
