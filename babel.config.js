module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@themes': './src/themes',
          '@utils': './src/utils',
          '@types': './src/types',
        },
      },
    ],
  ],
};
