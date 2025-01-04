/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "emirongorur.com",
          },
        ],
        destination: "https://www.emirongorur.com/:path*",
        permanent: true,
      },
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/en/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
  trailingSlash: false,
};

export default nextConfig;
