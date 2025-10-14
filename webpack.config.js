module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    filename: 'static/js/bundle.js',
  },
  devServer: {
    compress: true,
    hot: true,
    host,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.m?[jt]sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              minimize: true,
              importLoaders: 1,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // includePaths: ['node_modules']
              outputStyle: 'compressed',
              sourceMap: true,
            }
          }, 
          {
            loader: 'postcss-loader', // translates CSS into CommonJS
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                autoprefixer({ browsers: ['last 2 versions', '> 2%', '> 5% in DE', 'Chrome 44', 'iOS > 8', 'ie > 10'], grid: true }),
              ],
            },
          }
        ],
      },

    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.cjs', '.jsx', '.tsx', '.ts', '.min.css', '.css', '.scss'],
    modules: ['node_modules'],
  },
}