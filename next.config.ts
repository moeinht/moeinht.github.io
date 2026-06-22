import type { NextConfig } from "next"
const repoName = "moeinht.github.io"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
}
export default nextConfig
