/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0E131F',
        'medium-blue': '#38405F',
        'light-purple': '#59546C',
        'light-gray': '#8B939C',
        'accent-red': '#FF0035',
      },
    },
  },
  plugins: [],
}

