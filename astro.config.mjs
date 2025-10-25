import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://thinkingwhy.com',
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true,
  }),
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      customPages: [
        'https://thinkingwhy.com/about',
        'https://thinkingwhy.com/contact',
        'https://thinkingwhy.com/privacy-policy',
        'https://thinkingwhy.com/terms-of-service',
      ],
    }),
    partytown({
      config: {
        forward: ['gtag', 'adsbygoogle']
      }
    })
  ],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    },
    define: {
      'import.meta.env.PUBLIC_GA_ID': JSON.stringify(process.env.PUBLIC_GA_ID),
      'import.meta.env.PUBLIC_ADSENSE_ID': JSON.stringify(process.env.PUBLIC_ADSENSE_ID),
      'import.meta.env.ENV': JSON.stringify(process.env.ENV)
    }
  }
});
