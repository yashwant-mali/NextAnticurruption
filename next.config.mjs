import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Example: Add custom Webpack config here
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve('src/components'),
    };

    // Example: Add a custom loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
