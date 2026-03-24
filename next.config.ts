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
        source: "/services/nemoclaw",
        destination: "/nemoclaw",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
