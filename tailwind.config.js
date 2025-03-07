module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // Update for App Router
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          moraba: ['fontMoraba', 'serif'], // Moraba for headings
          yekan: ['FontYekan', 'sans-serif'], // Yekan for body text
        },
      },
    },
    plugins: [],
  }
  