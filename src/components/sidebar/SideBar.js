import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { IconContext } from 'react-icons';
import './Sidebar.css';
import { GoBeaker, GoDatabase, GoCode, GoFileDirectory, GoSettings, GoHome } from 'react-icons/go';

const menuItems = [
  'Home',
  'Algorithms',
  'Data Structures',
  'Challenges',
  'Resources',
  'Settings'
]

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
    case 0:
      return (
        <IconContext.Provider value={{ color: '#2ecc71' }}>
          <GoHome />
        </IconContext.Provider>
      );
    case 1:
      return (
        <IconContext.Provider value={{ color: '#8e44ad' }}>
          <GoBeaker />
        </IconContext.Provider>
      );
    case 2:
      return (
        <IconContext.Provider value={{ color: '#f1c40f' }}>
          <GoDatabase />
        </IconContext.Provider>
      );
    case 3:
      return (
        <IconContext.Provider value={{ color: '#3498db' }}>
          <GoCode />
        </IconContext.Provider>
      );
    case 4:
      return (
        <IconContext.Provider value={{ color: '#2c3e50' }}>
          <GoFileDirectory />
        </IconContext.Provider>
      );
    case 5:
      return (
        <IconContext.Provider value={{ color: '#2c3e50' }}>
          <GoSettings />
        </IconContext.Provider>
      );
    default:
      return (
        <IconContext.Provider value={{ color: '#2ecc71' }}>
          <GoHome />
        </IconContext.Provider>
      );
  }
}

class Sidebar extends Component {

  handleClick(id) {
    this.props.updateId(id)
  }

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}
      >
        <List className="list">
          {menuItems.map((menuItem, index) => (
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
                primary={menuItem}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
