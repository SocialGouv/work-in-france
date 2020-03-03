const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/fail": { page: "/fail" },
      "/faq": { page: "/faq" },
      "/cgu": { page: "/cgu" },
      "/student": { page: "/student" },
      "/company": { page: "/company" },
      "/validitycheck": { page: "/validitycheck" },
    };
  },
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
