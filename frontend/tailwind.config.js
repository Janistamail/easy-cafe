/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    './src/components/adminComp/*.{html,js}',
    './src/components/adminComp/**/*.{html,js}',
    './src/components/batenderComp/*.{html,js}',
    './src/components/batenderComp/**/*.{html,js}',
    './src/components/userComp/**/*.{html,js}',
    './src/components/userComp/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
