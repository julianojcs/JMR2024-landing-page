import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Suppress specific hydration warnings
  onDemandEntries: {
    // Period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
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
  },
  // Redirecionar páginas
  async redirects() {
    return [
      // Exemplo de redirecionamento
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ]
  },
  // Variáveis de ambiente que devem estar disponíveis no cliente
  env: {
    // PUBLIC_API_URL: process.env.PUBLIC_API_URL,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, './app'),
      '@/components': path.join(__dirname, './app/components'),
      '@/utils': path.join(__dirname, './app/utils'),
      '@/api': path.join(__dirname, './app/api'),
      '@/lib': path.join(__dirname, './app/lib'),
      '@/hooks': path.join(__dirname, './app/hooks'),
      '@/services': path.join(__dirname, './app/services'),
      '@/data': path.join(__dirname, './app/data')
    }
    return config
  }
}

export default nextConfig
