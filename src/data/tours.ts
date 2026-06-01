export type Tour = {
  slug: string;
  category: 'diving' | 'snorkeling' | 'wildlife' | 'course';
  serviceType: Record<'en' | 'es' | 'fr', string>;
  featured?: boolean;
  image: string;
  badge: string;
  bookingUrl: string;
  priceFrom: string;
  duration: string;
  groupSize: string;
  level: string;
  season: string;
  location: string;
  title: Record<'en' | 'es' | 'fr', string>;
  summary: Record<'en' | 'es' | 'fr', string>;
  highlights: Record<'en' | 'es' | 'fr', string[]>;
  included: Record<'en' | 'es' | 'fr', string[]>;
  faqs: Record<'en' | 'es' | 'fr', { q: string; a: string }[]>;
};

export const tours: Tour[] = [
  {
    slug: 'marine-park-diving',
    category: 'diving',
    serviceType: {
      en: 'Diving',
      es: 'Buceo',
      fr: 'Plongée'
    },
    image: '/assets/marine-park-fish.jpg',
    badge: 'AM / PM departures',
    bookingUrl: 'https://www.wetravel.com/users/hammerhead-divers-819f19ad-d03f-43b3-98e6-896a88ca9748',
    priceFrom: 'From $140 USD',
    duration: 'Half day',
    groupSize: 'Small groups',
    level: 'Certified divers',
    season: 'Year-round',
    location: 'Cabo San Lucas Marine Park',
    title: {
      en: 'Marine Park Diving',
      es: 'Buceo en el Parque Marino',
      fr: 'Plongée au parc marin'
    },
    summary: {
      en: 'Classic Cabo diving with flexible morning or afternoon departures, reef life, rock formations, and optional night dive planning.',
      es: 'Buceo clásico en Cabo con salidas por la mañana o tarde, arrecifes, formaciones rocosas y opción de planear buceo nocturno.',
      fr: 'Plongée classique à Cabo avec départs matin ou après-midi, récifs, formations rocheuses et options de plongée de nuit.'
    },
    highlights: {
      en: ['AM and PM departures', 'Night dives available on request', 'Great entry point for certified divers in Cabo'],
      es: ['Salidas AM y PM', 'Buceo nocturno bajo solicitud', 'Excelente punto de entrada para buzos certificados en Cabo'],
      fr: ['Départs matin et après-midi', 'Plongées de nuit sur demande', 'Excellent choix pour plongeurs certifiés à Cabo']
    },
    included: {
      en: ['Professional guide', 'Dive planning by conditions', 'Weights and tanks'],
      es: ['Guía profesional', 'Planeación según condiciones', 'Pesas y tanques'],
      fr: ['Guide professionnel', 'Planification selon les conditions', 'Plombs et bouteilles']
    },
    faqs: {
      en: [{ q: 'Can I choose AM or PM?', a: 'Yes. Marine Park dives can be planned for morning or afternoon departures depending on availability.' }],
      es: [{ q: '¿Puedo elegir AM o PM?', a: 'Sí. El buceo en Parque Marino puede planearse por la mañana o tarde según disponibilidad.' }],
      fr: [{ q: 'Puis-je choisir matin ou après-midi?', a: 'Oui. Les plongées au parc marin peuvent être planifiées selon disponibilité.' }]
    }
  },
  {
    slug: 'corridor-diving',
    category: 'diving',
    serviceType: {
      en: 'Diving',
      es: 'Buceo',
      fr: 'Plongée'
    },
    image: '/assets/corridor-dive.jpg',
    badge: 'AM departure',
    bookingUrl: 'https://www.wetravel.com/users/hammerhead-divers-819f19ad-d03f-43b3-98e6-896a88ca9748',
    priceFrom: 'From $150 USD',
    duration: 'Half day',
    groupSize: 'Small groups',
    level: 'Certified divers',
    season: 'Year-round',
    location: 'Tourist Corridor, Los Cabos',
    title: {
      en: 'Corridor Diving',
      es: 'Buceo en el Corredor',
      fr: 'Plongée au Corridor'
    },
    summary: {
      en: 'Morning dive trip along the Cabo corridor, ideal for certified divers looking for reefs, rays, schooling fish, and relaxed boat logistics.',
      es: 'Salida matutina por el corredor de Cabo para buzos certificados que buscan arrecifes, rayas, cardúmenes y logística cómoda.',
      fr: 'Sortie matinale le long du corridor de Cabo pour récifs, raies, bancs de poissons et logistique simple.'
    },
    highlights: {
      en: ['Morning departure', 'Cabo corridor dive sites', 'Good balance of marine life and easy logistics'],
      es: ['Salida matutina', 'Sitios del corredor de Cabo', 'Buen balance entre vida marina y logística sencilla'],
      fr: ['Départ le matin', 'Sites du corridor de Cabo', 'Bon équilibre entre faune marine et logistique simple']
    },
    included: {
      en: ['Professional guide', 'Weights and tanks', 'Dive site selection by conditions'],
      es: ['Guía profesional', 'Pesas y tanques', 'Selección de sitio según condiciones'],
      fr: ['Guide professionnel', 'Plombs et bouteilles', 'Choix du site selon les conditions']
    },
    faqs: {
      en: [{ q: 'Who is this best for?', a: 'Certified divers who want a compact Cabo dive trip with strong marine-life potential.' }],
      es: [{ q: '¿Para quién es ideal?', a: 'Para buzos certificados que quieren una salida compacta en Cabo con buena posibilidad de vida marina.' }],
      fr: [{ q: 'Pour qui est-ce idéal?', a: 'Pour les plongeurs certifiés qui veulent une sortie courte à Cabo avec de belles rencontres marines.' }]
    }
  },
  {
    slug: 'hidden-gems-diving',
    category: 'diving',
    serviceType: {
      en: 'Diving',
      es: 'Buceo',
      fr: 'Plongée'
    },
    image: '/assets/hidden-gems-dive.jpg',
    badge: 'Off-the-beaten-path',
    bookingUrl: 'https://www.wetravel.com/users/hammerhead-divers-819f19ad-d03f-43b3-98e6-896a88ca9748',
    priceFrom: 'Ask availability',
    duration: 'Custom trip',
    groupSize: 'Private or small group',
    level: 'Certified divers',
    season: 'By conditions',
    location: 'Cabo San Lucas',
    title: {
      en: 'Hidden Gems Diving',
      es: 'Buceo Hidden Gems',
      fr: 'Plongée Hidden Gems'
    },
    summary: {
      en: 'Custom dive planning for lesser-known Cabo sites, designed for divers who want a more local, condition-based experience.',
      es: 'Planeación personalizada para sitios menos conocidos de Cabo, ideal para buzos que buscan una experiencia más local.',
      fr: 'Planification personnalisée pour sites moins connus de Cabo, idéale pour une expérience plus locale.'
    },
    highlights: {
      en: ['Custom site planning', 'Local hidden spots', 'Best planned around conditions and diver level'],
      es: ['Planeación personalizada', 'Sitios locales menos visitados', 'Se define según condiciones y nivel'],
      fr: ['Planification personnalisée', 'Sites locaux moins fréquentés', 'Selon conditions et niveau']
    },
    included: {
      en: ['Professional guide', 'Custom planning', 'Safety-first site selection'],
      es: ['Guía profesional', 'Planeación personalizada', 'Selección segura del sitio'],
      fr: ['Guide professionnel', 'Planification personnalisée', 'Sélection du site axée sécurité']
    },
    faqs: {
      en: [{ q: 'Is this a fixed itinerary?', a: 'No. Hidden Gems is best planned through WhatsApp based on dates, certification level, and ocean conditions.' }],
      es: [{ q: '¿Es itinerario fijo?', a: 'No. Hidden Gems se planea por WhatsApp según fechas, nivel y condiciones del mar.' }],
      fr: [{ q: 'Est-ce un itinéraire fixe?', a: 'Non. Hidden Gems se planifie selon les dates, le niveau et les conditions.' }]
    }
  },
  {
    slug: 'snorkeling-cabo',
    category: 'snorkeling',
    serviceType: {
      en: 'Snorkeling',
      es: 'Snorkel',
      fr: 'Snorkeling'
    },
    image: '/assets/snorkel-cabo.jpg',
    badge: 'Easy ocean experience',
    bookingUrl: 'https://www.wetravel.com/users/hammerhead-divers-819f19ad-d03f-43b3-98e6-896a88ca9748',
    priceFrom: 'Ask availability',
    duration: 'Half day',
    groupSize: 'Families and groups',
    level: 'No certification',
    season: 'Year-round',
    location: 'Cabo San Lucas',
    title: {
      en: 'Cabo Snorkeling',
      es: 'Snorkel en Cabo',
      fr: 'Snorkeling à Cabo'
    },
    summary: {
      en: 'Accessible snorkeling for couples, families, and groups who want clear water, reef fish, and a lighter ocean adventure.',
      es: 'Snorkel accesible para parejas, familias y grupos que buscan agua clara, peces de arrecife y una aventura ligera.',
      fr: 'Snorkeling accessible pour couples, familles et groupes avec eau claire, poissons de récif et aventure légère.'
    },
    highlights: {
      en: ['No certification required', 'Good for families and groups', 'Clear-water reef experience'],
      es: ['No requiere certificación', 'Ideal para familias y grupos', 'Experiencia de arrecife en agua clara'],
      fr: ['Aucune certification requise', 'Idéal familles et groupes', 'Expérience récif en eau claire']
    },
    included: {
      en: ['Guide support', 'Trip planning', 'Snorkel-focused ocean experience'],
      es: ['Acompañamiento', 'Planeación de salida', 'Experiencia enfocada en snorkel'],
      fr: ['Accompagnement', 'Planification', 'Expérience snorkeling']
    },
    faqs: {
      en: [{ q: 'Do I need to be certified?', a: 'No. This is a snorkeling experience and does not require scuba certification.' }],
      es: [{ q: '¿Necesito certificación?', a: 'No. Es una experiencia de snorkel y no requiere certificación de buceo.' }],
      fr: [{ q: 'Faut-il une certification?', a: 'Non. C’est une expérience snorkeling sans certification plongée.' }]
    }
  },
  {
    slug: 'diving-la-paz',
    category: 'diving',
    serviceType: {
      en: 'Full day expedition',
      es: 'Expedición de día completo',
      fr: 'Expédition journée complète'
    },
    featured: true,
    image: '/assets/scuba-group.jpg',
    badge: 'Best for certified divers',
    bookingUrl: 'https://www.wetravel.com/trips/diving-la-paz-hammerhead-divers-05197397',
    priceFrom: 'From MEX$4,300',
    duration: '1 day',
    groupSize: '1-6 guests',
    level: 'Certified divers',
    season: 'Year-round',
    location: 'La Paz, Baja California Sur',
    title: {
      en: 'Diving - La Paz',
      es: 'Buceo en La Paz',
      fr: 'Plongée à La Paz'
    },
    summary: {
      en: 'A full-day La Paz dive experience with two tanks, professional guide, marine park logistics, and optional snorkeling packages.',
      es: 'Experiencia de día completo en La Paz con dos tanques, guía profesional, logística de parque marino y paquetes opcionales de snorkel.',
      fr: 'Journée complète de plongée à La Paz avec deux bouteilles, guide professionnel, logistique du parc marin et options snorkeling.'
    },
    highlights: {
      en: ['Sea of Cortez biodiversity', 'Flexible packages for private or small groups', 'Add rental gear or professional photographer'],
      es: ['Biodiversidad del Mar de Cortés', 'Paquetes flexibles para grupos privados o pequeños', 'Renta de equipo o fotógrafo profesional como add-on'],
      fr: ['Biodiversité de la mer de Cortés', 'Forfaits flexibles privés ou petits groupes', 'Location d’équipement ou photographe professionnel en option']
    },
    included: {
      en: ['Certified guide', 'Weights and tanks', 'Water and boat snack', 'Dock and marine park fees'],
      es: ['Guía certificado', 'Pesas y tanques', 'Agua y snack en bote', 'Cuotas de muelle y parque marino'],
      fr: ['Guide certifié', 'Plombs et bouteilles', 'Eau et snack à bord', 'Frais de quai et parc marin']
    },
    faqs: {
      en: [{ q: 'Is rental gear included?', a: 'Rental gear is available as an add-on through WeTravel.' }],
      es: [{ q: '¿La renta de equipo está incluida?', a: 'La renta de equipo está disponible como add-on en WeTravel.' }],
      fr: [{ q: 'La location d’équipement est-elle incluse?', a: 'Elle est disponible en option via WeTravel.' }]
    }
  },
  {
    slug: 'diving-la-ventana',
    category: 'diving',
    serviceType: {
      en: 'Full day expedition',
      es: 'Expedición de día completo',
      fr: 'Expédition journée complète'
    },
    featured: true,
    image: '/assets/mobula-snorkel.jpg',
    badge: 'Manta ray expedition',
    bookingUrl: 'https://www.wetravel.com/trips/diving-la-ventana-hammerhead-divers-33684148',
    priceFrom: 'From $310 USD',
    duration: '10 hours',
    groupSize: 'Small groups',
    level: 'Certified divers',
    season: 'Best for manta encounters',
    location: 'La Ventana, Baja California Sur',
    title: {
      en: 'Diving - La Ventana',
      es: 'Buceo en La Ventana',
      fr: 'Plongée à La Ventana'
    },
    summary: {
      en: 'Adventure dive expedition around Cerralvo Island with two dives, beach lunch, and the chance to encounter giant manta rays.',
      es: 'Expedición de buceo alrededor de Isla Cerralvo con dos inmersiones, comida en playa y posibilidad de ver mantas gigantes.',
      fr: 'Expédition de plongée autour de l’île Cerralvo avec deux plongées, déjeuner sur la plage et possibilité de voir des raies mantas géantes.'
    },
    highlights: {
      en: ['Cerralvo Island dive sites', 'Giant manta ray potential', 'Lunch on the beach after diving'],
      es: ['Sitios de buceo de Isla Cerralvo', 'Posibilidad de mantas gigantes', 'Comida en playa después de bucear'],
      fr: ['Sites de plongée de l’île Cerralvo', 'Possibilité de raies mantas géantes', 'Déjeuner sur la plage après la plongée']
    },
    included: {
      en: ['Certified guide', 'Weights and tanks', 'Beverage, lunch and boat snack', 'Dock and marine park fees'],
      es: ['Guía certificado', 'Pesas y tanques', 'Bebida, comida y snack en bote', 'Cuotas de muelle y parque marino'],
      fr: ['Guide certifié', 'Plombs et bouteilles', 'Boisson, déjeuner et snack à bord', 'Frais de quai et parc marin']
    },
    faqs: {
      en: [{ q: 'How long is the expedition?', a: 'The WeTravel listing describes this trip as a 10-hour experience.' }],
      es: [{ q: '¿Cuánto dura la expedición?', a: 'El tour en WeTravel está descrito como una experiencia de 10 horas.' }],
      fr: [{ q: 'Combien de temps dure l’expédition?', a: 'La fiche WeTravel indique une expérience de 10 heures.' }]
    }
  },
  {
    slug: 'gordo-banks-diving',
    category: 'wildlife',
    serviceType: {
      en: 'Advanced diving',
      es: 'Buceo avanzado',
      fr: 'Plongée avancée'
    },
    featured: true,
    image: '/assets/hammerheads-blue.jpg',
    badge: 'Advanced pelagic dive',
    bookingUrl: 'https://www.wetravel.com/users/hammerhead-divers-819f19ad-d03f-43b3-98e6-896a88ca9748',
    priceFrom: 'Check availability',
    duration: 'Full day',
    groupSize: 'Max 4 divers per guide',
    level: 'Advanced divers',
    season: 'June-November',
    location: 'Gordo Banks, Los Cabos',
    title: {
      en: 'Gordo Banks Hammerhead Diving',
      es: 'Buceo con martillos en Gordo Banks',
      fr: 'Plongée requins-marteaux à Gordo Banks'
    },
    summary: {
      en: 'Advanced offshore diving at one of Baja’s iconic sites, known for scalloped hammerheads, pelagic encounters, and blue-water conditions.',
      es: 'Buceo avanzado mar adentro en uno de los sitios icónicos de Baja, conocido por tiburones martillo, pelágicos y condiciones de azul profundo.',
      fr: 'Plongée avancée au large sur l’un des sites iconiques de Baja, réputé pour les requins-marteaux et les rencontres pélagiques.'
    },
    highlights: {
      en: ['Scalloped hammerhead potential', 'Advanced blue-water dive', 'Premium small-group operation'],
      es: ['Posibilidad de tiburón martillo', 'Buceo avanzado en azul profundo', 'Operación premium de grupos pequeños'],
      fr: ['Possibilité de requins-marteaux', 'Plongée avancée en pleine eau', 'Opération premium en petits groupes']
    },
    included: {
      en: ['Professional dive guide', 'Trip planning based on conditions', 'Small-group safety focus'],
      es: ['Guía profesional', 'Planeación según condiciones', 'Enfoque de seguridad en grupo pequeño'],
      fr: ['Guide professionnel', 'Planification selon les conditions', 'Sécurité en petit groupe']
    },
    faqs: {
      en: [{ q: 'Is this for beginners?', a: 'No. Gordo Banks is best positioned for advanced certified divers.' }],
      es: [{ q: '¿Es para principiantes?', a: 'No. Gordo Banks se recomienda para buzos certificados avanzados.' }],
      fr: [{ q: 'Est-ce adapté aux débutants?', a: 'Non. Gordo Banks est recommandé aux plongeurs certifiés avancés.' }]
    }
  },
  {
    slug: 'cabo-pulmo-expedition',
    category: 'wildlife',
    serviceType: {
      en: 'Full day expedition',
      es: 'Expedición de día completo',
      fr: 'Expédition journée complète'
    },
    image: '/assets/cabo-pulmo-fish.jpg',
    badge: 'UNESCO-style reef adventure',
    bookingUrl: 'https://www.wetravel.com/users/hammerhead-divers-819f19ad-d03f-43b3-98e6-896a88ca9748',
    priceFrom: 'Ask availability',
    duration: 'Full day',
    groupSize: 'Small groups',
    level: 'Divers or snorkelers',
    season: 'Best by conditions',
    location: 'Cabo Pulmo, Baja California Sur',
    title: {
      en: 'Cabo Pulmo Expedition',
      es: 'Expedición a Cabo Pulmo',
      fr: 'Expédition à Cabo Pulmo'
    },
    summary: {
      en: 'Full-day ocean expedition to one of Baja’s most celebrated reef areas, known for big schools of fish and rich marine biodiversity.',
      es: 'Expedición de día completo a una de las zonas de arrecife más reconocidas de Baja, famosa por cardúmenes y biodiversidad.',
      fr: 'Expédition journée complète vers l’une des zones récifales les plus réputées de Baja, connue pour ses bancs de poissons.'
    },
    highlights: {
      en: ['Full-day expedition logistics', 'Large schools of fish', 'Diving or snorkeling options depending on conditions'],
      es: ['Logística de día completo', 'Grandes cardúmenes', 'Opciones de buceo o snorkel según condiciones'],
      fr: ['Logistique journée complète', 'Grands bancs de poissons', 'Options plongée ou snorkeling selon conditions']
    },
    included: {
      en: ['Expedition planning', 'Professional guide coordination', 'Condition-based itinerary'],
      es: ['Planeación de expedición', 'Coordinación con guía profesional', 'Itinerario según condiciones'],
      fr: ['Planification expédition', 'Coordination guide professionnel', 'Itinéraire selon conditions']
    },
    faqs: {
      en: [{ q: 'Is Cabo Pulmo always available?', a: 'Availability depends on dates, group size, and marine conditions. Confirm through WhatsApp before booking.' }],
      es: [{ q: '¿Cabo Pulmo siempre está disponible?', a: 'Depende de fechas, grupo y condiciones marinas. Confirma por WhatsApp antes de reservar.' }],
      fr: [{ q: 'Cabo Pulmo est-il toujours disponible?', a: 'Cela dépend des dates, du groupe et des conditions. Confirmez sur WhatsApp avant de réserver.' }]
    }
  },
  {
    slug: 'padi-courses-cabo',
    category: 'course',
    serviceType: {
      en: 'PADI courses',
      es: 'Cursos PADI',
      fr: 'Cours PADI'
    },
    featured: false,
    image: '/assets/turtle.jpg',
    badge: 'Start your certification',
    bookingUrl: 'https://www.wetravel.com/users/hammerhead-divers-819f19ad-d03f-43b3-98e6-896a88ca9748',
    priceFrom: 'From $250 USD',
    duration: '1-4 days',
    groupSize: 'Private or small group',
    level: 'Beginner to advanced',
    season: 'Year-round',
    location: 'Cabo San Lucas',
    title: {
      en: 'PADI Courses in Cabo',
      es: 'Cursos PADI en Cabo',
      fr: 'Cours PADI à Cabo'
    },
    summary: {
      en: 'Discover Scuba, Open Water, Advanced and specialty courses with trilingual PADI instructors.',
      es: 'Discover Scuba, Open Water, Advanced y especialidades con instructores PADI trilingües.',
      fr: 'Discover Scuba, Open Water, Advanced et spécialités avec instructeurs PADI trilingues.'
    },
    highlights: {
      en: ['Trilingual PADI instructors', 'Private instruction options', 'Clear progression path'],
      es: ['Instructores PADI trilingües', 'Opciones privadas', 'Ruta clara de certificación'],
      fr: ['Instructeurs PADI trilingues', 'Options privées', 'Parcours de certification clair']
    },
    included: {
      en: ['Instructor guidance', 'Course planning', 'Safety-first learning environment'],
      es: ['Acompañamiento del instructor', 'Planeación del curso', 'Ambiente seguro de aprendizaje'],
      fr: ['Accompagnement instructeur', 'Planification du cours', 'Environnement d’apprentissage sécuritaire']
    },
    faqs: {
      en: [{ q: 'Can beginners start here?', a: 'Yes. Discover Scuba and Open Water are designed for new divers.' }],
      es: [{ q: '¿Pueden empezar principiantes?', a: 'Sí. Discover Scuba y Open Water están pensados para nuevos buzos.' }],
      fr: [{ q: 'Les débutants peuvent-ils commencer ici?', a: 'Oui. Discover Scuba et Open Water sont conçus pour les débutants.' }]
    }
  }
];

export const wildlife = [
  { name: 'Whale Sharks', season: 'December-April', slug: 'whale-shark-tour-la-paz', image: '/assets/whale-shark-hero.jpg' },
  { name: 'Humpback Whales', season: 'November-April', slug: 'humpback-whale-season-cabo', image: '/assets/whale-breach.jpg' },
  { name: 'Mobula Rays', season: 'March-July', slug: 'mobula-rays-baja', image: '/assets/mobula-snorkel.jpg' },
  { name: 'Hammerhead Sharks', season: 'June-November', slug: 'gordo-banks-diving', image: '/assets/hammerhead-shark.jpg' }
];

export const gallery = [
  { src: '/assets/whale-shark-hero.jpg', alt: 'Whale shark underwater in Baja California Sur' },
  { src: '/assets/scuba-group.jpg', alt: 'Small group scuba diving in clear Cabo waters' },
  { src: '/assets/mobula-snorkel.jpg', alt: 'Snorkeler with mobula rays' },
  { src: '/assets/turtle.jpg', alt: 'Sea turtle underwater' },
  { src: '/assets/arch-cabo.jpg', alt: 'The Arch in Cabo San Lucas from the water' },
  { src: '/assets/snowflake-moray.jpg', alt: 'Snowflake moray eel in coral' }
];
