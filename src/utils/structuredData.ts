// src/utils/structuredData.ts
export function generateArticleSchema(post: any, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": {
      "@type": "ImageObject",
      "url": post.heroImage.src,
      "alt": post.heroImage.alt
    },
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.credentials,
      "description": post.author.bio
    },
    "publisher": {
      "@type": "Organization",
      "name": "ThinkingWhy",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": post.pubDate.toISOString(),
    "dateModified": post.updatedDate?.toISOString() || post.pubDate.toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
