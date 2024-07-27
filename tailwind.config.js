// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this matches your file structure
  ],
  darkMode: "class",
  theme:{
    extend:{
      background: {
        customGreen: '#a7f3d0',
      },
    }
  },
  plugins: [],
};
