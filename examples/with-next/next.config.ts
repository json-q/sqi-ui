import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@sqi-ui/web"],
  reactCompiler: true,
};

export default nextConfig;
