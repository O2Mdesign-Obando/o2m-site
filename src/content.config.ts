import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const thinking = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/thinking' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    eyebrow: z.string(),
    excerpt: z.string(),
    publishDate: z.coerce.date(),
    readTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  thinking,
};