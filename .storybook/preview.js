/** @type { import('@storybook/react').Preview } */
import '../src/App.css';

const preview = {
  parameters: {
    backgrounds: {
      default: 'light-primary',
      values: [
        {
          name: 'light-primary',
          value: '#ddd',
        },
        {
          name: 'dark-primary',
          value: '#000',
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
