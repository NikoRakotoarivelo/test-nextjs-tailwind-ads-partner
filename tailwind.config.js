/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: 'rgb(33, 45, 58)', // Couleur personnalisée
        grayLayout: 'rgb(236, 236, 236)', // Couleur du <body>
        colorButtonHeader: 'rgb(51, 146, 136)', // Couleur personnalisée du boutton sur header
        colorChoisissez: 'rgb(115, 28, 28)' // Couleur personnalisée sur le champs à choisissez
      },
    },
  },
  plugins: [],
};
