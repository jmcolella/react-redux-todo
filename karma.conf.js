var webpack = require('webpack');

module.exports = function(config) {
  config.set({
      browsers: ['Chrome'],
      singleRun: true,
      frameworks: ['mocha'],
      files: [
          'tests.webpack.js'
      ],
      preprocessors: {
          'tests.webpack.js': ['webpack']
      },
      reporters: ['verbose'],
      webpack: {
          devtool: 'inline-source-map',
          module: {
              loaders: [
                  {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['airbnb', 'es2015'] } },
                  { test: /\.css$/, loader: "style-loader!css-loader" },
                  { test: /\.scss$/, loaders: ["style", "css", "sass"] }
              ]
          },
          externals: {
            'cheerio': 'window',
            'react/addons': true,
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true
          },
          watch: true
      },
      webpackServer: {
          noInfo: true
      }
  });
};
