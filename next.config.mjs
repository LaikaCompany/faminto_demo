/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    basePath:'/faminto_demo',
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};


export default nextConfig;
