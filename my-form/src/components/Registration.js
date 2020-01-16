import * as React from 'react';

export default class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onChangeRepeatPassword=this.onChangeRepeatPassword.bind(this);
  }

  onChangeEmail(event) {
    this.props.setRegistrationChangeEmail(event.target.value);
  }

  onChangePassword(event) {
    this.props.setRegistrationChangePassword(event.target.value);
  }

  onChangeRepeatPassword(event) {
    this.props.setRegistrationChangeRepeatPassword(event.target.value);
  }

  render() {
    return (
      <div className="registration">
        <h3>Registration</h3>
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
            <input
              type="password"
              name="Repeat password"
              placeholder="Repeat password"
              value={this.props.repeatPassword}
              onChange={this.onChangeRepeatPassword}
            />
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    )
  }
}
