import React, { Component } from 'react';
import { Drawer, withStyles, List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';

const styledBy = (property, mapping) => props => mapping[props[property]];

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  listItem: {
    '&:hover': {
      backgroundColor: '#42526E'
    },
    position: styledBy('bottomListItem', 'absolute')
  },
  listItemText: {
    fontWeight: 500,
    marginLeft: -10,
  },
  bottomListItem: {
    position: 'absolute',
    bottom: 0,
  }
});

const menuItems = [
  {
    'name': 'Study',
    'icon': 'graduation-cap',
    'color': '#2c3e50',
  },
  {
    'name': 'Questions',
    'icon': 'code',
    'color': '#2c3e50',
  },
  {
    'name': 'Resources',
    'icon': 'archive',
    'color': '#2c3e50',
  },
  {
    'name': 'Settings',
    'icon': 'cog',
    'color': '#2c3e50',
  },
]


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: 'bottom'
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="container">
        <Drawer
          className="drawer"
          variant="permanent"
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List className="list">
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={index}
                className={index === 3 ? [classes.listItem, classes.bottomListItem] : classes.listItem}
                value="dynamic-class-name"
              >
                <ListItemIcon className="listItemIcon">
                  <FontAwesomeIcon style={{color: item['color']}} icon={item['icon']} />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography
                      type="body2"
                      className={classes.listItemText}
                    >
                      {item['name']}
                    </Typography>}
                />
              </ListItem>
            ))}
        </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
