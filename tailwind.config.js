/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2563eb",   
          "secondary": "#3b82f6",     
          "accent": "#14b8a6",    
          "neutral": "#d1d5db",    
          "base-100": "#f3f4f6",
          "info": "#1cb2f2",
          "success": "#4ade80",
          "warning": "#f59e0b",
          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
