/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io",],
  },
  i18n: {
    locales: ['en', 'tr'], 
    defaultLocale: 'en',
  },
  trailingSlash: false,
  productionBrowserSourceMaps: true,
};

export default nextConfig;
