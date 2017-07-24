import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { NavLink } from 'react-router-dom';

const styleSheet = createStyleSheet('SignIn', {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  center: {
    margin: 'auto',
  },
  avatarWrapper: {
    marginTop: 40,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
  },
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formValue = {
      username: this.state.username,
      password: this.state.password,
    };

    if (
      this.state.username === '' ||
      this.state.password === ''
    ) {
      return;
    }

    console.log(`${formValue.username} submit`);
    // TODO: 提交数据给服务器
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <div className={classes.avatarWrapper}>
          <Avatar className={classes.center}>N</Avatar>
        </div>
        <form
          className={classes.form}
          onSubmit={this.handleSubmit}
        >
          <TextField
            id="username"
            label="请输入账号"
            margin="normal"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <TextField
            id="password"
            label="请输入密码"
            type="password"
            margin="normal"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button
            raised
            color="primary"
            type="submit"
            onTouchTap={this.handleSubmit}
          >
            登录
          </Button>
        </form>
        <NavLink to="signup">
          <Button>快速注册</Button>
        </NavLink>
      </div>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(SignIn);
