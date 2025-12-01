import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#424dae',
          50: '#eef0ff',
          100: '#e0e4ff',
          200: '#c7cdfe',
          300: '#a5abfc',
          400: '#8183f8',
          500: '#6366f1',
          600: '#424dae',
          700: '#2d3578',
          800: '#1e2350',
          900: '#0f1128',
        },
        accent: {
          DEFAULT: '#F8EA5D',
          light: '#faf2a0',
          dark: '#d4c94e',
        },
      },
      fontFamily: {
        gasoek: ['var(--font-gasoek)', 'sans-serif'],
        space: ['var(--font-space-grotesk)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
