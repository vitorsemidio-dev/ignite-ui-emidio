module.exports = {
  "stories": ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", "@storybook/addon-mdx-gfm"],
  "core": {
    "builder": "@storybook/builder-vite",
  },
  "framework": {
    name: "@storybook/react-vite",
    options: {}
  },
  "features": {
    "storyStoreV7": true
  },
  staticDirs: ["../public"],
  viteFinal: (config, {
    configType
  }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignite-ui-emidio/';
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};