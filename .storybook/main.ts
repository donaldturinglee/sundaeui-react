import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      // Modify config for development
      config.resolve.alias = {
        ...config.resolve.alias,
        '@components': path.resolve(__dirname, '../src/components'),
        '@styles': path.resolve(__dirname, '../src/styles'),
        '@utilities': path.resolve(__dirname, '../src/utilities'),
      };

      config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      });
    }
    if (configType === 'PRODUCTION') {
      // Modify config for production
    }
    return config;
  },
};
export default config;
