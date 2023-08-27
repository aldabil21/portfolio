/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  transpilePackages: ['utils'],
};

module.exports = nextConfig;
