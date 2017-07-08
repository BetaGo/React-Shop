import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconRemoveCircle from 'material-ui/svg-icons/content/remove-circle';
import IconAddCircle from 'material-ui/svg-icons/content/add-circle';


class NumberControl extends Component {
  constructor(props) {
    super(props);

    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

    this.state ={
      number: this.props.number,
    }
  }

  handleAdd(e) {
    const number = Number.parseInt(this.state.number, 10) + 1;
    this.setState({
      number,
    })
  }

  handleRemove(e) {
    if (Number.parseInt(this.state.number, 10) > 0 ) {
      const number = Number.parseInt(this.state.number, 10) - 1;
      this.setState({
        number,
      })
    }
    return;
  }

  render() {
    const number = this.state.number;
    return (
      <div>
        <IconButton tooltip="remove">
          <IconRemoveCircle />
        </IconButton>
        <TextField
          hintText={number}
        />
        <IconButton tooltip="add">
          <IconAddCircle />
        </IconButton>
      </div>
    );
  }
}

export default NumberControl;