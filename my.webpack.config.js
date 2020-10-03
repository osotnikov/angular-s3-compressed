const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const RenameWebpackPlugin = require('rename-webpack-plugin')

module.exports = {
  entry: {
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css|txt)$/,
      deleteOriginalAssets: true,
    }),
    new RenameWebpackPlugin({
      originNameReg: /(.*).gz/,
      targetName: '$1'
    })
  ]
};
