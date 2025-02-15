/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner:"url('/src/assets/home/banner.jpg')",
        featured:"url('/src/assets/home/featured.jpg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


// module.exports = withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//             backgroundImage:{
//         banner:"url('/src/assets/home/banner.jpg')",
//         featured:"url('/src/assets/home/featured.jpg')"
//       }
//     },
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// });
