import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import './App.css';
import SideBar from './sidebar/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faBook, faGraduationCap, faArchive, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faCode, faBook, faGraduationCap, faArchive, faCog);

class App extends Component {
  render() {
    return (
      <div className="app">
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <SideBar />
          <main className="content">

          </main>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
