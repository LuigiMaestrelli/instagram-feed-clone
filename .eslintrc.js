module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all'
  ],
  env: {
    'react-native/react-native': true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 8,
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.93'
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' }
    ],
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }]
  },
  plugins: ['react', 'react-native'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-undef': ['error'],
    'no-console': ['warn'],
    'no-unused-vars': ['warn'],
    'react/prop-types': ['warn'],
    'react/jsx-uses-vars': 'error',
    'react-native/no-unused-styles': ['warn'],
    'react-native/split-platform-components': ['warn'],
    'react-native/no-inline-styles': ['warn'],
    'react-native/no-color-literals': ['off'],
    'react-native/sort-styles': ['off'],
    'react-native/no-raw-text': 'off'
  }
};
