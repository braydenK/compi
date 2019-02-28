import React, { Component } from 'react';
import { List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import IconContainer from '../common/IconContainer';
import { GoBeaker, GoDatabase, GoCode, GoFileDirectory, GoSettings, GoHome } from 'react-icons/go';

const menuItems = [
  {
    title: 'Home',
    color: '#2ecc71',
    icon: <GoHome/>
  },
  {
    title: 'Algorithms',
    color: '#2ecc71',
    icon: <GoBeaker />
  },
  {
    title: 'Data Structures',
    color: '#8e44ad',
    icon: <GoDatabase />
  },
  {
    title: 'Challenges',
    color: '#f1c40f',
    icon: <GoCode />
  },
  {
    title: 'Resources',
    color: '#3498db',
    icon: <GoFileDirectory />
  },
  {
    title: 'Settings',
    color: '#2c3e50',
    icon: <GoSettings />
  }
];


const styles = () => ({
  listItem: {
    '&:hover': {
      backgroundColor: '#ecf0f1',
    },
  },
});


class SidebarMenu extends Component {

  handleClick(id) {
    this.props.updateId(id)
  }

  render() {
    const { classes } = this.props;

    return (
      <List className="list">
        {menuItems.map((item, index) => (
          <ListItem
            button
            className={classes.listItem}
            onClick={() => this.handleClick(index)}
            key={index}
          >
            <div className="icon-container">
              <IconContainer color={item.color} icon={item.icon} />
            </div>
            <ListItemText
              primary={item.title}
            />
          </ListItem>
        ))}
      </List>
    )
  }
}

export default withStyles(styles)(SidebarMenu);
