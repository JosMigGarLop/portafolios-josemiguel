/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        darkbg: '#061222'  // Fondo oscuro principal
      },
      fontFamily: {
        elegant: ['"Playfair Display"', 'serif'], // Para títulos
        sans: ['Inter', 'sans-serif'],            // Para párrafos
      }
    }
  },
  plugins: []
};
