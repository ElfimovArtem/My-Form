import * as React from 'react';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
  }

  onChangeEmail(event) {
    this.props.setAuthChangeEmail(event.target.value);
  }

  onChangePassword(event) {
    this.props.setAuthChangePassword(event.target.value);
  }

  render() {
    return (
      <div className="auth">
      <h3>Login</h3>
      <form>
        <div>
          <input
            type="text"
            name="login"
            placeholder="E-mail"
            autoComplete="off"
            value={this.props.email}
            onChange={this.onChangeEmail}
          />
        </div>
        <div>
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={this.props.password}
            onChange={this.onChangePassword}
          />
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </form>
    </div>
    );
  }
}
