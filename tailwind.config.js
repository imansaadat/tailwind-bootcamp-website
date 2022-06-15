/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      'white': '#ffffff',
      'black': '#333',
      'yellow': '#ffc107',
      'light': '#f8f9fa',
      'blue': '#0d6efd',
      'dark':'#212529',
      'gray':'#6C757D',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '3rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
