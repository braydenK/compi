import React from 'react';
import { Drawer, withStyles, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import {} from '@material-ui/icons';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: 200,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 200,
    backgroundColor: '#232e42'
  },
  toolbar: theme.mixins.toolbar,
  listItemText: {
    color: '#ffffff'
  }
});

const SideBar = (props) => {
  const { classes } = props;

  return (
    <div className="classes.root">
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
      <div className={classes.toolbar} />
      <List className={classes.list}>
        {['Algorithms', 'Data Structures', 'Questions'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  type="body2"
                  className={classes.listItemText}
                >
                  {text}
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
