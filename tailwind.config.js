module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ['"Newsreader"', 'serif'],
        alumni: ['"Alumni Sans"', 'sans-serif'], // Corrected font name
      },
    },
  },
  plugins: [],
};
