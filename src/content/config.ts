import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    lang: z.enum(['en', 'es', 'fr']).default('en'),
    category: z.string(),
    keywords: z.array(z.string()).default([])
  })
});

export const collections = { blog };
