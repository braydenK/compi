import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import menuItems from './menu-items';

class Sidebar extends Component {

  render() {
    return (
      <div className="container">
        <Drawer
          className="drawer"
          variant="permanent"
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
      </div>
    );
  }
}

export default Sidebar;
