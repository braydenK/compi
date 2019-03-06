import React from 'react';
import styled from 'styled-components';
import { Drawer } from '@material-ui/core';
import SidebarMenu from './SidebarMenu';

const StyledDrawer = styled(Drawer)`
  &.drawerPaper {
    position: 'relative';
    white-space: 'nowrap';
    width: 200;
  }
`;

function Sidebar(props) {
  return (
    <StyledDrawer
      variant="permanent"
      anchor="left"
      classes={{
        paper: "drawerPaper"
      }}
    >
      <SidebarMenu updateId={props.updateId} />
    </StyledDrawer>
  );
}

export default Sidebar;
