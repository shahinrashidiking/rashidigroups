import { Language } from '../types';
import { translations } from '../translations';

interface NavigationProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('who-we-are')}
              className="text-gray-700 hover:text-[#8B0000] transition-colors font-medium"
            >
              {t.nav.whoWeAre}
            </button>
            <button
              onClick={() => scrollToSection('what-we-do')}
              className="text-gray-700 hover:text-[#8B0000] transition-colors font-medium"
            >
              {t.nav.whatWeDo}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#8B0000] transition-colors font-medium"
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 rounded transition-colors ${
                language === 'en'
                  ? 'bg-[#8B0000] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('es')}
              className={`px-3 py-1 rounded transition-colors ${
                language === 'es'
                  ? 'bg-[#8B0000] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => onLanguageChange('tr')}
              className={`px-3 py-1 rounded transition-colors ${
                language === 'tr'
                  ? 'bg-[#8B0000] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              TR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
