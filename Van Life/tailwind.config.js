/** @type {import('tailwindcss').Config} */
module.exports= {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage :{
        'tent' : 'url("./src/images/background.png")'  , 
        'vanNight' : 'url(./src/images/vanight.png)'
      },
      colors: {
        'ftColor' : '#252525',
        'btnColor' : '#FF8C38',
      }
    },
  },
  plugins: [],
}

