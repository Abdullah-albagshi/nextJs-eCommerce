/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'savoy.nordicmade.com',
        port: '',
        pathname: '/wp-content/uploads/**/*',
      },
    ],
  },
};

export default nextConfig;
