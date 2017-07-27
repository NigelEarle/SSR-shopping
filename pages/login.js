import React, { Component } from 'react';
import { Provider } from 'mobx-react'; 
import { LoginForm } from '../components';

class Login extends Component {
  render() {
    return (
      <Provider>
        <LoginForm />
      </Provider>
    );
  }
}

export default Login;
