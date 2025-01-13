/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io",],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
