/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        neutral: {
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
        },
        foundation: {
          100: "var(--foundation-100)",
          200: "var(--foundation-200)",
          300: "var(--foundation-300)",
        },
        accent: {
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
        },
        surface: {
          100: "var(--surface-100)",
          200: "var(--surface-200)",
          300: "var(--surface-300)",
          400: "var(--surface-400)",
        },
        white: {
          100: "var(--white-100)",
          200: "var(--white-200)",
          300: "var(--white-300)",
        },
        black: {
          400: "var(--black-400)",
        },
      },
      fontSize: {
        mainHeadline: "var(--headline-bold-25)",
        subHeadline: "var(--headline-bold-20)",
        titleBold: "var(--title-bold-18)",
        titleRegular: "var(--title-regular-18)",
        bodyRegular20: "var(--body-regular-20)",
        bodyRegular18: "var(--body-regular-18)",
        bodyRegular16: "var(--body-regular-16)",
        bodyRegular14: "var(--body-regular-14)",
        bodyRegular12: "var(--body-regular-12)",
        label: "var(--label-bold-18)",
      },
    },
  },
  plugins: [],
};
