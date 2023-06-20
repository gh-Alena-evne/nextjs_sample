/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stockdreamengine.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/small-images/**',
      },
    ],
  },
  reactStrictMode: false,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SENTRY_ENVIRONMENT: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT,
    GATSBY_APP_API_URL: process.env.NEXT_PUBLIC_API_URL,
    GATSBY_APP_IMAGE_URL_FULL: process.env.NEXT_PUBLIC_IMAGE_URL_FULL,
    GATSBY_APP_IMAGE_URL_SMALL: process.env.NEXT_PUBLIC_IMAGE_URL_SMALL,
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    NEXT_PUBLIC_INTERCOM_APP_ID: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
    NEXT_PUBLIC_PROD_ENVIRONMENT: process.env.NEXT_PUBLIC_PROD_ENVIRONMENT,
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },
};

module.exports = nextConfig;
