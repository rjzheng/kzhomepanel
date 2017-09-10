module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/actions',
      './app/components',
      './app/store',
      './app/reducers',
      './app/components/Calendar',
      './app/components/Home',
      './app/components/Task',
      './app/components/Navigation',
      './app/components/Weather',
      './app/components/Widgets',
      './app/components/Grocery'
    ],
    alias: {
      actions: 'app/actions/actions.js',
      reducers: 'app/reducers/reducers.js',
      configureStore: 'app/store/configureStore.js'
    },
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins:['transform-decorators-legacy'],
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/

      }, {
        test: /\.css$/,
        loaders: ["style", "css"]
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
};
