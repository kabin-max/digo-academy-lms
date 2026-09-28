import type { NextConfig } from 'next';
import dns from 'node:dns';
import path from 'node:path';

// Force Node.js to prefer IPv4 over IPv6. Prevents 21-second TCP connection hang
// on networks where IPv6 is advertised but not routed to Supabase poolers.
dns.setDefaultResultOrder('ipv4first');

const nextConfig: NextConfig = {
  // Amplify optimizations
  output: 'standalone',
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Build optimization for Amplify
  experimental: {
    // Optimize build time
    turbo: {
      useSwcLoader: true,
    },
  },
  
  // Webpack configuration for better build performance
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  allowedDevOrigins: ['192.168.1.80', '192.168.1.107', 'localhost', '*.loca.lt'],
};

export default nextConfig;
