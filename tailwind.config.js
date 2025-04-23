/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}", // główne źródła projektu
    "./public/index.html", // jeśli używasz HTML-a
    "./node_modules/flyonui/**/*.{js,ts,jsx,tsx}", // import z biblioteki (jeśli FlyonUI jest w node_modules)
  ],
  theme: {
    extend: {
      // możesz tu dopisać swoje kolory lub zaktualizować `base-300`, jeśli FlyonUI używa ich niestandardowo
    },
  },
  plugins: [],
};
