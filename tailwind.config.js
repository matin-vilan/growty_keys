/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from marketing page
        primary: "#FCFBF7", // Cream background
        secondary: "#FFD700", // Golden yellow
        accent: "#222222", // Dark charcoal
        muted: "#F5F5F5", // Light gray

        // Additional colors
        cream: "#FCFBF7", // Main background
        gold: "#FFD700", // Golden accent
        charcoal: "#222222", // Dark text
        lightGray: "#F5F5F5", // Light elements

        // Base colors
        background: "#FCFBF7",
        foreground: "#222222",
      },
      backgroundImage: {
        // Custom gradients
        "gradient-primary": "var(--gradient-primary)",
        "gradient-design": "var(--gradient-design)",
        "background-image": "var(--background-image)",
      },
    },
  },
  plugins: [],
};
