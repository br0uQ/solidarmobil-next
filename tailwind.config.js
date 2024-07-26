const { Palanquin } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-palanquin)"],
        nothing: ["var(--font-nothing-you-could-do)"],
        caudex: ["var(--font-caudex)"],
        palanquin: ["var(--font-palanquin)"],
        heading: ["var(--font-nothing-you-could-do)"],
        subheading: ["var(--font-caudex)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
        blue_green_yellow: {
          primary: "#073539",
          secondary: "#cad32d",
          neutral: "#269d4d",
          accent: "#578ac2",
        },
        dark_blue_green: {
          /** #011b28: dark green **/
          /** #1b8284: darker teal **/
          /** #9afc1c: light green **/
          /** #eef1f5: almost white **/
          primary: "#1b8284",
          "primary-content": "#9afc1c",
          secondary: "#9afc1c",
          "secondary-content": "#011b28",
          neutral: "#011b28",
          "neutral-content": "#9afc1c",
          accent: "#eef1f5",
          "accent-content": "#011b28",
          "base-100": "#011b28",
          "base-content": "#9afc1c",
        },
      },
    ],
  },
};
