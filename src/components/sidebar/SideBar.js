import React, { Component } from 'react';
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

class Sidebar extends Component {
  render() {
    return (
      <StyledDrawer
        variant="permanent"
        anchor="left"
        classes={{ paper: "drawerPaper" }}
      >
        <SidebarMenu updateId={this.props.updateId} />
      </StyledDrawer>
    );
  }
}

export default Sidebar;
