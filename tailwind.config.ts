import type { Config } from "tailwindcss";
import colors, {black, transparent, white} from 'tailwindcss/colors';


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black,
        transparent,
        white,
        'primary': '#C5E5FF',
        'dark-blue': '#131D64',
        'light-blue': '#0067FF',
        'gray': '#EBEBEB'
      },
      backgroundImage: {
        'red': 'linear-gradient(to bottom, #EE1D32, #FE455E)',
		    'gray-gradient': 'linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 34%, #F2F2F2 68%, #D6D6D6 100%)'
      },
    },
  },
  plugins: [],
};
export default config;
