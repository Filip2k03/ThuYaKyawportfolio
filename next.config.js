/** @type {import('next').NextConfig} */
module.exports = {
  // Standalone output is only for the Docker image; Vercel does its own tracing and
  // fails (missing .next/next-server.js.nft.json) when standalone is enabled.
  output: process.env.VERCEL ? undefined : 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/skills', destination: '/technology', permanent: true },
      { source: '/services', destination: '/systems', permanent: true },
      { source: '/experience', destination: '/timeline', permanent: true },
    ];
  },
  async headers() {
    const security = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://va.vercel-scripts.com",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob:",
          "font-src 'self'",
          "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
          "worker-src 'self' blob:",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join('; '),
      },
    ];
    const immutable = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }];
    return [
      { source: '/(.*)', headers: security },
      { source: '/images/:path*', headers: immutable },
      { source: '/models/:path*', headers: immutable },
    ];
  },
};
