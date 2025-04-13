/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Ensure your files are scanned
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")]
};

  
  