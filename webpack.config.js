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
      filename: 'myLibrary.' + target + '.js',
      library: 'MyLibrary',
      libraryTarget: target
    }
  };
}
