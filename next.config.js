/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.kiwirail.co.nz", "https://kiwirail-survey-cms.herokuapp.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
