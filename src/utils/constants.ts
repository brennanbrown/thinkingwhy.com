export const SITE_NAME = 'Multi-Niche Authority Blog';
export const SITE_DESCRIPTION = 'AI-optimized, AdSense-ready content across 14 high-CPM niches.';
export const ADSENSE_CLIENT_ID = 'ca-pub-0000000000000000';
export const NICHES = [
  'digital-marketing',
  'ai-technology',
  'personal-finance',
  'health-wellness',
  'online-education',
  'saas-reviews',
  'make-money-online',
  'insurance',
  'real-estate',
  'food-recipes',
  'cryptocurrency',
  'travel',
  'luxury-lifestyle',
  'automotive'
] as const;

type Niche = (typeof NICHES)[number];

interface NicheDetail {
  title: string;
  summary: string;
  cpmRange: string;
  searchVolume: string;
  aiPotential: 'High' | 'Very High' | 'Extremely High' | 'Medium' | 'Medium-High';
}

export const NICHE_DETAILS: Record<Niche, NicheDetail> = {
  'digital-marketing': {
    title: 'Digital Marketing & SEO',
    summary: 'Data-backed growth strategies, campaign case studies, and SEO playbooks optimized for AI citations.',
    cpmRange: '$12-25 CPM',
    searchVolume: '165K+ monthly searches',
    aiPotential: 'Very High'
  },
  'ai-technology': {
    title: 'AI & Technology',
    summary: 'In-depth tool comparisons, trend analysis, and implementation guides for rapidly evolving AI stacks.',
    cpmRange: '$7-15 CPM',
    searchVolume: '1M+ monthly searches',
    aiPotential: 'Extremely High'
  },
  'personal-finance': {
    title: 'Personal Finance & Investing',
    summary: 'Evidence-based investing frameworks, budgeting workflows, and product comparisons with high affiliate upside.',
    cpmRange: '$10-20 CPM',
    searchVolume: '300K+ monthly searches',
    aiPotential: 'Very High'
  },
  'health-wellness': {
    title: 'Health & Wellness',
    summary: 'Clinically sourced wellness guides, Q&A explainers, and preventative health playbooks for AI-friendly content.',
    cpmRange: '$5-12 CPM',
    searchVolume: '400K+ monthly searches',
    aiPotential: 'High'
  },
  'online-education': {
    title: 'Online Learning & Education',
    summary: 'Course reviews, curriculum breakdowns, and credential comparisons targeting lifelong learners and professionals.',
    cpmRange: '$8-18 CPM',
    searchVolume: '200K+ monthly searches',
    aiPotential: 'Very High'
  },
  'saas-reviews': {
    title: 'Software & SaaS Reviews',
    summary: 'Feature-by-feature SaaS comparisons, implementation walkthroughs, and ROI calculators for B2B stacks.',
    cpmRange: '$10-20 CPM',
    searchVolume: '150K+ monthly searches',
    aiPotential: 'Very High'
  },
  'make-money-online': {
    title: 'Blogging & Make Money Online',
    summary: 'Actionable monetization experiments, income reports, and funnel blueprints grounded in first-party data.',
    cpmRange: '$8-15 CPM',
    searchVolume: '100K+ monthly searches',
    aiPotential: 'High'
  },
  insurance: {
    title: 'Insurance & Financial Services',
    summary: 'Transparent policy comparisons, underwriting explainers, and lead-gen optimized calculators.',
    cpmRange: '$20-40 CPM',
    searchVolume: '500K+ monthly searches',
    aiPotential: 'High'
  },
  'real-estate': {
    title: 'Real Estate',
    summary: 'Local market snapshots, financing guides, and property investment frameworks for buyers and investors.',
    cpmRange: '$10-25 CPM',
    searchVolume: '250K+ monthly searches',
    aiPotential: 'Medium'
  },
  'food-recipes': {
    title: 'Food & Recipes',
    summary: 'Structured recipe collections, nutrition breakdowns, and culinary tutorials with schema-rich formatting.',
    cpmRange: '$6-12 CPM',
    searchVolume: '800K+ monthly searches',
    aiPotential: 'High'
  },
  cryptocurrency: {
    title: 'Cryptocurrency',
    summary: 'Beginner-friendly explainers, wallet comparisons, and regulatory updates for the digital asset ecosystem.',
    cpmRange: '$15-30 CPM',
    searchVolume: '300K+ monthly searches',
    aiPotential: 'High'
  },
  travel: {
    title: 'Travel & Accommodation',
    summary: 'Destination playbooks, hotel reviews, and itinerary templates tailored for AI query intent.',
    cpmRange: '$2-7 CPM',
    searchVolume: '500K+ monthly searches',
    aiPotential: 'High'
  },
  'luxury-lifestyle': {
    title: 'Luxury & Lifestyle',
    summary: 'High-ticket product reviews, experience guides, and aspirational lifestyle coverage with premium sponsors.',
    cpmRange: '$30-80 CPM',
    searchVolume: '50K+ monthly searches',
    aiPotential: 'Medium'
  },
  automotive: {
    title: 'Automotive',
    summary: 'Model comparisons, ownership cost breakdowns, and EV adoption analysis for informed car buyers.',
    cpmRange: '$4-8 CPM',
    searchVolume: '350K+ monthly searches',
    aiPotential: 'Medium-High'
  }
};

export const FEATURED_NICHES: Niche[] = [
  'digital-marketing',
  'ai-technology',
  'personal-finance',
  'saas-reviews',
  'insurance'
];

export type { Niche, NicheDetail };
