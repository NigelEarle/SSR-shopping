import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { RegisterForm } from '../components';

class Register extends Component {
  
  submitForm = (e) => {
    e.preventDefault();
    console.log('REGISTER FORM')
  }

  render() {
    return (
      <Provider>
        <RegisterForm />
      </Provider>
    );
  }
}

export default Register;
