import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        surface: "#161616",
        "surface-2": "#1e1e1e",
        primary: "#e85d04",
        "primary-dark": "#c94e00",
        gold: "#f7a521",
        "gold-light": "#ffd166",
        muted: "#999999",
        border: "#282828",
        menu: "#e0e0e0",
      },
      fontFamily: {
        heading: ["var(--font-exo2)", "sans-serif"],
        body: ["var(--font-exo2)", "sans-serif"],
      },
      maxWidth: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
