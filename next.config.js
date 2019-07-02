const withCSS = require("@zeit/next-css");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX(
  withCSS({
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
    webpack(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });
      return config;
    },
  }),
);
