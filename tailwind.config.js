/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 40px rgba(2, 6, 23, 0.25)',
      },
      colors: {
        brand: {
          DEFAULT: '#3b82f6',
          deep: '#2563eb',
        },
      },
    },
  },
  plugins: [],
}

