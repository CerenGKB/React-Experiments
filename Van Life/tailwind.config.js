/** @type {import('tailwindcss').Config} */
module.exports= {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage :{
        'tent' : 'url("./images/background.png")'  , 
      },
      colors: {
        'ftColor' : '#252525',
        'btnColor' : '#FF8C38',
      }
    },
  },
  plugins: [],
}

