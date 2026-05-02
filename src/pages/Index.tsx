import React from 'react' // eslint-disable-line @typescript-eslint/no-unused-vars;
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Certifications } from '../components/Certifications';
import { SocialLinks } from '../components/SocialLinks';
import { Contact } from '../components/Contact';
import { MatrixBackground } from '../components/MatrixBackground';

export function Index() {
  return (
    <div className="app">
      <MatrixBackground />
      <Navigation />
      <main className="main-content">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <SocialLinks />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2026 Ahmed Odlanier Alfonso Garcia. All rights reserved.</p>
      </footer>
    </div>
  );
}
