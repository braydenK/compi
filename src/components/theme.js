import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2C3D55'
    },
    secondary: {
      main: '#F0A202'
    }
  },
  typography: {
    useNextVariants: true
  },
});

export default theme;
