import { Language } from '../types';
import { translations } from '../translations';
import { Building2, Gem, TrendingUp, Briefcase, Globe } from 'lucide-react';

interface WhatWeDoProps {
  language: Language;
}

const icons = [Globe, Gem, Building2, Briefcase, TrendingUp];

export default function WhatWeDo({ language }: WhatWeDoProps) {
  const t = translations[language];

  return (
    <section id="what-we-do" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-[#8B0000] mb-12 text-center">
          {t.whatWeDo.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whatWeDo.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#D4AF37]"
              >
                <Icon className="w-10 h-10 text-[#8B0000] mb-4" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
