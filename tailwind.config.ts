import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0d0b14",
        cream: "#fff8e7",
        pop: {
          pink: "#ff2e88",
          yellow: "#ffe600",
          cyan: "#00e5ff",
          purple: "#9b5de5",
          lime: "#b6ff3b",
          orange: "#ff7a00",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        pop: "6px 6px 0 0 #0d0b14",
        "pop-lg": "10px 10px 0 0 #0d0b14",
        "pop-pink": "6px 6px 0 0 #ff2e88",
      },
      rotate: {
        "1.5": "1.5deg",
        "2.5": "2.5deg",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.4s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
