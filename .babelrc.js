module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          browsers: ["last 2 versions"]
        },
        debug: true
      }
    ]
  ],
  plugins: ["@babel/plugin-transform-runtime"]
};
