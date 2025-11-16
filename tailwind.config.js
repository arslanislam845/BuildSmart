/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
  brand: {
    navy: "#0f172a",
    blue: "#2563eb",   // new darker shade for buttons
    light: "#E9ECF2",
    soft: "#F7FAFF"
  }
},
      boxShadow: { 'soft':'0 10px 30px rgba(13,39,80,.08)' },
      keyframes: {
        fadeInUp: { '0%':{opacity:'0',transform:'translateY(16px)'}, '100%':{opacity:'1',transform:'translateY(0)'} },
        float: { '0%,100%':{transform:'translateY(0)'}, '50%':{transform:'translateY(-6px)'} },
        pulseSoft: { '0%':{boxShadow:'0 0 0 0 rgba(77,134,255,.5)'}, '70%':{boxShadow:'0 0 0 10px rgba(77,134,255,0)'}, '100%':{boxShadow:'0 0 0 0 rgba(77,134,255,0)'} }
      },
      animation: { 'fade-in-up':'fadeInUp .6s ease-out both', 'float':'float 4s ease-in-out infinite', 'pulse-soft':'pulseSoft 2.5s ease-out infinite' }
    },
  },
  plugins: [],
}
