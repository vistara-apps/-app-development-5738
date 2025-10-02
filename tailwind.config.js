/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'warm-brown': '#8B4513',
        'cream': '#F5F5DC',
        'peach': '#FFCBA4',
        'rose': '#FFB6C1',
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #8B4513 0%, #CD853F 25%, #F4A460 50%, #DEB887 75%, #F5DEB3 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(139, 69, 19, 0.8) 0%, rgba(205, 133, 63, 0.7) 50%, rgba(222, 184, 135, 0.6) 100%)',
      }
    },
  },
  plugins: [],
}