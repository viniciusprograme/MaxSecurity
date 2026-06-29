import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // enables manual toggle via class
  content: [
    './src/**/*.{js,ts,tsx,jsx}',
    './app/**/*.{js,ts,tsx,jsx}',
    './components/**/*.{js,ts,tsx,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(210, 40%, 95%)',
          100: 'hsl(210, 40%, 90%)',
          200: 'hsl(210, 40%, 80%)',
          300: 'hsl(210, 40%, 70%)',
          400: 'hsl(210, 40%, 60%)',
          500: 'hsl(210, 40%, 50%)', // main blue
          600: 'hsl(210, 40%, 40%)',
          700: 'hsl(210, 40%, 30%)',
          800: 'hsl(210, 40%, 20%)',
          900: 'hsl(210, 40%, 15%)',
        },
        success: '#22c55e', // green
        warning: '#eab308', // yellow
        danger: '#ef4444', // red
      },
      spacing: {
        4: '1rem',
        8: '2rem',
        12: '3rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
