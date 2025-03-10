/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // Disable Turbopack if needed
  },
};

module.exports = nextConfig; // ✅ Use CommonJS
