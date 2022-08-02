/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    loader: 'custom',
    path: 'https://scaleflex.cloudimg.io/',
  },
  assetPrefix: './',
};

module.exports = nextConfig;
