import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('auth') @observer
class RegisterForm extends Component {

  submitForm = (e) => {
    e.preventDefault();
    const { auth } = this.props;
    if (!auth.email || !auth.password) {
      auth.error = 'Please fill out email and password';
    } else {
      auth.sendCreds('post', 'register');
    }
  }

  render() {
    const { auth } = this.props;
    return (
      <div>
        <h1>Register</h1>
        {auth.error &&
          <p>{auth.error}</p>
        }
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="email"
            onChange={(e) => (
              auth.email = e.target.value
            )}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={(e) => (
              auth.password = e.target.value
            )}
            placeholder="Password"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RegisterForm;