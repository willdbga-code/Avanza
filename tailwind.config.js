/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        avanza: {
          ocean: '#008DCD',
          cyan: '#00C2FF',
          rocket: '#009BCC',
          poolside: '#69C9F2',
          teal: '#005A7A',
          ink: '#000000',
          paper: '#FFFFFF',
          dark: '#141A1E',
        },
        'grey-dark': '#1E1E1E',
        'grey-light': '#D9D9D9',
      },
      fontFamily: {
        sans: ['"Manrope"', '"Segoe UI Variable"', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
