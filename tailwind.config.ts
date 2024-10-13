import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkWhite: "#F3F3F3",
        mainBrown: "#7b3911",
        mainOrange: "#EE8C00",
        famintoGray: "#5E5E5E",
        lightGray: "rgb(208, 206, 206)",
        lightYellow: "#f3f3d5"
      },
      fontFamily: {
        famintoLogo: ["Radio Canada", "sans-serif"],
        main: "Lato, sans-serif"
      }
    },
  },
  plugins: [],
};
export default config;
