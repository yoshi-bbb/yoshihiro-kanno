import type { NextConfig } from "next";

const normalizedBasePath = (() => {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  if (!raw) return "";
  return `/${raw.replace(/^\/|\/$/g, "")}`;
})();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: normalizedBasePath || undefined,
  assetPrefix: normalizedBasePath || undefined,
  typedRoutes: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ja",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
