import React, { Component } from 'react';
import { Typography, withStyles, Collapse, Divider, List, ListItemText, ListItem } from '@material-ui/core';

const styles = () => ({
  sheetContainer: {
    height: '100vh',
  }
})

class ListLayout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openId: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ openId: id });
  }

  render() {
    const { classes, title, items } = this.props;
    let counter = 1;

    return (
      <div className={classes.sheetContainer}>
        <div>
          <Typography
            variant="h2"
            align="center"
          >
            {title}
          </Typography>
          <Divider />
        </div>

        {items.map((item) => (
          <List key={counter}>
            <div key={counter+10}>
              <ListItem
                button
                key={item.id}
                onClick={this.handleClick.bind(this, item.id)}
              >
                <ListItemText primary={item.category} />
              </ListItem>

              <Collapse
                key={counter+100}
                in={this.state.openId === item.id}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.items.map((nestedItem) => (
                    <ListItem button className={classes.nested} key={nestedItem.id}>
                      <ListItemText inset primary={nestedItem.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          </List>
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(ListLayout);
