import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 92, 95],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 640, 828, 900],
  },
};

export default nextConfig;
