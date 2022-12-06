module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: [
          'tsx',
          'ts',
          'js',
          'jsx',
          'android.js',
          'android.tsx',
          'ios.js',
          'ios.tsx',
        ],
        alias: {
          '@src': './src/',
          '@Components': './src/Components',
          '@Screens': './src/Screens',
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@assets': './src/assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
