import React from 'react';
import styled from 'styled-components';
import { Drawer } from '@material-ui/core';

const drawerWidth = 200;

const styles = styled(Drawer)`
  .drawerPaper {
    position: 'relative',
  }
`;

function LeftDrawer() {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >

    </Drawer>
  );
}
