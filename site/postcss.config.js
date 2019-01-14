module.exports = ctx => ({
  map: false,
  plugins: {
    "postcss-preset-env": true,
    "postcss-import": true,
    "postcss-nesting": true,
    cssnano: ctx.env === "production" ? {} : false
  }
});

