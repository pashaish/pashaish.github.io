const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
    }, {
      test: /\.css/,
      use: [
        "style-loader",
        "css-loader"
      ]
    }, {test: /\.svg$/, loader: 'file-loader'}],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
    inline: true,
    host: 'localhost',
    port: 8080,
  }
};