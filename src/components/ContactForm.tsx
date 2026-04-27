import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (in production, this would send to a backend)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For now, just log the data and show success
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="terminal-window max-w-2xl mx-auto">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot red"></div>
          <div className="terminal-dot yellow"></div>
          <div className="terminal-dot green"></div>
        </div>
        <div className="terminal-title">contact_form.sh</div>
      </div>

      <div className="terminal-content">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-green-400 text-sm font-mono mb-2">
              <span className="text-cyan-400">$</span> {t('contact.form.name')}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black border border-green-400/50 text-green-400 px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 transition-all"
              placeholder="Ahmed Alfonso..."
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-green-400 text-sm font-mono mb-2">
              <span className="text-cyan-400">$</span> {t('contact.form.email')}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black border border-green-400/50 text-green-400 px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-green-400 text-sm font-mono mb-2">
              <span className="text-cyan-400">$</span> {t('contact.form.subject')}
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-black border border-green-400/50 text-green-400 px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 transition-all"
              placeholder="Project Inquiry..."
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-green-400 text-sm font-mono mb-2">
              <span className="text-cyan-400">$</span> {t('contact.form.message')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-black border border-green-400/50 text-green-400 px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-400/20 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 neon-button group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span className="text-green-400">$</span>
                {isSubmitting ? 'Sending...' : t('contact.form.submit')}
              </span>
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="border border-green-400 bg-green-400/10 text-green-400 px-4 py-2 rounded font-mono text-sm">
              ✓ {t('contact.form.success')}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="border border-red-400 bg-red-400/10 text-red-400 px-4 py-2 rounded font-mono text-sm">
              ✗ {t('contact.form.error')}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
