/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: [
      '1h3.googleusercontent.com',
      'lh3.googleusercontent.com',
      'files.stripe.com'
    ]
  }
};

module.exports = nextConfig;
