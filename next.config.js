/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: [
			"localhost",
			"fancy-jay-hosiery.cyclic.app",
			"res.cloudinary.com",
		],
	},
}

module.exports = nextConfig
