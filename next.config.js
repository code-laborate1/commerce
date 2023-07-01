/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['1h3.googleusercontent.com', 'lh3.googleusercontent.com']
  }
};

module.exports = nextConfig;
