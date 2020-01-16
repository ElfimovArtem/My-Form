import * as React from 'react';
import './App-styles.css'
import { createStore } from 'redux';
import rootReducer from './store/reducers'
import { AuthController } from './components/AuthContainer';
import { RegistrationController } from './components/RegistrationContainer';
import { Provider } from 'react-redux';

export const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <h1>My First Form</h1>
          <div className="forms">
            <AuthController />
            <RegistrationController />
          </div>
        </div>
      </Provider>
    )
  }
}
