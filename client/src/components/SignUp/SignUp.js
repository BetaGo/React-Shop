import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { NavLink } from 'react-router-dom';

const styleSheet = createStyleSheet('SignUp', {
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rePassword: '',
      usernameError: false,
      passwordError: false,
      rePasswordError: false,
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRePassword = this.handleRePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(e) {
    const username = e.target.value;
    this.setState({
      username,
    });
    const re = /^\w{6,18}$/;
    if (!re.test(username)) {
      this.setState({
        usernameError: true,
      });
      return;
    }

    // TODO: Ajax验证用户名是否已存在

    this.setState({
      usernameError: false,
    });
  }

  handlePassword(e) {
    const password = e.target.value;
    this.setState({
      password,
    });
    const re = /^\w{6,18}$/;
    if (!re.test(password)) {
      this.setState({
        passwordError: true,
      });
      return;
    }

    this.setState({
      passwordError: false,
    });
  }

  handleRePassword(e) {
    const rePassword = e.target.value;
    const password = this.state.password;
    this.setState({
      rePassword,
    });
    if (rePassword !== password) {
      this.setState({
        rePasswordError: true,
      });
      return;
    }
    this.setState({
      rePasswordError: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formValue = {
      username: this.state.username,
      password: this.state.password,
    };
    if (
      this.state.passwordError ||
      this.state.rePasswordError ||
      this.state.usernameError ||
      this.state.username === '' ||
      this.state.password === '' ||
      this.state.rePassword === ''
    ) {
      return;
    }
    console.log(`${formValue.username} SignUp`);
    // TODO: 异步提交表单数据
  }

  render() {
    const classes = this.props.classes;

    return (
      <div>
        <form
          className={classes.form}
          onSubmit={this.handleSubmit}
        >
          <TextField
            id="username"
            label="请输入用户名"
            value={this.state.username}
            onChange={this.handleUsername}
            margin="normal"
            error={this.state.usernameError}
            helperText="用户名为长度在请限制在6～18个字符，仅支持字母与数字的组合"
          />
          <TextField
            id="password"
            type="password"
            label="请输入密码"
            value={this.state.password}
            onChange={this.handlePassword}
            margin="normal"
            error={this.state.passwordError}
            helperText="密码为长度在6~18个字符之间的数字与字母的组合"
          /><TextField
            id="rePassword"
            type="password"
            label="请再次输入密码"
            value={this.state.rePassword}
            onChange={this.handleRePassword}
            margin="normal"
            error={this.state.rePasswordError}
            helperText="请再次输入密码，确保两次输入的密码一致"
          />
          <Button
            raised
            type="submit"
            color="primary"
          >
            注册
          </Button>
        </form>
        <NavLink to="signin">
          <Button>登录</Button>
        </NavLink>
      </div>
    );
  }
}

export default withStyles(styleSheet)(SignUp);
