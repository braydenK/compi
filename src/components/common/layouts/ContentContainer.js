import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import ListLayout from './ListLayout';
import GuideLayout from './GuideLayout';

const styles = {

}

const displayComponent = (id) => {
  switch(id) {
    case 1:
      return <ListLayout />
    default:
      return <GuideLayout />
  }
}

class ContentContainer extends Component {

  render() {
    return (
      <div>
        {displayComponent(this.props.displayId)}
      </div>
    )
  }
}

export default withStyles(styles)(ContentContainer);
