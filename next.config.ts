import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // You can keep other options here too:
  reactStrictMode: true,
  // ...any other config
};

export default nextConfig;
