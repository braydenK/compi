import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemText, withStyles, Typography } from '@material-ui/core';
import { IconContext } from 'react-icons';
import './Sidebar.css';
import menuItems from './menu-items';
import {
  GoBeaker,
  GoDatabase,
  GoCode,
  GoFileDirectory,
  GoSettings,
} from 'react-icons/go';

// {index === (menuItems.length - 1) ? "bottom-list-item": "list-item"}

const drawerWidth = 200;

const styles = () => ({
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
    },
    listItem: {
      '&:hover': {
        backgroundColor: '#ecf0f1',
      },
    },
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

  handleClick(id) {
    console.log('Clicked id: ' + id);
    this.props.updateId(id)
  }

  render() {
    const { classes } = this.props;

    return (
          <Drawer
            variant="permanent"
            anchor="left"
          >
            <List className="list">
              {menuItems.map((item, index) => (
                  <ListItem
                    button
                    className={classes.listItem}
                    onClick={() => this.handleClick(index)}
                    key={index}
                  >
                    <div className="icon-container">
                      {getIcon(index)}
                    </div>
                    <ListItemText
                      primary={item.name}
                    />
                  </ListItem>
              ))}
            </List>
          </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
