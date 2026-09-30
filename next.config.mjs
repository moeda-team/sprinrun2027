import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  outputFileTracingRoot: process.cwd(),
  typescript: { ignoreBuildErrors: true },
  experimental: { useTypeScriptCli: false },
};

export default withBundleAnalyzer(nextConfig);
