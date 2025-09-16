// tailwind.config.js

import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(0, 56, 168, 1)', // bleu alpine profond
        primaryLight: 'rgba(173, 216, 230, 1)', // bleu glace clair
        secondary: 'rgba(72, 149, 239, 1)', // bleu glacier lumineux
        ternary: 'rgba(255,255,255,255, 1)', // blanc
        accent: 'rgba(0, 119, 255, 1)', // bleu électrique
        background: 'rgba(245, 247, 250, 1)', // blanc cassé
        text: 'rgba(34, 34, 34, 1)', // gris foncé
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        title: ['Calibri', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
