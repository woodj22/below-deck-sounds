
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      sand: "#face82",
      blue: "#222130",
      wetsand: "#debe87",
      lightblue: "#35D0C7",
      mintpinch: "#ADEDCC",
      moondist:"#FFF8EC",
    },
    border: {
      blue: ['2px solid #222130', '1px'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}
