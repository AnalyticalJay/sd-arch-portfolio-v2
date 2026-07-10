/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      // Color Palette - Premium Enterprise
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
      
      // Typography - Premium Hierarchy
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      
      fontSize: {
        // Heading Sizes
        'h1': ['3.5rem', { lineHeight: '1.2', fontWeight: '800' }],
        'h2': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h6': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        
        // Body Sizes
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-md': ['1rem', { lineHeight: '1.625' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      
      // Spacing System - 8pt Grid
      spacing: {
        '0': '0',
        '1': '0.125rem',
        '2': '0.25rem',
        '4': '0.5rem',
        '6': '0.75rem',
        '8': '1rem',
        '12': '1.5rem',
        '16': '2rem',
        '20': '2.5rem',
        '24': '3rem',
        '28': '3.5rem',
        '32': '4rem',
        '36': '4.5rem',
        '40': '5rem',
        '44': '5.5rem',
        '48': '6rem',
        '52': '6.5rem',
        '56': '7rem',
        '60': '7.5rem',
        '64': '8rem',
        '72': '9rem',
        '80': '10rem',
        '88': '11rem',
        '96': '12rem',
        '104': '13rem',
        '112': '14rem',
        '120': '15rem',
        '128': '16rem',
      },
      
      // Container Sizes
      maxWidth: {
        'container': '1440px',
        '1440': '1440px',
      },
      
      // Responsive Breakpoints
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      
      // Shadows - Enterprise Grade
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'none': 'none',
      },
      
      // Border Radius - Consistent Rounding
      borderRadius: {
        'none': '0',
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        'full': '9999px',
      },
      
      // Transitions & Animations
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
