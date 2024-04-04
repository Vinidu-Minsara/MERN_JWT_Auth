/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-wisteria': {
          '50': '#fbf7fd',
          '100': '#f5eef9',
          '200': '#ecdff5',
          '300': '#ddc6ec',
          '400': '#d1afe4',
          '500': '#b37cd0',
          '600': '#9e5fbe',
          '700': '#884ba5',
          '800': '#724188',
          '900': '#5d366d',
          '950': '#3f1d4e',
        },
      }
    },
  },
  plugins: [
      require('daisyui')
  ],
}

