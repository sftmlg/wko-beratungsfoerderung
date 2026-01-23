import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  // Assets served from subdomain for proxied access
  assetPrefix: "https://beratungsbonus.kiautomatisierung.info",
};

export default nextConfig;
