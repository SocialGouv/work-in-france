const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/fail": { page: "/fail" },
      "/faq": { page: "/faq" },
      "/cgu": { page: "/cgu" },
      "/student": { page: "/student" },
      "/company": { page: "/company" },
      "/validity_check": { page: "/validity_check" },
    };
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
});
