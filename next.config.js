/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.acttax.es',
      },
    ],
  },
}

module.exports = nextConfig
