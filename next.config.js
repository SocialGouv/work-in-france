const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
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
