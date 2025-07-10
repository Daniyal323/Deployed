import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: true,
  },
  webpack: (config, { isServer }) => {
    // Handle module format issues
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx'],
      '.mjs': ['.mjs', '.mts'],
      '.cjs': ['.cjs', '.cts'],
    };
    
    return config;
  },
};

export default nextConfig;
