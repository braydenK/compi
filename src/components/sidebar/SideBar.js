import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { IconContext } from 'react-icons';
import './Sidebar.css';
import menuItems from './menu-items';
import {
  GoBeaker,
  GoDatabase,
  GoCode,
  GoFileDirectory,
  GoSettings,
} from 'react-icons/go'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import routes from '../routes';

const drawerWidth = 200;

const styles = theme => ({
  drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }
});

const getIcon = (index) => {
  switch(index) {
    case 1:
      return (
        <IconContext.Provider value={{ color: '#8e44ad' }}>
          <GoDatabase />
        </IconContext.Provider>
      );
    case 2:
      return (
        <IconContext.Provider value={{ color: '#f1c40f' }}>
          <GoCode />
        </IconContext.Provider>
      );
    case 3:
      return (
        <IconContext.Provider value={{ color: '#3498db' }}>
          <GoFileDirectory />
        </IconContext.Provider>
      );
    case 4:
      return (
        <IconContext.Provider value={{ color: '#2c3e50' }}>
          <GoSettings />
        </IconContext.Provider>
      );
    default:
      return (
        <IconContext.Provider value={{ color: '#2ecc71' }}>
          <GoBeaker />
        </IconContext.Provider>
      );
  }
}

class Sidebar extends Component {

  render() {
    const { classes } = this.props;

    return (
      <Router>
        <div>
          <Drawer
            variant="permanent"
            classes={{paper: classes.drawerPaper}}
            anchor="left"
          >
            <List className="list">
              {menuItems.map((item, index) => (
                <Link to="/algorithms-list">
                  <ListItem
                    button
                    key={index}
                    className={index === (menuItems.length - 1) ? "bottom-list-item": "list-item"}
                  >
                    <div className="icon-container">
                      {getIcon(index)}
                    </div>
                    <ListItemText
                      className={item['name'] === 'Resources' ? "shift-text" : "list-item-text"}
                      primary={item['name']}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(Sidebar);
