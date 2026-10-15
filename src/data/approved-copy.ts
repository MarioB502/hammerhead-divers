import content from './approved-copy.json';
import type { Lang } from './site';
import type { Tour } from './tours';
const approved = content as Record<Lang, Record<string, Record<string, string>>>;
export const text = (lang: Lang, table: number, field: string, fallback: string) => approved[lang][table]?.[field] ?? fallback;
const names: Record<string, string> = {
 'marine-park-diving': 'Marine Park', 'corridor-diving': 'Corridor', 'hidden-gems-diving': 'Hidden Gems',
 'snorkeling-cabo': 'Cabo Snorkeling', 'diving-la-paz': 'La Paz', 'diving-la-ventana': 'La Ventana',
 'gordo-banks-diving': 'Gordo Banks', 'cabo-pulmo-expedition': 'Cabo Pulmo', 'padi-courses-cabo': 'PADI Courses'
};
export function cardCopy(tour: Tour, lang: Lang, featured = false) {
 const table = featured ? 11 : 21;
 const name = names[tour.slug];
 const field = (suffix: string, fallback: string) => text(lang, table, `${name} – ${suffix}`, fallback);
 return {
  title: field('título', tour.title[lang]), summary: field('descripción', tour.summary[lang]),
  badge: field('badge', tour.badge), category: field(featured ? 'tipo' : 'categoría', tour.serviceType[lang]),
  meta: field('datos', [tour.priceFrom, tour.duration, tour.groupSize, tour.level].join(' · ')).split(' · '),
  actions: field('CTAs', 'View details · WhatsApp').split(' · ')
 };
}
export const sightingNote: Record<Lang, string> = {
 es: '*La presencia de tiburones martillo y los avistamientos dependen de las condiciones naturales y no están garantizados. Consulta la disponibilidad y las condiciones del viaje antes de reservar.',
 fr: '*La présence de requins-marteaux et les observations dépendent des conditions naturelles et ne sont pas garanties. Contactez-nous pour connaître les disponibilités et les conditions de la sortie avant de réserver.',
 en: '*Hammerhead shark presence and sightings depend on natural conditions and are not guaranteed. Contact us to check trip availability and conditions before booking.'
};
