/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'city': "url('https://raw.githubusercontent.com/adrianhajdin/advice_app/master/src/images/city.jpg')",
        'city-dark': "url('https://www.pixel4k.com/wp-content/uploads/2018/09/road-traffic-skyscrapers-manhattan-new-york-4k_1538068465.jpg.webp')",
        
      }
    },
  },
  plugins: [],
}

