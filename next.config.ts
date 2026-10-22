import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dm4vljcnv/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // One canonical host: www and the vercel.app alias 301 to the apex domain.
  async redirects() {
    return ['www.metricmgmtgroup.com', 'metric-mgm.vercel.app'].map((host) => ({
      source:      '/:path*',
      has:         [{ type: 'host' as const, value: host }],
      destination: 'https://metricmgmtgroup.com/:path*',
      statusCode:  301 as const,
    }))
  },
}

export default nextConfig
