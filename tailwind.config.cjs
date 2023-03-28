/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        oldWhite: '#DCD7BA',
        boatYellow: '#BDAE93',
        fujiYellow: '#32302F',
        roninYellow: '#FF9E3B',
        winterYellow: '#3C3D3C',
        sumiInko: '#16161D',
        sumiInko1: '#1F1F28',
        winterRed: '#71322D',
        autumnRed: '#E6644C',
        winterGreen: '#4C4E31',
        autumnGreen: '#B2B553',
        gruvYellow: '#fabd2f'
      }
    }
  },
  plugins: []
}
