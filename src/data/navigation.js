export const navigation = [
  { 
    name: 'Home', 
    href: '/',
    icon: 'fa-home'
  },
  {
    name: 'Technology',
    href: '#',
    icon: 'fa-microchip',
    children: [
      { name: 'AI & Technology', href: '/ai-technology', icon: 'fa-robot' },
      { name: 'Software & SaaS Reviews', href: '/saas-reviews', icon: 'fa-cube' },
      { name: 'Cryptocurrency', href: '/cryptocurrency', icon: 'fa-coins' },
    ]
  },
  {
    name: 'Business',
    href: '#',
    icon: 'fa-briefcase',
    children: [
      { name: 'Digital Marketing & SEO', href: '/digital-marketing', icon: 'fa-chart-line' },
      { name: 'Make Money Online', href: '/make-money-online', icon: 'fa-money-bill-wave' },
      { name: 'Personal Finance', href: '/personal-finance', icon: 'fa-piggy-bank' },
      { name: 'Insurance', href: '/insurance', icon: 'fa-shield-alt' },
      { name: 'Real Estate', href: '/real-estate', icon: 'fa-home' },
    ]
  },
  {
    name: 'Lifestyle',
    href: '#',
    icon: 'fa-heart',
    children: [
      { name: 'Health & Wellness', href: '/health-wellness', icon: 'fa-heartbeat' },
      { name: 'Online Education', href: '/online-education', icon: 'fa-graduation-cap' },
      { name: 'Travel', href: '/travel', icon: 'fa-plane' },
      { name: 'Luxury Lifestyle', href: '/luxury-lifestyle', icon: 'fa-gem' },
      { name: 'Food & Recipes', href: '/food-recipes', icon: 'fa-utensils' },
      { name: 'Automotive', href: '/automotive', icon: 'fa-car' },
    ]
  },
  { 
    name: 'About', 
    href: '/about',
    icon: 'fa-info-circle'
  },
  { 
    name: 'Contact', 
    href: '/contact',
    icon: 'fa-envelope'
  },
];
