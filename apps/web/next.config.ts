import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // You can keep other options here too:
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL("https://bywh0yntxo.ufs.sh/f/**")],
  },
};

export default nextConfig;
