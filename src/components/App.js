import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withStyles } from '@material-ui/core';
import theme from './theme';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import ResourcesList from './resources-list/ResourcesList';

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
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
    this.showContent = this.showContent.bind(this);
    this.updateId = this.updateId.bind(this);
  }

  updateId(newId) {
    this.setState({id: newId});
  }

  showContent(id) {
    switch (id) {
      case 0:
        return <h1>Algorithms</h1>
      case 1:
        return <h1>Data Structures</h1>
      case 2:
        return <h1>Challenges</h1>
      case 3:
        return <ResourcesList />
      case 4:
        return <h1>Settings</h1>
      default:
        return <h1>Home</h1>
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Sidebar updateId={this.updateId} />

          <main className={classes.content}>
            { this.showContent(this.state.id) }
          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
