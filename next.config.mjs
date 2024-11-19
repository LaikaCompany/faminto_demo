/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath:"/faminto_demo",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
};


export default nextConfig;
