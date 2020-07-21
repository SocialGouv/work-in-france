const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  env: {
    BACKOFFICE_API_URL:
      process.env.BACKOFFICE_API_URL || "https://wif-bo-api.incubateur.social.gouv.fr",
    DS_AGGREGATOR_API_URL:
      process.env.DS_AGGREGATOR_API_URL || "https://ds-aggregator-api.incubateur.social.gouv.fr",
  },
  exportTrailingSlash: true,
  publicRuntimeConfig: {
    // eslint-disable-next-line global-require
    VERSION: process.env.VERSION || require("./package.json").version,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});
