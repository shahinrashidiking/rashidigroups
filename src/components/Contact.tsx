import { Language } from '../types';
import { translations } from '../translations';
import { MapPin, Globe } from 'lucide-react';

interface ContactProps {
  language: Language;
}

export default function Contact({ language }: ContactProps) {
  const t = translations[language];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-[#8B0000] mb-12 text-center">
          {t.contact.title}
        </h2>
        <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-[#8B0000]">
          <h3 className="text-2xl font-serif text-[#8B0000] mb-6">Rashidi Group</h3>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-[#8B0000] mt-1 flex-shrink-0" />
              <p className="whitespace-pre-line">{t.contact.address}</p>
            </div>

            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-[#8B0000] flex-shrink-0" />
              <div>
                <span>{t.contact.website}: </span>
                <a
                  href="https://rashidisgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B0000] hover:text-[#D4AF37] underline transition-colors"
                >
                  rashidisgroup.com
                </a>
              </div>
            </div>

            <div className="pt-4 space-y-2 border-t border-gray-200">
              <p className="font-medium">{t.contact.founded}</p>
              <p className="font-medium">{t.contact.sector}</p>
              <p className="font-medium">{t.contact.companyType}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
