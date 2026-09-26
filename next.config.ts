import type { NextConfig } from 'next';
import dns from 'node:dns';
import path from 'node:path';

// Force Node.js to prefer IPv4 over IPv6. Prevents 21-second TCP connection hang
// on networks where IPv6 is advertised but not routed to Supabase poolers.
dns.setDefaultResultOrder('ipv4first');

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  allowedDevOrigins: ['192.168.1.80', '192.168.1.107', 'localhost', '*.loca.lt'],
};

export default nextConfig;
