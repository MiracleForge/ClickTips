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
        rickblack: '#00171f',
        PrussianBlue: '#003459',
        Cerulean: '#007ea7',
        PictonBlue: '#00a8e8' 
      },
    },
  },
  plugins: [],
};
export default config;
