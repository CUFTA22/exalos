// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'app/styles/abstracts'),
      path.join(__dirname, 'app/styles/base'),
      path.join(__dirname, 'app/styles/scss'),
    ],
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },

  // Rust compiler for minification.
  swcMinify: true,
  // experimental: {
  //   urlImports: ['https://cdn.skypack.dev'],
  // },

  // PWA stuff
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
});
