import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),  // Changed to accept a date object
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    // Kept these as optional for future use
    description: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };