import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#2c3e50'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    color: '#2c3e50',
    title: {
      fontFamily: ['Montserrat', 'sans-serif'].join(',')
    },
  },
  overrides: {
    MuiDrawer: {
      width: 180,
      paper: {
        backgroundColor: '#ffffff',
      }
    },
    MuiListItemText: {
      color: '#2c3e50'
    }
  }
});

export default theme;
