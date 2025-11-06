/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,
};

export default nextConfig;
