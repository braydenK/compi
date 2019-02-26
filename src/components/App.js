import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import './App.css';
import SideBar from './sidebar/SideBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <SideBar />
          APP
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
