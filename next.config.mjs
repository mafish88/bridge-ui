/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'community.taraxa.io',
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: 'ethereum.org',
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;
