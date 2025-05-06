import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)',
        roboto: 'var(--font-roboto'
      }
    },
  },
  plugins: [],
};

export default config;
