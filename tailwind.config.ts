import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: "translateX(0)" },
          '100%': { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        apparat: ["KMR Apparat", "sans-serif"],
        pxg: ["'PXG'", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;