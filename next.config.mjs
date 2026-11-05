/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Elizabeth URL Strategy: Consolidate duplicate Elizabeth routes to homepage
      {
        source: "/locations/plumber-elizabeth-nj",
        destination: "/",
        permanent: true,
      },
      {
        source: "/locations/plumber-elizabeth",
        destination: "/",
        permanent: true,
      },
      {
        source: "/locations/elizabeth-nj",
        destination: "/",
        permanent: true,
      },
      {
        source: "/locations/elizabeth",
        destination: "/",
        permanent: true,
      },
      {
        source: "/service-areas/elizabeth",
        destination: "/",
        permanent: true,
      },
      // Previous /locations/:city-nj redirects to /locations/plumber-:city-nj
      {
        source: "/locations/westfield-nj",
        destination: "/locations/plumber-westfield-nj",
        permanent: true,
      },
      {
        source: "/locations/union-nj",
        destination: "/locations/plumber-union-nj",
        permanent: true,
      },
      {
        source: "/locations/cranford-nj",
        destination: "/locations/plumber-cranford-nj",
        permanent: true,
      },
      {
        source: "/locations/roselle-nj",
        destination: "/locations/plumber-roselle-nj",
        permanent: true,
      },
      {
        source: "/locations/fanwood-nj",
        destination: "/locations/plumber-fanwood-nj",
        permanent: true,
      },
      // Legacy /service-areas/:slug redirects to dedicated /locations/plumber-:city-nj
      {
        source: "/service-areas/westfield",
        destination: "/locations/plumber-westfield-nj",
        permanent: true,
      },
      {
        source: "/service-areas/union",
        destination: "/locations/plumber-union-nj",
        permanent: true,
      },
      {
        source: "/service-areas/cranford",
        destination: "/locations/plumber-cranford-nj",
        permanent: true,
      },
      {
        source: "/service-areas/roselle",
        destination: "/locations/plumber-roselle-nj",
        permanent: true,
      },
      {
        source: "/service-areas/fanwood",
        destination: "/locations/plumber-fanwood-nj",
        permanent: true,
      },
      // Root /locations redirect to directory
      {
        source: "/locations",
        destination: "/service-areas",
        permanent: true,
      },
      // Convenience aliases for legal & supporting pages
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/sitemap",
        destination: "/site-map",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/about",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

