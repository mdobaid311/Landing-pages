/** @type {import('next').NextConfig} */
const nextConfig = {
  // add image domain allow from all domain
  images: {
    domains: [
      "images.unsplash.com",
      "w7.pngwing.com",
      "www.freepnglogos.com",
      "www.pngkit.com",
      "www.pngmart.com",
    ],
  },
};

module.exports = nextConfig;
