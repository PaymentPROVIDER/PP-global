/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // nowy sposób zamiast "next export"
  images: {
    unoptimized: true,
  },
  basePath: '/PP-global', // 👈 nazwa Twojego repozytorium
  assetPrefix: '/PP-global/', // potrzebne, by ścieżki do plików działały na GitHub Pages
};

export default nextConfig;
