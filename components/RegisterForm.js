import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('authStore') @observer
class RegisterForm extends Component {

  submitForm = (e) => {
    e.preventDefault();
    const { authStore } = this.props;
    if (!authStore.email || !authStore.password) {
      authStore.error = 'Please fill out email and password';
    } else {
      authStore.sendCreds('post', 'register');
    }
  }

  render() {
    const { authStore } = this.props;
    return (
      <div>
        <h1>Register</h1>
        {authStore.error &&
          <p>{authStore.error}</p>
        }
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="email"
            onChange={(e) => (
              authStore.email = e.target.value
            )}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => (
              authStore.password = e.target.value
            )}
            placeholder="Password"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RegisterForm;