require('babel-register');

require('webpack')(
  require('../webpack.config.js'),
  function (err, stats) {
    const jsonStats = stats.toJson();

    console.log('Webpack compile completed.');
    console.log(stats.toString({
      chunks: false,
      chunkModules: false,
      colors: true
    }));

    if (err) {
      console.log('Webpack compiler encountered a fatal error. %s', err);
      process.exit(1);
    } else if (jsonStats.errors.length > 0) {
      console.log('Webpack compiler encountered errors. %s');
      process.exit(1);
    } else if (jsonStats.warnings.length > 0) {
      console.log('Webpack compiler encountered warnings. %s');

      if (config.compiler_fail_on_warning) {
        process.exit(1);
      }
    }
  }
);
