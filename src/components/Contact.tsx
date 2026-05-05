import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(t.contact.form.success);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-black text-green-400 font-mono relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 glitch-effect" data-text={t.contact.title}>{t.contact.title}</h2>
        
        <div className="terminal-window p-8">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
            </div>
            <span className="terminal-title">contact.sh</span>
          </div>
          <div className="terminal-content">
            <p className="text-lg leading-relaxed mb-8 text-center">{t.contact.description}</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 text-cyan-400">{t.contact.form.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 bg-gray-800 border border-green-700 rounded-md focus:outline-none focus:border-cyan-500 text-green-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-cyan-400">{t.contact.form.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 bg-gray-800 border border-green-700 rounded-md focus:outline-none focus:border-cyan-500 text-green-200"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold mb-2 text-cyan-400">{t.contact.form.subject}</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 bg-gray-800 border border-green-700 rounded-md focus:outline-none focus:border-cyan-500 text-green-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-cyan-400">{t.contact.form.message}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={5} 
                  required 
                  className="w-full p-3 bg-gray-800 border border-green-700 rounded-md focus:outline-none focus:border-cyan-500 text-green-200"
                ></textarea>
              </div>
              <button type="submit" className="neon-button w-full flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                {t.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
