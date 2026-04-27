import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'es', name: '🇪🇸 Español', flag: '🇪🇸' },
    { code: 'en', name: '🇬🇧 English', flag: '🇬🇧' },
    { code: 'de', name: '🇩🇪 Deutsch', flag: '🇩🇪' },
    { code: 'it', name: '🇮🇹 Italiano', flag: '🇮🇹' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 text-sm font-mono text-green-400 hover:text-cyan-400 transition-colors border border-green-400/30 rounded hover:border-cyan-400/50">
        <span>{languages.find(l => l.code === language)?.flag}</span>
        <span className="hidden sm:inline">{languages.find(l => l.code === language)?.name.split(' ')[1]}</span>
      </button>

      <div className="absolute right-0 mt-2 w-40 bg-black/95 border border-green-400/30 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={`w-full text-left px-4 py-2 text-sm font-mono transition-colors ${
              language === lang.code
                ? 'bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400'
                : 'text-green-400 hover:text-cyan-400 hover:bg-green-400/10'
            }`}
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
