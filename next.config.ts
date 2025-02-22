import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost", "api.microlink.io","portfolio-green-ten-71.vercel.app"], // Add your local and production domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port:"3000",
        pathname: "/work/**",
      },
      {
        protocol: "https",
        hostname: "portfolio-green-ten-71.vercel.app",
        pathname: "/work/**",
      },
    ],
  },
};

export default nextConfig;
