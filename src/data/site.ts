import { text } from './approved-copy';
export const languages = {
  en: { label: 'EN', path: '/' },
  es: { label: 'ES', path: '/es/' },
  fr: { label: 'FR', path: '/fr/' }
};

export const contact = {
  phone: '+52 (624) 320 0387',
  phoneRaw: '526243200387',
  email: 'info@hammerheaddivers.com',
  address: 'Dock C, Marina del Rey, 23450 Cabo San Lucas, BCS',
  instagram: 'https://www.instagram.com/hammerheaddivers',
  facebook: 'https://www.facebook.com/Hammerheaddiversloscabos',
  tiktok: 'https://www.tiktok.com/@hammerhead.divers',
  tripadvisor: 'https://www.tripadvisor.fr/Attraction_Review-g152515-d21038009-Reviews-Hammerhead_Divers-Cabo_San_Lucas_Los_Cabos_Baja_California.html',
  wetravel: 'https://www.wetravel.com/users/hammerhead-divers-819f19ad-d03f-43b3-98e6-896a88ca9748'
};

export const copy = {
  en: {
    nav: { tours: 'Tours', wildlife: 'Wildlife', about: 'About', blog: 'Blog', book: 'Book now' },
    hero: {
      eyebrow: 'Women-owned boutique diving · Cabo San Lucas, BCS',
      title: 'Seek deeper',
      text: 'Premium scuba diving and ocean adventures in Baja California Sur. Small groups, certified guides, transparent booking, and unforgettable encounters with the Sea of Cortez.',
      primary: 'View tours',
      secondary: 'Ask on WhatsApp'
    },
    trust: ['Max 4 divers per guide', 'PADI trilingual instructors', 'NOM-09 certified', 'Eco-friendly practices'],
    sections: {
      toursEyebrow: 'Book your ocean experience',
      toursTitle: 'Choose the right trip',
      wildlifeEyebrow: 'Seasonal encounters',
      wildlifeTitle: 'Plan around Baja marine life',
      whyEyebrow: 'Why Hammerhead',
      whyTitle: 'Small groups. Big experiences.',
      blogEyebrow: 'Dive journal',
      blogTitle: 'SEO content that helps travelers decide'
    },
    cta: { book: 'Book on WeTravel', whats: 'Ask on WhatsApp', details: 'View details' }
  },
  es: {
    nav: { tours: 'Tours', wildlife: 'Vida marina', about: 'Nosotros', blog: 'Blog', book: 'Reservar' },
    hero: {
      eyebrow: 'Empresa femenina · Buceo boutique · Cabo San Lucas, BCS',
      title: 'Busca más fondo',
      text: 'Buceo premium y aventuras oceánicas en Baja California Sur. Grupos pequeños, guías certificados, reserva clara y encuentros inolvidables con el Mar de Cortés.',
      primary: 'Ver tours',
      secondary: 'Preguntar por WhatsApp'
    },
    trust: ['Máx. 4 buzos por guía', 'Instructores PADI trilingües', 'Certificación NOM-09', 'Prácticas eco-amigables'],
    sections: {
      toursEyebrow: 'Reserva tu experiencia oceánica',
      toursTitle: 'Elige el viaje correcto',
      wildlifeEyebrow: 'Encuentros por temporada',
      wildlifeTitle: 'Planea según la vida marina',
      whyEyebrow: 'Por qué Hammerhead',
      whyTitle: 'Grupos pequeños. Grandes experiencias.',
      blogEyebrow: 'Diario de buceo',
      blogTitle: 'Contenido SEO que ayuda al viajero a decidir'
    },
    cta: { book: 'Reservar en WeTravel', whats: 'Preguntar por WhatsApp', details: 'Ver detalles' }
  },
  fr: {
    nav: { tours: 'Tours', wildlife: 'Faune marine', about: 'À propos', blog: 'Blog', book: 'Réserver' },
    hero: {
      eyebrow: 'Entreprise féminine · Plongée boutique · Cabo San Lucas, BCS',
      title: 'Plongez plus profond',
      text: 'Plongée premium et aventures océaniques en Basse-Californie du Sud. Petits groupes, guides certifiés, réservation claire et rencontres inoubliables avec la mer de Cortés.',
      primary: 'Voir les tours',
      secondary: 'Demander sur WhatsApp'
    },
    trust: ['Max 4 plongeurs par guide', 'Instructeurs PADI trilingues', 'Certifiés NOM-09', 'Pratiques éco-responsables'],
    sections: {
      toursEyebrow: 'Réservez votre expérience océanique',
      toursTitle: 'Choisissez le bon voyage',
      wildlifeEyebrow: 'Rencontres saisonnières',
      wildlifeTitle: 'Planifiez autour de la faune marine',
      whyEyebrow: 'Pourquoi Hammerhead',
      whyTitle: 'Petits groupes. Grandes expériences.',
      blogEyebrow: 'Journal de plongée',
      blogTitle: 'Contenu SEO qui aide les voyageurs à décider'
    },
    cta: { book: 'Réserver sur WeTravel', whats: 'Demander sur WhatsApp', details: 'Voir détails' }
  }
};

export type Lang = keyof typeof copy;

for (const lang of ['en', 'es', 'fr'] as const) {
 const c = copy[lang];
 const menu = text(lang, 3, 'Menú principal', [c.nav.tours,c.nav.wildlife,c.nav.about,c.nav.blog].join(' · ')).split(' · ');
 [c.nav.tours,c.nav.wildlife,c.nav.about,c.nav.blog] = menu;
 c.nav.book = text(lang,3,'CTA principal',c.nav.book);
 c.cta.whats = text(lang,3,'CTA contacto',c.cta.whats);
 c.hero.eyebrow = text(lang,5,'Eyebrow',c.hero.eyebrow);
 c.hero.title = text(lang,5,'Título principal',c.hero.title);
 c.hero.text = text(lang,5,'Descripción',c.hero.text);
 c.hero.primary = text(lang,5,'Botón 1',c.hero.primary);
 c.hero.secondary = text(lang,5,'Botón 2',c.hero.secondary);
 c.trust = c.trust.map((value,index) => text(lang,5,`Prueba / atributo ${index+1}`,value));
 c.sections.toursEyebrow = text(lang,11,'Intro – etiqueta',c.sections.toursEyebrow);
 c.sections.toursTitle = text(lang,11,'Intro – título',c.sections.toursTitle);
 c.sections.wildlifeEyebrow = text(lang,13,'Etiqueta',c.sections.wildlifeEyebrow);
 c.sections.wildlifeTitle = text(lang,13,'Título',c.sections.wildlifeTitle);
 c.sections.whyEyebrow = text(lang,15,'Etiqueta',c.sections.whyEyebrow);
 c.sections.whyTitle = text(lang,15,'Título',c.sections.whyTitle);
 c.sections.blogEyebrow = text(lang,23,'Eyebrow',c.sections.blogEyebrow);
}
