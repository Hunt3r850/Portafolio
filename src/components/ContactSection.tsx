import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 font-mono mb-4">
            <span className="text-cyan-400">&gt;</span> {t('contact.title')}
          </h2>
          <p className="text-green-400/70 text-lg mb-4">{t('contact.description')}</p>
          <div className="h-1 w-32 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto"></div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <ContactForm />
        </div>

        {/* Quick Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Phone */}
          <div className="terminal-window text-center group hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
            <div className="terminal-content">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-green-400 font-mono font-bold mb-2">Phone</h3>
              <a
                href={`tel:${t('contact.phone')}`}
                className="text-cyan-400 hover:text-green-400 transition-colors font-mono text-sm"
              >
                {t('contact.phone')}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="terminal-window text-center group hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
            <div className="terminal-content">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="text-green-400 font-mono font-bold mb-2">Email</h3>
              <a
                href={`mailto:${t('contact.email')}`}
                className="text-cyan-400 hover:text-green-400 transition-colors font-mono text-sm break-all"
              >
                {t('contact.email')}
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="terminal-window text-center group hover:shadow-lg hover:shadow-cyan-400/20 transition-all">
            <div className="terminal-content">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-green-400 font-mono font-bold mb-2">Location</h3>
              <p className="text-cyan-400 font-mono text-sm">{t('contact.location')}</p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-12 terminal-window max-w-2xl mx-auto">
          <div className="terminal-header">
            <div className="terminal-dots">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
            </div>
            <div className="terminal-title">response_time.sh</div>
          </div>
          <div className="terminal-content text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono">AVAILABLE FOR CONTACT</span>
            </div>
            <p className="text-green-400/70 text-sm">
              I typically respond to inquiries within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
