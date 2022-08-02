const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    loader: 'custom',
    path: 'https://scaleflex.cloudimg.io/',
  },
  ...(isProd ? {
    assetPrefix: '/next-cloudimage-responsive/',
    basePath: '/next-cloudimage-responsive',
  } : {}),
};

export default nextConfig;
