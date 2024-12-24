/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io","emirongorur.my.canva.site"],
  },
};

export default nextConfig;
