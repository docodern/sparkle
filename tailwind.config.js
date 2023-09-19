const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
        'oswald': ['Oswald', ...defaultTheme.fontFamily.serif]
      },
      screens: {
        'xl': '1366px'
      },
      colors: {
        'night': '#2F4858',
        'orange': '#FFA800',
        'darkOrange': '#FF8A00',
        'yellow': '#FFDA16'
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
