import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bit.ly',
        },
      ]
    }
  };

export default nextConfig;
