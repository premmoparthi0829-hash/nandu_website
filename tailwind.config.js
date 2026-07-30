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
        luxury: {
          bg: "#090909",
          card: "#151515",
          cardHover: "#1F1F1F",
          border: "#262626",
          accent: "#88D900", // Vibrant Lime Green (Image 2)
          lime: "#88D900",
          pink: "#F472B6", // Fashion Pink (Image 2)
          accentGlow: "rgba(136, 217, 0, 0.3)",
          accentSoft: "rgba(136, 217, 0, 0.12)",
          muted: "#9CA3AF",
          subtle: "#6B7280"
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        button: ['"Manrope"', 'sans-serif'],
      },
      borderRadius: {
        '3xl': '30px',
        'luxury': '30px',
      },
      boxShadow: {
        'lime-glow': '0 0 30px rgba(136, 217, 0, 0.3)',
        'pink-glow': '0 0 30px rgba(244, 114, 182, 0.3)',
        'card-glow': '0 20px 40px rgba(0, 0, 0, 0.8)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
