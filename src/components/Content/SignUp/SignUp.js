import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Singup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
      rePassword: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <TextField
            hintText="用户名"
            floatingLabelText="请输入用户名"
            name="userName"
            onChange={this.handleInputChange}
          /><br />
          <TextField
            hintText="密码"
            floatingLabelText="请输入密码"
            type="password"
            name="password"
            onChange={this.handleInputChange}
          /><br />
          <TextField
            hintText="确认密码"
            floatingLabelText="请再次输入密码"
            type="password"
            name="rePassword"
            onChange={this.handleInputChange}
            errorText = {(this.state.password !== this.state.rePassword) ? '两次输入的密码不一致' : ''}
          /><br />
          <RaisedButton label="注册" primary={true} />
        </form>
      </div>
    );
  }
}

Singup.propTypes = {

};

export default Singup;