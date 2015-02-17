module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "browser-bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
};
