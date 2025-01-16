/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  trailingSlash: false,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
