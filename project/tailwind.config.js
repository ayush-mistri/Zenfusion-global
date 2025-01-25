/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 3s ease-out forwards', // Custom animation
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: 0,
            transform: 'translateY(40px)', // Start slightly below
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)', // End at normal position
          },
        },
      },
      colors: {
        // 'custom-blue': '#2C394B',
        // 'custom-gray': '#334756',
        // 'custom-dark': '#11151c',
      },
    },
  },
  plugins: [],
};
