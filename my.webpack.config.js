const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
const RenameWebpackPlugin = require('rename-webpack-plugin')

module.exports = {
  entry: {
  },
  output: {
    path: path.resolve(__dirname, 'dist') // __dirname is an object provided by nodejs, the directory name of the current module.
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css|txt)$/, // "test" refers to the regex pattern to match against when this plugin looks for files to compress
      deleteOriginalAssets: true, // leave only the compressed files in the dist folder
    }),
    new RenameWebpackPlugin({
      originNameReg: /(.*).gz/, // capture the original name in a regex capturing group
      targetName: '$1' // refers to the previously captured capturing group
    })
  ]
};
