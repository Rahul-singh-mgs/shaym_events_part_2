/** @type {import('tailwindcss').Config} */
export default {
  content: [ // ✅ Correct key name
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',   // ✅ Fixed hex value
        darkTheme: '#11001F',
      },
      fontFamily: {
        OutFit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {              // ❌ Was `boxShodow`, should be `boxShadow`
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
      },
      gridTemplateColumns: {    // ❌ Fixing missing parenthesis
        auto: 'repeat(auto-fit, minmax(200px, 1fr))'
      },
    },
  },
  darkMode: 'class', // ✅ use `class` or `media` (not `selector`)
  plugins: [],
};
