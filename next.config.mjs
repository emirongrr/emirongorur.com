/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "emirongorur.com",
          },
        ],
        destination: "https://www.emirongorur.com/:path*",
        permanent: true,
      },
    ];
  },
  trailingSlash: false,
};

export default nextConfig;
