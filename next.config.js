/** @type {import('next').NextConfig} */

module.exports = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
      },
    ],
  },
};
