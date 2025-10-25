import { defineCollection, z } from 'astro:content';

// Single 'blog' collection with relaxed schema for migration compatibility.
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    author: z.union([
      z.string(),
      z.object({
        name: z.string(),
        credentials: z.string().optional(),
        bio: z.string().optional(),
        image: z.string().optional(),
        socialLinks: z
          .array(
            z.object({
              platform: z.string(),
              url: z.string().url().or(z.string())
            })
          )
          .optional()
      })
    ]),

    category: z.string(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),

    heroImage: z.union([
      z.string(),
      z.object({
        src: z.string(),
        alt: z.string(),
        credit: z.string().optional()
      })
    ]),

    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        keywords: z.array(z.string()).optional(),
        focusKeyword: z.string().optional(),
        relatedKeywords: z.array(z.string()).optional()
      })
      .optional(),

    relatedPosts: z.array(z.string()).optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).optional(),
    tableOfContents: z.boolean().optional(),
    enableAds: z.boolean().optional(),
    adDensity: z.string().optional(),
  })
});

// Authors collection for rich author profiles
const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    credentials: z.string().optional(),
    bio: z.string().optional(),
    image: z.string().optional(),
    socialLinks: z
      .array(
        z.object({
          platform: z.string(),
          url: z.string()
        })
      )
      .optional()
  })
});

export const collections = {
  blog,
  authors
};
