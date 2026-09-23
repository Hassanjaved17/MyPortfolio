/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgb(var(${variableName}) / ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: withOpacity("--color-brown"),
      lightBrown: withOpacity("--color-brown-light"),
      darkBrown: withOpacity("--color-bg"),
      black: withOpacity("--color-surface"),
      white: withOpacity("--color-text"),
      cyan: withOpacity("--color-cyan"),
      lightCyan: withOpacity("--color-cyan-light"),
      darkCyan: withOpacity("--color-cyan-dark"),
      orange: withOpacity("--color-orange"),
      lightOrange: withOpacity("--color-orange-light"),
      darkOrange: withOpacity("--color-orange-dark"),
      grey: withOpacity("--color-grey"),
      lightGrey: withOpacity("--color-grey-light"),
      darkGrey: withOpacity("--color-grey-dark"),
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
      keyframes: {
        "soft-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "amber-shimmer": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "soft-pulse": "soft-pulse 4s ease-in-out infinite",
        "spin-slow": "spin-slow 50s linear infinite",
        "spin-slower": "spin-slow 60s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 50s linear infinite",
        "fade-up": "fade-up 0.4s ease both",
        shimmer: "shimmer 3s ease-in-out infinite",
        "amber-shimmer": "amber-shimmer 3s ease-in-out infinite",
      },
      willChange: {
        transform: "transform",
        opacity: "opacity",
        both: "transform, opacity",
      },
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};