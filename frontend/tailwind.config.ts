import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          primary: colors.gray[900],
          secondary: colors.gray[800],
          ternary: colors.gray[700],
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          primary: colors.white,
          secondary: colors.gray[300],
        },
        accent: {
          primary: colors.blue[500],
          secondary: colors.slate[600],
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
