/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/georgia-tech/management',
        destination: '/georgia-tech/financial-modeling',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
