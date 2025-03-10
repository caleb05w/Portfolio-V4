module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // For Next.js App Router
      "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js Pages Router
      "./components/**/*.{js,ts,jsx,tsx}", // For components
      "./src/**/*.{js,ts,jsx,tsx}", // If using `src/` folder
    ],
    theme: {
      extend: {
        screens: {
          // Optional: If you really want 'lg' to be 768px, rename it to avoid conflicts
          'custom-lg': '768px', 
        },
      },
    },
    plugins: [],
  };
  