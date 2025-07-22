/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        // New keyframes for the Order Now button
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(251, 146, 60, 0.7)' },
          '70%': { boxShadow: '0 0 0 10px rgba(251, 146, 60, 0)' },
        },
        shine: {
          '0%': { left: '-50%' },
          '100%': { left: '150%' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        float: 'float 8s ease-in-out infinite',
        spin: 'spin 20s linear infinite',
        pulse: 'pulse 5s ease-in-out infinite',
        // New animations for the Order Now button
        'pulse-glow': 'pulse-glow 2s infinite',
        'shine': 'shine 1.5s',
      },
    },
  },
  plugins: [],
};
