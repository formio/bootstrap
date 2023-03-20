const path = require('path');

module.exports = {
  entry: {
    'bootstrap3': './lib/bootstrap3.js',
    'bootstrap4': './lib/bootstrap4.js',
  },
  output: {
    library: '[name]',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: 'production',
  performance: { hints: false },
};
