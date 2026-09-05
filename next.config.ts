import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/PINA-HAMA" : "";
const siteUrl = isGithubPages
  ? "https://ilaysandrusi.github.io/PINA-HAMA"
  : "http://localhost:3000";

process.env.NEXT_PUBLIC_BASE_PATH = basePath;
process.env.NEXT_PUBLIC_SITE_URL = siteUrl;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
};

export default nextConfig;
