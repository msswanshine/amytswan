import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: "#505050",
        blue: "#4A90E2",
        purple: "#9013FE",
        green: "#13FE90",
        gold: "#D4AF37"
      },
    },
  },
  plugins: [],
} satisfies Config;
