import React from 'react';
import { Drawer, withStyles, List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#172B4D'
  },
  toolbar: theme.mixins.toolbar,
  listItem: {
    '&:hover': {
      backgroundColor: '#42526E'
    }
  },
  listItemText: {
    color: '#ffffff',
    fontWeight: 500,
    marginLeft: -10
  },
  listItemIcon: {
    height: 20,
    width: 20,
  },
  icon: {
    color: '#ffffff'
  },
  bottomList: {
    height: '100%',
    position: 'relative'
  },
  bottomListItem: {
    '&:hover': {
      backgroundColor: '#42526E'
    },
    position: 'absolute',
    bottom: 0,
  }
});

const menuItems = [
  {
    'name': 'Study',
    'icon': 'graduation-cap',
    'color': '#00C7E6',
  },
  {
    'name': 'Questions',
    'icon': 'code',
    'color': '#57D9A3',
  },
  {
    'name': 'Resources',
    'icon': 'archive',
    'color': '#FFC400',
  },
  {
    'name': 'Settings',
    'icon': 'cog',
    'color': '#6B778C',
  },
]

const SideBar = (props) => {
  const { classes } = props;

  return (
    <div className="classes.root">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List className={classes.list}>
          {menuItems.map((item, index) => (
            <ListItem button key={index} className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
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

export default withStyles(styles)(SideBar);
