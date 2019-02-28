import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, withStyles } from '@material-ui/core';
import theme from './theme';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import ResourcesList from './resources-list/ResourcesList';

import JssProvider from 'react-jss/lib/JssProvider';
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import Home from './home/Home';
import DataStructuresList from './data-structures/DataStructuresList';
import AlgorithmsList from './algorithms/AlgorithmsList';
import ChallengesList from './challenges/ChallengesList';
import Settings from './settings/Settings';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // Define a custom insertion for injecting the JSS styles in the DOM
  insertionPoint: document.getElementById("jss-insertion-point")
});

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
        return <Home />
      case 1:
        return <AlgorithmsList />
      case 2:
        return <DataStructuresList />
      case 3:
        return <ChallengesList />
      case 4:
        return <ResourcesList />
      case 5:
        return <Settings />
      default:
        return <Home />
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <div className={classes.root}>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Sidebar updateId={this.updateId} />

            <main className={classes.content}>
              { this.showContent(this.state.id) }
            </main>
          </MuiThemeProvider>
        </div>
      </JssProvider>
    );
  }
}

export default withStyles(styles)(App);
