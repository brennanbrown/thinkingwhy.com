import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const site = context.site?.toString() || 'https://thinkingwhy.com';

  return rss({
    title: 'ThinkingWhy — Latest Articles',
    description: 'Authoritative essays and guides across AI, marketing, finance, health, and more.',
    site,
    items: posts
      .sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime())
      .map((post) => ({
        link: `/blog/${post.slug}`,
        title: post.data.title,
        pubDate: new Date(post.data.pubDate),
        description: post.data.description,
      })),
  });
}
