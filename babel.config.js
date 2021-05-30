module.exports = {
  include: [/node_modules/, /dist/, "src/**", "test/**"],
  exclude: [/core-js/],
  compact: false, // disable babel warnings for big files
  comments: true,
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        modules: false,
        spec: true,
        forceAllTransforms: true,
        targets: {
          browsers: ["ie >= 10", "Firefox >= 60", "Chrome >= 41"]
        }
      }
    ]
  ],
  plugins: [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import"
  ]
};
