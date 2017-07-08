import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class DrawerUndocked extends Component {

  constructor(props) {
    super(props);

    this.state ={
      open: false,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      open:false,
    })
  }


  render() {
    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default DrawerUndocked;