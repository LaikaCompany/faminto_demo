/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};


export default nextConfig;
