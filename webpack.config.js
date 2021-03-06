var path = require('path');

module.exports = [
  createConfig('var'),
  createConfig('commonjs2'),
  createConfig('amd'),
  createConfig('umd')
];

function createConfig(target) {
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'redux.' + target + '.js',
      library: 'Redux',
      libraryTarget: target
    },
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }]
    }
  };
}
