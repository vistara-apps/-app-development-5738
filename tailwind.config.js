/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(340, 15%, 4%)',
        text: 'hsl(340, 10%, 98%)',
        accent: 'hsl(24, 95%, 53%)',
        border: 'hsl(340, 10%, 18%)',
        primary: 'hsl(340, 82%, 52%)',
        success: 'hsl(142, 71%, 45%)',
        surface: 'hsl(340, 10%, 10%)',
        warning: 'hsl(38, 92%, 50%)',
        'text-muted': 'hsl(340, 5%, 65%)',
        'primary-hover': 'hsl(340, 82%, 42%)',
        'surface-hover': 'hsl(340, 10%, 14%)',
      },
      borderRadius: {
        'lg': '20px',
        'md': '12px',
        'sm': '6px',
      },
      boxShadow: {
        'card': '0 8px 32px hsla(340, 82%, 10%, 0.24)',
        'glow': '0 0 40px hsla(340, 82%, 52%, 0.3)',
        'card-hover': '0 12px 48px hsla(340, 82%, 10%, 0.32)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '40px',
      },
      animation: {
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}