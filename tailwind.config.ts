import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        surface: "#1a3da6",
        "surface-2": "#0f2462",
        primary: "#1a3da6",
        "primary-dark": "#0f2462",
        secondary: "#0f2462",
        body: "#ffffff",
        text: "#444444",
        "deposit-start": "#007b15",
        "deposit-end": "#138e00",
        "withdrawal-start": "#7b0000",
        "withdrawal-end": "#d10000",
        accent: "#ffc107",
        gold: "#ffc107",
        "gold-light": "#ffd740",
        muted: "#6c757d",
        border: "#dee2e6",
        menu: "#ffffff",
        "menu-hover": "#0f2462",
      },
      fontFamily: {
        heading: ["var(--font-lato)", "sans-serif"],
        body: ["var(--font-lato)", "sans-serif"],
        sans: ["var(--font-lato)", "sans-serif"],
      },
      maxWidth: {
        container: "1400px",
      },
    },
  },
  plugins: [],
};

export default config;
