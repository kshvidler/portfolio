// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ↴ NEW
  async rewrites() {
    return [
      {
        source: '/iris',              // what the user types in the browser
        destination: '/iris/index.html' // the actual file in /public/iris
      }
    ];
  }
};

export default nextConfig;
