import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BFA181",
        background: "#FDFBF7",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Lato", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "scroll-bounce": "scroll-bounce 2s infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "scroll-left": "scroll-left 30s linear infinite",
        "ken-burns": "ken-burns 8s ease-in-out infinite alternate",
        "arrow-bounce": "arrow-bounce 2s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(6px)", opacity: "0.5" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "100%": { transform: "scale(1.15) translate(-2%, -2%)" },
        },
        "arrow-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
      transitionDelay: {
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
      },
    },
  },
  plugins: [],
};
export default config;

