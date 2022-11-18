const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        default: {
          50: "var(--color-default-50)",
          100: "var(--color-default-100)",
          200: "var(--color-default-200)",
          300: "var(--color-default-300)",
          400: "var(--color-default-400)",
          500: "var(--color-default-500)",
          600: "var(--color-default-600)",
          700: "var(--color-default-700)",
          800: "var(--color-default-800)",
          900: "var(--color-default-900)",
        },
      },
      fontFamily: (theme) => ({
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      }),
    },
  },
  plugins: [],
};
