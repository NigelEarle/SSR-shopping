import { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('auth') @observer
class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}



export default LoginForm;