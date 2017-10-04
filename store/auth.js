import { observable, action } from 'mobx';
import fetch from 'isomorphic-unfetch';

let store = null;

class AuthStore {
  @observable email;
  @observable password;
  @observable error;

  constructor(isServer, email, password, error) {
    this.email = email;
    this.password = password;
    this.error = error;
  }

  @action sendCreds = async (method, endpoint) => {
    const payload = {
      email: this.email,
      password: this.password
    };

    const config = {
      method: method,
      data: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
      }
    };
  
    try {
      const data = await fetch(`http://localhost:3000/api/auth/${endpoint}`, config);
      const { user } = await data.json()
      localStorage.setItem('email', user.email);
      this.error = '';
    } catch(error) {
      this.error = 'Invalid login. Try again';
    }
  }
}

export function initAuthStore (isServer, email = '', password = '', error = '') {
  if (isServer && typeof window === 'undefined') {
    return new AuthStore(isServer, email, password, error);
  } else {
    if (store === null) {
      store = new AuthStore(isServer, email, password, error)
    }
    return store
  }
}

export default new AuthStore;