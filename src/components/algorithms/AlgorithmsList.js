import React from 'react';
import { Typography, withStyles } from '@material-ui/core';

const styles = () => ({
  sheetContainer: {
    height: '100vh',
  }
})

function AlgorithmsList(props) {
  const { classes } = props;

  return (
    <div className={classes.sheetContainer}>
      <div className="title-container">
        <Typography
          variant="h2"
          align="center"
        >
          Algorithms
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(AlgorithmsList);
