import React, { Component } from 'react';
import { AuthStore } from '../store';

console.log(AuthStore);

class Login extends Component {

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
