import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['geist', 'next-mdx-remote'],
};

export default nextConfig;
