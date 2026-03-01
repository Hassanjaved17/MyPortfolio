/** @type {import('tailwindcss').Config} */
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
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15d1e9",
      lightCyan: "#88e5f0",
      darkCyan: "#009fb3",
      orange: "#fb9718",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
    },
    extend: {
      boxShadow: {
        cyanShadow:        "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow:     "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow:  "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow:   "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow:"10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },

      //  Custom keyframes
      keyframes: {
        // Replaces animate-pulse — opacity only, GPU composited, no reflow
        "soft-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%":      { opacity: "1"   },
        },
        // Hero hexagon slow spin
        "spin-slow": {
          "0%":   { transform: "rotate(0deg)"   },
          "100%": { transform: "rotate(360deg)" },
        },
        // Hero hexagon reverse spin (if you want counter-rotate effect)
        "spin-slow-reverse": {
          "0%":   { transform: "rotate(0deg)"    },
          "100%": { transform: "rotate(-360deg)" },
        },
        // Skill card fade in up (replaces inline style animation)
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        // Shimmer for send button (replaces ::before where possible)
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0"  },
        },
        // Footer top border shimmer
        "amber-shimmer": {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "1"   },
        },
      },

      //  Custom animation utilities — use these as Tailwind classes
      animation: {
        "soft-pulse":        "soft-pulse 4s ease-in-out infinite",
        "spin-slow":         "spin-slow 50s linear infinite",
        "spin-slower":       "spin-slow 60s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 50s linear infinite",
        "fade-up":           "fade-up 0.4s ease both",
        "shimmer":           "shimmer 3s ease-in-out infinite",
        "amber-shimmer":     "amber-shimmer 3s ease-in-out infinite",
      },


      willChange: {
        "transform": "transform",
        "opacity":   "opacity",
        "both":      "transform, opacity",
      },
    },

    fontFamily: {
      body:    ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};