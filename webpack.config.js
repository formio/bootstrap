const path = require('path');

module.exports = {
  entry: {
    'bootstrap5': './lib/mjs/bootstrap5.js',
  },
  output: {
    library: {
      name: '[name]',
      type: 'var',
      export: 'default'
    },
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'production',
  performance: { hints: false },
};
