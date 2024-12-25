/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
