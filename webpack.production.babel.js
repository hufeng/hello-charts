import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[name]-[hash:8].js'
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'web_modules')],
    extensions: ['.web.js', '.js', '.json', '.ts', '.tsx', '.css'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'web_modules'),
          path.resolve(__dirname, 'node_modules/preact-compat'),
          path.resolve(__dirname, 'node_modules/preact')
        ],
        loaders: ['babel-loader?cacheDirectory=true', 'ts-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      DEV: false,
      template: './index.ejs'
    })
  ]
};
