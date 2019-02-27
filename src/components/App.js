import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withStyles } from '@material-ui/core';
import theme from './theme';
import './App.css';
import SideBar from './sidebar/Sidebar';
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
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <SideBar />

          <main className={classes.content}>
            <GuideLayout />
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
