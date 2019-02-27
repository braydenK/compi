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
        <IconContext.Provider value={{color: '#2ecc71'}}>
          <GoDatabase />
        </IconContext.Provider>
      );
    case 2:
      return (
        <IconContext.Provider value={{ color: '#2ecc71' }}>
          <GoCode />
        </IconContext.Provider>
      );
    case 3:
      return (
        <IconContext.Provider value={{ color: '#2ecc71' }}>
          <GoFileDirectory />
        </IconContext.Provider>
      );
    case 4:
      return (
        <IconContext.Provider value={{ color: '#2ecc71' }}>
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
        <Drawer
          variant="permanent"
          classes={{paper: classes.drawerPaper}}
          anchor="left"
        >
          <List className="list">
            {menuItems.map((item, index) => (
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
            ))}
          </List>
        </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
