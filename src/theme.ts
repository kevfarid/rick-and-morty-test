import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
  {
    config: {
      initialColorMode: 'dark',
      useSystemColorMode: false,
    },
    styles: {
      global: {
        'body, html': {
          padding: 0,
          margin: '0 auto',
        },
        '*': {
          boxSizing: 'border-box',
          scrollBehavior: 'smooth',
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'blue' })
);

export default theme;
