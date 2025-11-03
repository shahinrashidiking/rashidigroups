import { Language } from '../types';
import { translations } from '../translations';

interface WhoWeAreProps {
  language: Language;
}

export default function WhoWeAre({ language }: WhoWeAreProps) {
  const t = translations[language];

  return (
    <section id="who-we-are" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-[#8B0000] mb-8 text-center">
          {t.whoWeAre.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
          {t.whoWeAre.content}
        </p>
      </div>
    </section>
  );
}
