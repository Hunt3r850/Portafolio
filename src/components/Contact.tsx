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
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">{t.contact.title}</h2>
        <p className="section-description">{t.contact.description}</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>{t.contact.form.name}</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>{t.contact.form.email}</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>{t.contact.form.subject}</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>{t.contact.form.message}</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-btn">{t.contact.form.submit}</button>
        </form>
      </div>
    </section>
  );
}
