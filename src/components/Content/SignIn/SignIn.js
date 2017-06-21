import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SingIn extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <TextField
            hintText="用户名"
            floatingLabelText="请输入用户名"
            name="userName"
          /><br />
          <TextField
            hintText="密码"
            floatingLabelText="请输入密码"
            type="password"
            name="password"
          /><br />
          <RaisedButton label="登录" primary={true} />
        </form>
      </div>
    );
  }
}

SingIn.propTypes = {
  handleSubmit: PropTypes.func
};

export default SingIn;