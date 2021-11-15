const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist')
};

const PAGES_ROOT = PATHS.src + '/pages/';
const PAGES_DIRNAMES = [
  'index/',
];

const PAGES_DIR = PAGES_DIRNAMES.map( dirName => PAGES_ROOT + dirName );
const PAGES = PAGES_DIR.map( 
  dir => fs.readdirSync( dir ).find( fileName => fileName.endsWith('.pug') ) 
);

module.exports = {
  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },

  externals: {
    paths: PATHS
  },

  entry: {
    app: PATHS.src,
  },

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@variables': path.resolve(__dirname, 'src/variables/variables.scss')
    }
  },

  output: {
    filename: 'index.js',
    path: PATHS.dist
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json')
            }
          },
          'angular2-template-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          root: path.resolve(__dirname, 'src'),
          pretty: false
        }
      },
      {
        test:/\.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ttf|woff|svg)$/i,
        type: 'asset/resource',
        exclude: [/images/],
        generator: {
          filename: 'static/fonts/[name][ext][query]'
        }
      },
      {
        test: /\.(png|svg|gif|jpe?g)$/i,
        type: 'asset/resource',
        include: [/images/],
        generator: {
          filename: 'static/images/[name][ext][query]'
        }
      }
    ]
  },

  plugins: [
    ...PAGES.map( (page, index) => new HtmlWebpackPlugin({
      template: `${PAGES_DIR[index]}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core/,
      path.resolve(__dirname, 'src'),
      {}
    ),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    new CssMinimizerPlugin(),
    new CleanWebpackPlugin()
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
}
