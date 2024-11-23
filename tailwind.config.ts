import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#212121",
        "secondary-bg": "rgba(250, 250, 250, 0.4)",
      },
      animation: {
        effect: "effect 60s ease infinite",
        glitch: "glitch 3s ease-in reverse infinite",
        "looping-tag": "loop 100s linear infinite",
        "bg-animation": "background-color 0.4s ease;",
      },
      keyframes: {
        effect: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        glitch: {
          "0%": {
            textShadow:
              "-2px 0 0 #fdff2a, -4px 0 0 #df4a42, 2px 0 0 #91fcfe, 4px 0 0 #4405fc",
          },
          "25%": {
            textShadow:
              "2px 0 0 #fdff2a, -2px 0 0 #df4a42, 4px 0 0 #91fcfe, -4px 0 0 #4405fc",
          },
          "50%": {
            textShadow:
              "-4px 0 0 #fdff2a, 4px 0 0 #df4a42, -2px 0 0 #91fcfe, 2px 0 0 #4405fc",
          },
          "75%": {
            textShadow:
              "4px 0 0 #fdff2a, 2px 0 0 #df4a42, -4px 0 0 #91fcfe, -2px 0 0 #4405fc",
          },
          "100%": {
            textShadow:
              "-2px 0 0 #fdff2a, -4px 0 0 #df4a42, 2px 0 0 #91fcfe, 4px 0 0 #4405fc",
          },
        },
        loop: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
