import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bit.ly',
        },
        {
          protocol: 'https',
          hostname: 'ui-avatars.com'
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com'
        }
      ]
    }
  };

export default nextConfig;
