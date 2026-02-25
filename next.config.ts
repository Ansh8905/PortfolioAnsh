import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PortfolioAnsh",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
