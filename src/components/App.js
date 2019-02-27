import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withStyles } from '@material-ui/core';
import theme from './theme';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faBook, faGraduationCap, faArchive, faCog } from '@fortawesome/free-solid-svg-icons';
import GuideLayout from './layouts/GuideLayout';
import ListLayout from './layouts/ListLayout';

library.add(faCode, faBook, faGraduationCap, faArchive, faCog);

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
});

class App extends Component {

  showContent(id) {
    switch(id) {
      case 0:
        return <ListLayout />
      default:
        return <GuideLayout />
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Sidebar />

          <main className={classes.content}>
            { this.showContent(this.props.displayId) }
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
