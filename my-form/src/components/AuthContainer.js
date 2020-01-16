import * as React from 'react';
import { connect } from 'react-redux';
import { setAuthChangeEmail, setAuthChangePassword } from '../store/auth/actions';
import Auth from './Auth';

class AuthContainer extends React.Component {
  render() {
    return (
      <Auth
        email={this.props.email}
        password={this.props.password}
        setAuthChangeEmail={this.props.setAuthChangeEmail}
        setAuthChangePassword={this.props.setAuthChangePassword}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

const mapDispatchToProps = {
    setAuthChangeEmail,
    setAuthChangePassword
};

export const AuthController = connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
