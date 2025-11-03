export type Language = 'en' | 'es' | 'tr';

export interface Translations {
  nav: {
    whoWeAre: string;
    whatWeDo: string;
    contact: string;
  };
  hero: {
    tagline: string;
  };
  whoWeAre: {
    title: string;
    content: string;
  };
  whatWeDo: {
    title: string;
    items: string[];
  };
  contact: {
    title: string;
    address: string;
    website: string;
    founded: string;
    sector: string;
    companyType: string;
  };
  footer: {
    copyright: string;
  };
}
