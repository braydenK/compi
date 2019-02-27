import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
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
                className={index === (menuItems.length - 1) ? "bottom-list-item": ''}
              >
                <ListItemIcon>
                  <FontAwesomeIcon
                    style={{color: item['color']}}
                    icon={item['icon']}
                  />
                </ListItemIcon>

                <ListItemText
                  disableTypography
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
