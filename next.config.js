/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
  
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mcqmate.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
