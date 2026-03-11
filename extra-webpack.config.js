const path = require('path');

/**
 * Use Inferno's dev:module entry in development to avoid the console warning:
 * "You are running production build of Inferno in development mode. Use dev:module entry point."
 * DevExtreme (and thus Inferno) is used by devextreme-angular.
 */
module.exports = (config, options) => {
  const isDevelopment = options.configuration === 'development';
  if (isDevelopment && config.resolve) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      inferno: path.resolve(__dirname, 'node_modules/inferno/dist/index.dev.esm.js'),
    };
  }
  return config;
};
