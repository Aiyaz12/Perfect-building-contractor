/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        brand: {
          dark: '#0b0b0b',
          accent: '#b38b59',
          muted: '#f5f5f2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 25px 60px rgba(15, 15, 15, 0.08)',
      },
    },
  },
  plugins: [],
}

