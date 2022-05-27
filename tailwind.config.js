module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: '#13100e',
        text: '#fdfdfd',
        titles: '#df1616',
        menu: '#222222',
        'span-yellow': '#f1a000',
      },
      screens: {
        // 'mobil': '640px',
        // 'tablet': '768px',
        // 'hd': '1024px',
        // 'laptop': '1400px',
        // 'desktop': '1536px',
        'mobil': {'max': '639px'},
        'tablet': {'max': '1023px'},
        'laptop': {'max': '1279'},
        'desktop': '1535px'
      },
      
    },
    fontFamily: {
      title: ['antonioregular', 'sand-seif'],
      body: ['Gotham-Light', 'sand-seif'],
    },
  },
  plugins: [],
}
