import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Set output tracing root to current directory to avoid nested paths in standalone
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
