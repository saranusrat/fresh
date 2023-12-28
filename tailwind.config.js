/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "container": "1316px",
      },
      fontFamily: {
        'podkova': ['Podkova'],
        'frank': ['Frank Ruhl Libre'],
        'poppin': ['Poppins'],
      },
      colors: {
        'backGround': '#FAE3B6',
        'hovarColor': '#FDBB57',
        'borderColor': '#FFD687',
        'fashionColor': '#FEECC8',
        'productColor': '#CFA485',
      },
      borderRadius: {
        'borderRadius': '20px',
      },
      fontSize: {
        'bigHeading': '64px',
        'pragraph': '22px',
      
      },
    },
  },
  plugins: [],
}
