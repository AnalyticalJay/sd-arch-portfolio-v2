/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#07111C',
          dark: '#07111C',
          medium: '#0F1E33',
        },
        'primary-green': '#13C46B',
        'accent-blue': '#1B8EFF',
        'primary': '#13C46B',
        'accent': '#1B8EFF',
        body: '#64748B',
        border: '#E5E7EB',
        light: '#F8FAFC',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['4.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h2': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1440px',
      },
      screens: {
        '3xl': '1920px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
