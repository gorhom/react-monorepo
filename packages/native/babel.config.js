const path = require('path')

module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.ios.js', '.android.js'],
          alias: {
            'react': path.resolve(
              __dirname,
              'node_modules/react',
            ),
          },
        },
      ],
    ],
  }
}