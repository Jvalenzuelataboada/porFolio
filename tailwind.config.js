/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   'slide': 'slide 8s infinite linear'
      // },
      fontFamily: {
        Playfair: ['Poppins', 'sans-serif'],
        BacasimeAntique: ['Bacasime Antique', 'serif'],
        Roboto: ['Roboto Slab', 'serif'],
      },
      keyframes: {
        // 'slide': {
        //   '0%': {transform:'translateX(-100%)'},
        //   '1%': {transform:'opacity(0)'},
        //   '99%': {transform:'opacity(0)'},
        //   '100%': {transform:'translateX(100%)'}
        // }
      }
    }
  },
  plugins: [],
}

