
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gold: "#DFA72F",
      blue: "#222130",
      lightblue: "#21c29a",
      moondist:"#DCDFCF",
      tan: "#955218"
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
