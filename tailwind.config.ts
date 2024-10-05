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
        mainBrown: "#7b3911",
        mainOrange: "#EE8C00",
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
