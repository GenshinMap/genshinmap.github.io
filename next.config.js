const baseConfig = {
  // Target must be serverless to run on Netlify.
  // target: 'serverless',

  // Provides source maps in production.
  // These are used to improve stack traces in error reports.
  // productionBrowserSourceMaps: true,

  future: {
    webpack5: true,
  },
  webpack(config) {
    // url loader
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg)$/,
      use: {
        loader: 'url-loader',
      },
    });

    // IDK why but this fixes a bug.
    config.optimization.minimize = false;

    return config;
  },
};

module.exports = baseConfig;
