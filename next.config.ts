import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PortfolioAnsh",
  assetPrefix: "/PortfolioAnsh/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
