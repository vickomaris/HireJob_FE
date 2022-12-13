/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: [
			"localhost",
			"cautious-gold-adder.cyclic.app",
			"res.cloudinary.com",
		],
	},
}

module.exports = nextConfig
