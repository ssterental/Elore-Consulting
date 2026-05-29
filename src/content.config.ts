import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts live as Markdown in src/content/blog/.
// Front matter drives SEO/AEO/GEO: the 40-word `answer` block + `faqs` generate
// the AEO answer and FAQPage schema automatically on every post.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    primaryKeyword: z.string().optional(),
    cluster: z.string().optional(),
    persona: z.string().optional(),
    // ~40-word AEO answer block, rendered near the top + usable for snippets.
    answer: z.string().optional(),
    // Question/answer pairs -> on-page FAQ + FAQPage JSON-LD.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
