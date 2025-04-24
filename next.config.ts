import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}`,
        // port: "1337",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

export default nextConfig;
