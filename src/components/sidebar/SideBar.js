import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import menuItems from './menu-items';

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
                  <FontAwesomeIcon
                    className="icon"
                    style={{ color: item['color'] }}
                    icon={item['icon']}
                  />
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
