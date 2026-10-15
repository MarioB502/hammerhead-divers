import { text } from './approved-copy';
import type { Lang } from './site';

export const articleKey = (post: { slug: string }) => post.slug.split('/').pop()!;

export const blogImages: Record<string, string> = {
  'best-time-to-dive-in-cabo': '/assets/scuba-group.jpg',
  'gordo-banks-hammerhead-diving': '/assets/hammerhead-shark.jpg',
  'whale-shark-tour-la-paz-guide': '/assets/whale-shark-hero.jpg'
};
const articleNumbers: Record<string, number> = {
  'best-time-to-dive-in-cabo': 1,
  'gordo-banks-hammerhead-diving': 2,
  'whale-shark-tour-la-paz-guide': 3
};
export const blogUI = {
  en: { stories: 'From the journal', latest: 'More from the ocean', featured: 'Featured story', read: 'Read article', back: 'All stories', contents: 'In this article', related: 'Keep exploring', published: 'Published', minutes: 'min read', planning: 'Your next ocean day starts here.', planningText: 'Explore our experiences or talk to our team to find the trip that fits your plans.', tours: 'Explore tours', contact: 'Talk to our team', team: 'Hammerhead Divers', label: 'Plan your ocean experience' },
  es: { stories: 'Desde el diario', latest: 'Más historias del océano', featured: 'Artículo destacado', read: 'Leer artículo', back: 'Todos los artículos', contents: 'En este artículo', related: 'Sigue explorando', published: 'Publicado', minutes: 'min de lectura', planning: 'Tu próximo día en el mar empieza aquí.', planningText: 'Explora nuestras experiencias o habla con nuestro equipo para encontrar la actividad que se ajuste a tus planes.', tours: 'Explorar tours', contact: 'Hablar con el equipo', team: 'Hammerhead Divers', label: 'Planea tu experiencia en el mar' },
  fr: { stories: 'Le journal', latest: 'Autres récits de l’océan', featured: 'À la une', read: 'Lire l’article', back: 'Tous les articles', contents: 'Dans cet article', related: 'Continuez à explorer', published: 'Publié le', minutes: 'min de lecture', planning: 'Votre prochaine journée en mer commence ici.', planningText: 'Découvrez nos activités ou contactez notre équipe pour trouver la sortie adaptée à vos envies.', tours: 'Découvrir les activités', contact: 'Contacter notre équipe', team: 'Hammerhead Divers', label: 'Préparez votre sortie en mer' }
};
export function postCopy(post: { slug: string; body: string; data: { title: string; description: string; category: string; pubDate: Date; lang: Lang } }, lang: Lang) {
  if (post.data.lang !== lang) throw new Error(`Blog language mismatch: ${post.slug} (${post.data.lang}) rendered as ${lang}`);
  const key = articleKey(post);
  const number = articleNumbers[key];
  const field = (suffix: string, fallback: string) => text(lang, 23, `Artículo ${number} – ${suffix}`, fallback);
  return {
    title: field('título', post.data.title), description: field('descripción', post.data.description),
    category: field('categoría', post.data.category),
    image: blogImages[key] ?? '/assets/arch-cabo.jpg',
    href: `${lang === 'en' ? '' : `/${lang}`}/blog/${key}/`,
    minutes: Math.max(1, Math.ceil(post.body.trim().split(/\s+/).length / 200)),
    date: new Intl.DateTimeFormat({ en: 'en-US', es: 'es-MX', fr: 'fr-FR' }[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(post.data.pubDate)
  };
}
