import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.usedExports = true;
    }
    return config;
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
  productionBrowserSourceMaps: true,
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'false',  
})(nextConfig);