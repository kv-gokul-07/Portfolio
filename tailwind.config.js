module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      function ({ addUtilities }) {
    addUtilities({
       ".transform-style-preserve-3d": { transformStyle: "preserve-3d" },
       ".backface-hidden": { backfaceVisibility: "hidden" },
    });
  },
  ],
};
