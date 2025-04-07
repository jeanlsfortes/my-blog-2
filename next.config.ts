import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/my-blog-2' : '',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
