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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2b3647",
        secondary: "#FFC000",
        tertiary: "#91969d",
        hoverYellow: "#F9F871",
        hoverGreen: "#8EDB81",
        bgGreen: "#29B594",
      },
    },
  },
  plugins: [],
};
export default config;
