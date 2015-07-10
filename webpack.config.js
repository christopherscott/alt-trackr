module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel?stage=1', exclue: /(node_modules)/ }
    ]
  }
};
