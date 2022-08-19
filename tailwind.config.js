/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fill-16": "repeat(auto-fill, minmax(8rem, 1fr))",
        "fill-20": "repeat(auto-fill, minmax(5rem, 1fr))",
        // etc.
      },
    },
  },
  plugins: [],
};
