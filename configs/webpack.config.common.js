const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { EnvironmentPlugin } = require('webpack');

const postcssConfig = path.resolve(__dirname, 'postcss.config.js');
const babelConfig = require('./babel.config');

const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(SRC_PATH, 'index.html'),
  }),
  new EnvironmentPlugin({ MOCK_API: false }),
];

if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new ReactRefreshWebpackPlugin());
}

if (process.env.ANALYZE) {
  plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'docs/size_dev.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: true,
      statsFilename: 'docs/stats_dev.json',
    }),
  );
}

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.tsx'),

  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '' },
          },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: postcssConfig,
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', options: babelConfig },
      },
      // {
      //   /**
      //    * Developers packaging the IVS player into an app are required to resolve and import the following assets via URL:
      //    *
      //    * 'amazon-ivs-player/dist/assets/amazon-ivs-wasmworker.min.wasm'
      //    * 'amazon-ivs-player/dist/assets/amazon-ivs-wasmworker.min.js';
      //    * 'amazon-ivs-player/dist/assets/amazon-ivs-worker.min.js';
      //    *
      //    * These assets must not be re-compiled during packaging.
      //    * The webpack file-loader (https://webpack.js.org/loaders/file-loader/) accomplishes this.
      //    * Rollup's plugin-url (https://github.com/rollup/plugins/tree/master/packages/url) also seems to do this, but has not been tested.
      //    */
      //   test: /[/\\]amazon-ivs-player[/\\].*dist[/\\]assets[/\\]/,
      //   loader: 'file-loader',
      //   type: 'javascript/auto',
      //   options: {
      //     name: '[name].[ext]',
      //   },
      // },
    ],
  },

  plugins,

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
