/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['api.skyhub-technologies.com',"localhost"],
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
