import type { StorybookConfig } from '@storybook/sveltekit'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: [
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-svelte-csf',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: true,
      },
    },
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {},
  },
  docs: {
    autodocs: false,
  },
  core: { disableTelemetry: true },
}

export default config
