/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Order Paper design tokens — never hardcode these hex values in components
        paper:  '#FCFCFA',   // background — soft cool white
        red:    '#9E1B32',   // Chamber Red — claret/oxblood
        ink:    '#171512',   // primary text — warm near-black
        rule:   '#D8D2C4',   // hairline dividers, borders
        brass:  '#A6813C',   // rare accent — "carried"/highlight states only
        chalk:  '#6B6558',   // secondary/muted text
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.03em',
        tighter: '-0.04em',
      },
      lineHeight: {
        editorial: '1.15',
      },
      maxWidth: {
        prose: '65ch',
        'prose-wide': '72ch',
      },
      borderColor: {
        DEFAULT: '#D8D2C4',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
