/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.toxiq.xyz",
        port: "",
        pathname: "/images/Posts/**",
      },
    ],
  },
};

export default nextConfig;
