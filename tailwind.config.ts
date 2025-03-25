import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: "#808080",
        blue: "#4A90E2",
        purple: "#9013FE",
        green: "#13FE90"
      },
    },
  },
  plugins: [],
} satisfies Config;
