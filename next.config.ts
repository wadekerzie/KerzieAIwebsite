import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/nemoclaw",
        destination: "/nemoclaw/index.html",
      },
      {
        source: "/nemoclaw/construction",
        destination: "/nemoclaw/construction/index.html",
      },
      {
        source: "/nemoclaw/logistics",
        destination: "/nemoclaw/logistics/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/unison",
        destination: "/ventures/unison",
        permanent: true,
      },
      {
        source: "/services/app-development",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/ai-consulting",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/ventures/nemoclaw",
        destination: "/services/nemoclaw",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/schedule",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/team",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "/",
        permanent: true,
      },
      {
        source: "/partner",
        destination: "/",
        permanent: true,
      },
      {
        source: "/zapier-partner",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/training",
        destination: "/services/fast-track",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
