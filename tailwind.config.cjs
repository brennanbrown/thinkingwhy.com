module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f766e',
          light: '#0d9488',
          dark: '#115e59',
        },
        secondary: {
          DEFAULT: '#ea580c',
          light: '#fb923c',
          dark: '#c2410c',
        },
        accent: {
          DEFAULT: '#7c3aed',
          light: '#8b5cf6',
          dark: '#6d28d9',
        },
      },
      fontFamily: {
        heading: ['Crimson Text', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.800'),
            a: {
              color: theme('colors.secondary.DEFAULT'),
              '&:hover': { color: theme('colors.secondary.dark') },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.primary.dark'),
              fontFamily: 'Crimson Text, serif',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.slate.200'),
            a: {
              color: theme('colors.secondary.light'),
              '&:hover': { color: theme('colors.secondary.DEFAULT') },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.teal.200'),
            },
          },
        },
      }),
      screens: {
        xs: '475px'
      },
      spacing: {
        18: '4.5rem',
        88: '22rem'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
};
