/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // still run ESLint
    dirs: ['app', 'components'], // optional: which folders to lint
  },
};

export default nextConfig;
