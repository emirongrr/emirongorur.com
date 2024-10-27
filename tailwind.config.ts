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
      },
      animation: {
        effect: 'effect 60s ease infinite',
        glitch: 'glitch 3s ease-in reverse infinite',

      },
      keyframes: {
        effect: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glitch: {
          '0%': { textShadow: '-2px 0 0 #fdff2a, -4px 0 0 #df4a42, 2px 0 0 #91fcfe, 4px 0 0 #4405fc' },
          '25%': { textShadow: '2px 0 0 #fdff2a, -2px 0 0 #df4a42, 4px 0 0 #91fcfe, -4px 0 0 #4405fc' },
          '50%': { textShadow: '-4px 0 0 #fdff2a, 4px 0 0 #df4a42, -2px 0 0 #91fcfe, 2px 0 0 #4405fc' },
          '75%': { textShadow: '4px 0 0 #fdff2a, 2px 0 0 #df4a42, -4px 0 0 #91fcfe, -2px 0 0 #4405fc' },
          '100%': { textShadow: '-2px 0 0 #fdff2a, -4px 0 0 #df4a42, 2px 0 0 #91fcfe, 4px 0 0 #4405fc' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
