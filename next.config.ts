import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // askwade.kerzie.ai is the Executive Legacy demo served as its own site.
      // beforeFiles, because the homepage route exists at "/" and an
      // afterFiles rewrite would never run for it.
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "askwade.kerzie.ai" }],
          destination: "/legacy/wade",
        },
      ],
      afterFiles: [
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
      ],
    };
  },
  async redirects() {
    return [
      // /scheduling was the booking path on the old kerzieconsulting.com site
      // and it is still muscle memory. Wade hand-typed it into a McKinney
      // Chamber pitch on 2026-07-21 and again in the reply, so the decision
      // maker who was just introduced clicked a 404 twice. This redirect
      // repairs every copy of that link already sitting in somebody's inbox.
      {
        source: "/scheduling",
        destination: "/schedule",
        permanent: true,
      },
      // Renamed 2026-07-27: "Capture Kit" was too generic to say what it is.
      // The old paths were live for a week and are pasted in a few places, so
      // they keep resolving.
      {
        source: "/free/capture-kit",
        destination: "/free/mobile-capture-kit",
        permanent: true,
      },
      {
        source: "/free/capture-kit/access",
        destination: "/free/mobile-capture-kit/access",
        permanent: true,
      },
      {
        source: "/downloads/capture-kit.md",
        destination: "/downloads/mobile-capture-kit.md",
        permanent: true,
      },
      {
        source: "/services/unison",
        destination: "/ventures/unison",
        permanent: true,
      },
      // Ad2Action folded into Unison (Wade, 2026-09-24): "it's actually more
      // of a custom implementation of Unison and should not be called out
      // separately." The page file stays on disk; this redirect makes it
      // unreachable, so any pasted link lands on Unison.
      {
        source: "/ventures/ad2action",
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
  async headers() {
    // llms.txt v2 (llmstxt.org, Aug 2026): the HTTP Link header form of
    // rel="describedby", so every response, HTML or not, points at /llms.txt.
    return [
      {
        source: "/:path*",
        headers: [{ key: "Link", value: '</llms.txt>; rel="describedby"' }],
      },
    ];
  },
};

export default nextConfig;
