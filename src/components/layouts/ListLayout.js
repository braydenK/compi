import React, { Component } from 'react';
import { Typography, Collapse, withStyles, Divider, List, ListItemText, ListItem } from '@material-ui/core';

const styles = () => ({
  sheetContainer: {
    height: '100vh',
  }
})

const title = 'Algorithms'
const listItems = [
    {
      'id': 0,
      'category': 'Sorting and Searching Algorithms',
      'items': [
        {
          'name': 'Bubble Sort'
        }
      ],
    },
    {
      'id': 1,
      'category': 'Graph Algorithms',
      'items': [
        {
          'name': 'Breadth First Search (BFS)'
        },
        {
          'name': 'Depth First Search (DFS)'
        },
      ],
    },
    {
      'id': 2,
      'category': 'Number Theory',
      'items': [
        {
          'name': 'Chinese Remainder Theorem'
        }
      ],
    },
]

class ListLayout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openId: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ openId: id+10 });
  }

  render() {
    const { classes } = this.props;

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

        {listItems.map((item) => (
          <List key={item.id+10}>
            <div key={item.id}>
              <ListItem
                button
                key={item.id}
                onClick={this.handleClick.bind(this, item.id)}
              >
                <ListItemText primary={item.category} />
              </ListItem>
              <Collapse
                key={item.id+100}
                in={this.state.openId === item.id+100}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.items.map((alg) => (
                    <ListItem button className={classes.nested} key={item.id+1000}>
                      <ListItemText inset primary={alg.name} />
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
