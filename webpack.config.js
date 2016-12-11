
const modulesToBabelify = [
  'react-native-lightbox',
  'react-native-transformable-image',
]
const includedFilesRegExp = modulesToBabelify.map(name => `(?!/${name})`).join()
const babelExcludeRegexp = new RegExp(`node_modules${includedFilesRegExp}`)

module.exports = {
  entry: './start.js',
  output: {
    path: './dist',
    filename: 'shoutem-ui.js',
    library: '@shoutem/ui',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: babelExcludeRegexp,
      },
      {
        test: /\.json$/,
        loaders: ['json-loader'],
      },
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-native': {
      root: 'ReactNative',
      commonjs2: 'react-native',
      commonjs: 'react-native',
      amd: 'react-native',
    },
  },
}
