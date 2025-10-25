/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/PP-global',
  assetPrefix: '/PP-global/',
  trailingSlash: true,
};

module.exports = nextConfig;
}
