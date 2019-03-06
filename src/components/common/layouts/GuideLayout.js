import React, { Component } from 'react';
import { withStyles, Typography, Divider, Paper } from '@material-ui/core';
import Markdown from 'react-markdown';

const styles = {
  guideContainer: {
    height: '100vh',
  },
  titleContainer: {
    marginTop: 0,
    marginBottom: 50,
  },
  paper: {
    height: '100vh',
    padding: 20
  },
  markdown: {
    fontFamily: 'Open Sans'
  }
}

const mdFile = '# MARKDOWN BABY \n Thats all folks!';

class GuideLayout extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.guideContainer}>
        <div className={classes.titleContainer}>
          <Typography variant="h3" align="center">
            Guide Layout
          </Typography>
          <Divider />
        </div>
          <Paper className={classes.paper}>
            <Markdown
              className={classes.markdown}
              escapeHtml={true}
              source={mdFile}
            />
          </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(GuideLayout);
