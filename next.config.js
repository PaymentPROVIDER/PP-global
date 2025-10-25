/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // to zastępuje dawny `next export`
  images: {
    unoptimized: true,
  },
  basePath: '/PP-global', // 👈 bardzo ważne! nazwa repozytorium (taka jak w URL GitHuba)
};

export default nextConfig;
