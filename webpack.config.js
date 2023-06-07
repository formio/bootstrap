const path = require('path');

module.exports = {
  entry: {
    'bootstrap3': './lib/mjs/bootstrap3.js',
    'bootstrap4': './lib/mjs/bootstrap4.js',
    'bootstrap5': './lib/mjs/bootstrap5.js',
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
