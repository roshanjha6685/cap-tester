import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Important for Docker
  // Baaki tumhare existing config...
};

export default nextConfig;