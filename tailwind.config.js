/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://wallpaperxyz.com/wp-content/uploads/Gif-Animated-Wallpaper-Background-Full-HD-Free-Download-for-PC-Macbook-261121-Wallpaperxyz.com-30.gif')",
      },
      fontFamily: {
        'custom': ['Rubik Mono One', 'monospace'],
        'kanit': ['Kanit','sans-serif'],
        'roboto': ['Roboto','sans-serif'],
        'sc-code': ['Source Code Pro', 'monospace'],
        'silk': ['Silkscreen', 'sans-serif']
      }
    },
  },
  plugins: [],
}
