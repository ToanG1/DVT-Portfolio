import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        preahvihear: ['Preahvihear', 'sans-serif'],
      },
      backgroundImage: {
          'gradient-1': 'linear-gradient(135deg, #200C3B 50%, #4A2F6B 85%, #674687 100%)',
          'gradient-2': 'linear-gradient(105deg, #200C3B 20%, #311C52 25%, #392061 30%, #311C52 38%, #1E0C37 45%)',
          'gradient-3': 'linear-gradient(110deg, #200C3B 10%, #311C52 15%, #392061 23%, #311C52 32%, #1E0C37 45%)',
          'gradient-4': 'linear-gradient(170deg, #200C3B 54%, #3A215F 72%, #6230B1 100%)',
          'radial-1': 'radial-gradient(ellipse, rgba(118, 60, 172, 1) 0%, rgba(50, 15, 133, 0) 60%)',
          'radial-2': 'radial-gradient(ellipse, #7b23e0 20%, rgba(50, 15, 133, 0) 60%)'
      },
      colors: {
        'dark-purple': '#11071F',
        'purple-1': '#7127BA',
        'purple-2': '#693B93',
        'purple-3': '#A362FF',
        'purple-4': '#9857D3',
        'purple-5': '#763CAC',
        'purple-6': '#1E0C37',
        'txt-primary': '#fff',
        'txt-secondary': '#CCD6F6',
        'company-bg': '#C71515',
      }
    },
  },
  plugins: [],
};
export default config;
