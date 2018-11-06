const path = require('path')

module.exports = {
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.json', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ['style-loader', 'raw-loader'],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}
