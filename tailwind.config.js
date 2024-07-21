/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color1": "#FADADD",
        "primary-color2": "#EC407A",
        "primary-color3": "#ffffff",
        "secondary-color1": "#333333",
        "secondary-color2": "#D2691E",
      },
      backgroundImage: {
        bgHome: "url('./hero-bg.jpg')",
        bgSection: "url('./src/assets/bgSection2.jpg')",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        dancingScript: ["Dancing Script", "cursive"],
        pacifico: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [
    // require("daisyui")
  ],
};
