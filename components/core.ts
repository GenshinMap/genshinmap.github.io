import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const isLocal = () => {
  // Returns true if we are in a browser.
  // Returns false if we are in SSR.
  return typeof window !== 'undefined';
};

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#607d8b',
    },
    error: {
      main: red.A400,
    },
  },
});
