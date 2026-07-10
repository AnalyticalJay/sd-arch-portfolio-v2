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
        primary: {
          green: '#13C46B',
          blue: '#1B8EFF',
        },
        body: '#64748B',
        border: '#E5E7EB',
        light: '#F8FAFC',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        '1440': '1440px',
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
        '128': '128px',
      },
    },
  },
  plugins: [],
}

