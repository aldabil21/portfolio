const nextBuildId = require('next-build-id');

/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  transpilePackages: ['utils'],
};

module.exports = nextConfig;
