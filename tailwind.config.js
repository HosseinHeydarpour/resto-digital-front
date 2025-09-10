/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "dark-teal": "hsl(180, 44%, 17%)",
        "light-green": "hsl(104, 40%, 71%)",
        "normal-gray": "hsl(182, 14%, 38%)",
        "light-gray": "hsl(0, 0%, 96%)",
        "account-color": "#ffa600",
        "main-background": "hsl(0, 0%, 96%)",
      },
      fontSize: {
        xxs: "0.625rem", // use text-xxs
      },
      fontWeight: {
        550: "550",
      },
    },
  },
  plugins: [],
};
