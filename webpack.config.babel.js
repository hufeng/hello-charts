import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
  entry: path.resolve(__dirname, './src/index.tsx'),
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle-[name]-[hash:8].js'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    modules: ['node_modules', path.resolve(__dirname, 'web_modules')],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  },
  module: {
    rules: [{ test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true
    }),
    new HtmlWebpackPlugin({
      DEV: true,
      template: './index.ejs'
    })
  ],
  devServer: {
    host: 'h5.dev.qianmi.com',
    port: 3000
  }
};
