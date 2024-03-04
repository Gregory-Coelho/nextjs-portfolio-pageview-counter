import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md"],
  experimental: {
    mdRs: true,
  },
};

export default withContentlayer(nextConfig);
