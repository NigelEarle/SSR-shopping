import { observable, action } from 'mobx';
import axios from 'axios';

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
      url: `/api/auth/${endpoint}`,
      data: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
      }
    };
  
    try {
      const { data } = await axios(config);
      localStorage.setItem('email', data.email);
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