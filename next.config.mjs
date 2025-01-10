import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  trailingSlash: false,
  productionBrowserSourceMaps: true,
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "false",
})(nextConfig);
