import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-[#8B0000] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#D4AF37]">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
