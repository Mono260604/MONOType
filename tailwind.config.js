/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
       bgColor: "#93BAC7",
       textDark: "#1E242B",
       textPrimary:"#7598A2",
       textSecondary:"#C4E3E5",
       primaryColor: "#EC9E5E",
    },
  },
  daisyui: {
    themes: [
      {
        ilyTheme: {
          bgColor: "#93BAC7",
          textDark: "#1E242B",
          textPrimary:"#7598A2",
          textSecondary:"#C4E3E5",
          primaryColor: "#EC9E5E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
