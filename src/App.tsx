import { useState, useEffect } from 'react';
import { Language } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      setLanguage('es');
    } else if (browserLang.startsWith('tr')) {
      setLanguage('tr');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen">
      <Navigation language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <WhoWeAre language={language} />
      <WhatWeDo language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
