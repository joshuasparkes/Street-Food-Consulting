/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ['images.pexels.com', 'encrypted-tbn0.gstatic.com'],
    },
  };
  
  export default nextConfig;