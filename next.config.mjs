/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['tsx', 'ts', 'js', 'jsx'],

  async redirects() {
    return [
      {
        source: '/:path*',
        destination: '/', // Redirige toutes les pages non existantes vers l'accueil
        permanent: false,
      },
    ]
  },
}

export default nextConfig;