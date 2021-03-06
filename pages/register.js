import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import { RegisterForm } from '../components';
import { initAuthStore } from '../store/auth.js';

class Register extends Component {

  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initAuthStore(isServer)
    return {
      email: store.email,
      password: store.password,
      error: store.error,
      isServer,
    }
  }

  constructor(props) {
    super(props);
    this.store = initAuthStore(
      props.isServer,
      props.email,
      props.password,
      props.error
    );
  }

  render() {
    return (
      <Provider authStore={this.store}>
        <RegisterForm />
      </Provider>
    );
  }
}

export default Register;
