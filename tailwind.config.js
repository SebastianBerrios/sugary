/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-pink": "#CF6382",
        "soft-gray": "#F0F0F0",
      },
      boxShadow: {
        basic: "0px 0px 3px 3px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        "tt-travels-next": ["tt-travels-next", "sans-serif"],
      },
    },
  },
  plugins: [],
};
