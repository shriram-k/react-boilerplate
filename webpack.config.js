const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: './app/index.jsx',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist',
      hot: true,
      port: 4200
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };