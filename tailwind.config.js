/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Observa todos os arquivos na pasta src
  ],
  theme: {
    extend: {
      colors: {
        violetaEscuro: '#2a0044', // Cor violeta escura personalizada
      },
    },
  },
  plugins: [],
};