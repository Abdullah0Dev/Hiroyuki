import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Additional Next.js configuration here
  // Do not include static export for dynamic routes
};

export default withSentryConfig(nextConfig, {
  telemetry: false,
  org: "dev-yhp",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});
