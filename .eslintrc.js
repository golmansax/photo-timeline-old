module.exports = {
  extends: 'golmansax',

  settings: {
    'import/resolver': {
      webpack: { config: 'webpack/config.client.js' },
      node: { paths: [`${__dirname}/lib`] },
    },
  },

  rules: {
    'global-require': [1],
    'react/jsx-no-bind': [0],
    'import/no-unresolved': [1],
    'no-underscore-dangle': [2, {
      allowAfterThis: true,
    }],
  }
};
