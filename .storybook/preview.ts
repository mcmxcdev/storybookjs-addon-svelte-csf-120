import type { Preview } from '@storybook/svelte'

import { withThemeByDataAttribute } from '@storybook/addon-styling'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
}

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: 'Light', dataTheme: 'light', color: '#FBFAF7' },
        { name: 'Dark', dataTheme: 'dark', color: '#272822' },
      ],
    },
  },
  dataTheme: {
    default: 'light',
  },
}

export default preview
