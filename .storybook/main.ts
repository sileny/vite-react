import type { StorybookConfig } from "@storybook/react-vite";
import moduleFederationConfig from '../module-federation-config.js';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    {
      name: '@module-federation/storybook-addon',
      options: {
        moduleFederationConfig,
      },
    },
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
