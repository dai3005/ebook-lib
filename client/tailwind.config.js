/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '500px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
};
