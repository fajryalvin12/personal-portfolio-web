/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--blue-eclipse-4)",
        "primary-soft": "var(--blue-eclipse-2)",
        "primary-accent": "var(--blue-eclipse-3)",
        surface: "var(--blue-eclipse-1)",
      },
    },
  },
  plugins: [],
};
