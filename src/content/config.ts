import { defineCollection, z } from 'astro:content';

const thinking = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    eyebrow: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
    readTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  thinking,
};