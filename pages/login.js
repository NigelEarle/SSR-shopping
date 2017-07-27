import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import { LoginForm } from '../components';
import { initAuthStore } from '../store/auth.js';

class Login extends Component {

  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initAuthStore(isServer)
    return {
      email: store.email,
      password: store.password,
      isServer,
    }
  }

  constructor(props) {
    super(props);
    this.store = initAuthStore(props.isServer)
  }

  render() {
    return (
      <Provider auth={this.store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default Login;
