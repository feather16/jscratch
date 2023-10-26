const webpack = require('webpack');

module.exports = {
    mode: "production",
  
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: "./src/compiler.ts",
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/dist`,
      // 出力ファイル名
      filename: "compiler.js",
      library: {
        type: 'module',
      },
    },
    module: {
      rules: [
        {
          // 拡張子 .ts の場合
          test: /\.ts$/,
          // TypeScript をコンパイルする
          use: "ts-loader"
        }
      ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
      extensions: [".ts", ".js"],
    },
    experiments: {
      outputModule: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_DEBUG': JSON.stringify(process.env.NODE_DEBUG),
      })
    ],
    performance: {
      maxEntrypointSize: 500000,
      maxAssetSize: 500000,
    },
  };