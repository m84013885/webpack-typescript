/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const process = require('process')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const nodeModuleDir = path.resolve(process.cwd(), 'node_module')
const appDir = path.resolve(process.cwd(), 'app')
module.exports = {
  entry: {},
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      useEffect: ['react', 'useEffect'],
      useState: ['react', 'useState'],
      useCallback: ['react', 'useCallback'],
      useMemo: ['react', 'useMemo'],
      useReducer: ['react', 'useReducer'],
      useRef: ['react', 'useRef'],
      useContext: ['react', 'useContext'],
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx', '.js'],
      failOnError: true,
      emitWarning: true,
      emitError: true,
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      use: ['ts-loader'],
      include: [appDir],
      exclude: [nodeModuleDir]
    }]
  }
}