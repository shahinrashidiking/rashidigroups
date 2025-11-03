import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language];

  return (
    <section className="min-h-screen bg-[#8B0000] flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/image.jpg"
          alt="Rashidi Group Logo"
          className="w-full max-w-md mx-auto mb-8 animate-fadeIn"
        />
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#D4AF37] font-light tracking-wide animate-fadeIn">
          {t.hero.tagline}
        </h2>
      </div>
    </section>
  );
}
