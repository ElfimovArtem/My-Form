import * as React from 'react';
import { connect } from 'react-redux';
import Registration from './Registration';
import {
  setRegistrationChangeEmail,
  setRegistrationChangePassword,
  setRegistrationChangeRepeatPassword
} from '../store/registration/actions';

export class RegistrationContainer extends React.Component {
  render() {
    return (
      <Registration
        email={this.props.email}
        password={this.props.password}
        setRegistrationChangeEmail={this.props.setRegistrationChangeEmail}
        setRegistrationChangePassword={this.props.setRegistrationChangePassword}
        setRegistrationChangeRepeatPassword={this.props.setRegistrationChangeRepeatPassword}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.registration.email,
    password: state.registration.password,
    repeatPassword: state.registration.repeatPassword
  };
};

const mapDispatchToProps = {
    setRegistrationChangeEmail,
    setRegistrationChangePassword,
    setRegistrationChangeRepeatPassword
};

export const RegistrationController = connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);
