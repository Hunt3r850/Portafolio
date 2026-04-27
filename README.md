# Ahmed Alfonso Garcia - Portfolio

A modern, interactive cybersecurity portfolio website with a hacker/cyberpunk theme.

## Features

- 🌍 **Multilingual Support**: English, Spanish, German, and Italian
- 🎨 **Hacker/Cyberpunk Theme**: Matrix effects, terminal-style design, neon colors
- 📱 **Fully Responsive**: Mobile-first design with perfect mobile navigation
- 🔐 **Interactive Elements**: Expandable sections, smooth animations, glitch effects
- 📧 **Contact Form**: Integrated contact form with validation
- 🔗 **Social Integration**: Links to Hackviser, TryHackMe, HackTheBox, GitHub, LinkedIn, and X
- ⚡ **Fast Performance**: Built with React, Vite, and optimized for speed

## Technologies

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **Styling**: Custom CSS with Matrix effects and animations

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hunt3r850/Portafolio.git
cd Portafolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── HackerNavigation.tsx
│   ├── HackerHeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── SocialLinks.tsx
│   ├── ContactForm.tsx
│   ├── ContactSection.tsx
│   ├── LanguageSelector.tsx
│   └── MatrixBackground.tsx
├── contexts/            # React contexts
│   └── LanguageContext.tsx
├── locales/             # Translation files
│   ├── es.json
│   ├── en.json
│   ├── de.json
│   └── it.json
├── pages/               # Page components
│   └── Index.tsx
├── styles/              # CSS files
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Customization

### Change Language
The site automatically detects and saves your language preference. Use the language selector in the navigation to switch between Spanish, English, German, and Italian.

### Update Content
Edit the translation files in `src/locales/` to update content in different languages.

### Modify Styling
All styles are in `src/index.css` and component-specific styles. The theme uses CSS variables for easy customization.

## Deployment

The site is deployed on GitHub Pages at: https://hunt3r850.github.io/Portafolio/

To deploy your changes:

```bash
npm run deploy
```

## Contact

- **Email**: aalfonso850@yahoo.com
- **Phone**: +41 782 558 402
- **Location**: Winterthur, Switzerland
- **GitHub**: https://github.com/hunt3r850
- **LinkedIn**: https://www.linkedin.com/in/ahmed-alfonso-garcia/
- **X (Twitter)**: https://x.com/aalfonso850

## License

This project is open source and available under the MIT License.

## Author

**Ahmed Odlanier Alfonso Garcia**
- Cybersecurity Specialist
- Ethical Hacker
- Network Administrator
- IT Auditor

---

Made with 💻 and 🛡️ | Deployed on GitHub Pages
