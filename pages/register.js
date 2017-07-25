import React, { Component } from 'react';

class Login extends Component {
  
  submitForm = (e) => {
    e.preventDefault();
    console.log('REGISTER FORM')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" name="email" placeholder="Email"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
