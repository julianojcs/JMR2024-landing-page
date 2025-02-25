/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['jornada.srmg.org.br', 'res.cloudinary.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      }
    ]
  }
};

export default nextConfig;
