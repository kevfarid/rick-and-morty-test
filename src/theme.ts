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
          margin: '2rem auto',
          maxWidth: '1280px',
        },
        '@media (max-width: 1280px)': {
          'body, html': {
            padding: '4rem',
          },
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
