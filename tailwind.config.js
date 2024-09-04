/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        'xs': '372px',
      },
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     container: {
//       padding: {
//         DEFAULT: '1rem',
//         sm: '2rem',
//         lg: '4rem',
//         xl: '5rem',
//         '2xl': '6rem',
//       },
//     },
//   },
// };