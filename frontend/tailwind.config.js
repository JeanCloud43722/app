/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#b3eaff',
          500: '#00abec',
          600: '#0097d4',
          700: '#0082bb',
          900: '#004d70'
        },
        teal: {
          500: '#14b8a6',
          600: '#0d9488'
        },
        coral: {
          500: '#ff6b6b',
          600: '#ee5a52'
        },
        dark: {
          900: '#0a0a0b',
          800: '#1a1a1b',
          700: '#2a2a2b'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'system-ui', 'sans-serif']
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      backdropBlur: {
        '3xl': '64px'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'counter': 'counter 2s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 171, 236, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 171, 236, 0.6)' }
        }
      }
    },
  },
  plugins: [],
};
