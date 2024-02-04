/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary":"#0B0D17",
        "secondary":"#D0D6F9",
        "whithe":"#FFFFFF",
        "gray":"#ACACAC",
      },
      backgroundImage:{
        "home-mobil":"url('/space-tourism/starter-code/assets/home/background-home-mobile.jpg')",
        "home-tablet":"url('/space-tourism/starter-code/assets/home/background-home-tablet.jpg')",
        "home-desktop":"url('/space-tourism/starter-code/assets/home/background-home-desktop.jpg')",
        "destiantion-mobil":"url('/space-tourism/starter-code/assets/destination/background-destination-mobile.jpg')",
        "destiantion-tablet":"url('/space-tourism/starter-code/assets/destination/background-destination-tablet.jpg')",
        "destiantion-desktop":"url('/space-tourism/starter-code/assets/destination/background-destination-desktop.jpg')",
        "crew-mobil":"url('/space-tourism/starter-code/assets/crew/background-crew-mobile.jpg')",
        "crew-tablet":"url('/space-tourism/starter-code/assets/crew/background-crew-tablet.jpg')",
        "crew-desktop":"url('/space-tourism/starter-code/assets/crew/background-crew-desktop.jpg')",
        "technology-mobil":"url('/space-tourism/starter-code/assets/technology/background-technology-mobile.jpg')",
        "technology-tablet":"url('/space-tourism/starter-code/assets/technology/background-technology-tablet.jpg')",
        "technology-desktop":"url('/space-tourism/starter-code/assets/technology/background-technology-desktop.jpg')",
      },
      fontFamily:{
        'font-primary': 'Bellefair , serif',
      }
    },
  },
  plugins: [],
}
