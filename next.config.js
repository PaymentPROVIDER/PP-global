/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ważne dla GitHub Pages i zdalnych obrazów
  },
  basePath: "/PP-global",      // NAZWA Twojego repo
  assetPrefix: "/PP-global/",   // żeby ścieżki do /public działały
};

module.exports = nextConfig;

