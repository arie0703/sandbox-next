const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router'
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {}
  },

  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, '../src/');
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
            url: false,
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../src/'),
    });
    return config;
  }
};
