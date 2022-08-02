/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    path: 'https://scaleflex.cloudimg.io/',
  },
};

module.exports = nextConfig;
