/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    if (!process.env.NEXT_PUBLIC_API_KEY) {
      throw new Error(
        'Please define the NEXT_PUBLIC_API_KEY environment variable before building the app or starting the development server.'
      );
    }

    return config;
  },
};

module.exports = nextConfig;
