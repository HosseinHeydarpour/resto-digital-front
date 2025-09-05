/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-teal": "hsl(180, 44%, 17%)",
        "light-green": "hsl(104, 40%, 71%)",
        "light-gray": "hsl(0, 0%, 96%)",
      },
    },
  },
  plugins: [],
};
