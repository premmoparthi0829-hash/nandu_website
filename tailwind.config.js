/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: "#52B788",
          light: "#74C69D",
          soft: "#D8F3DC",
          dark: "#2D6A4F",
          deep: "#1B4332",
          black: "#081C15",
        },
        cream: {
          DEFAULT: "#FFF9ED",
          card: "#FFF5E4",
          soft: "#FFFAEE",
          dark: "#F4EAD3",
        },
        coral: {
          DEFAULT: "#FF6B4A",
          light: "#FF8F75",
          soft: "#FFF0EC",
          dark: "#E85635",
        },
        accent: {
          DEFAULT: "#52B788",
          peach: "#FF987E",
          yellow: "#FFB84D",
          dark: "#2D6A4F"
        }
      },
      fontFamily: {
        heading: ['"Outfit"', '"Fredoka"', '"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', '"Fredoka"', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'serif'],
        editorial: ['"Instrument Serif"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Outfit"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'mint-glow': '0 20px 40px rgba(82, 183, 136, 0.25)',
        'soft-card': '0 15px 35px rgba(0, 0, 0, 0.06)',
        'luxury': '0 25px 60px -15px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [],
}
