/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	experimental: {
		images: {
			remotePatterns: [
				{
					protocol: 'https',
					hostname: '**.unsplash.com',
				},
			],
		},
	},
}

module.exports = nextConfig
