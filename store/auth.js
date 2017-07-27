import { observable, action } from 'mobx';
import axios from 'axios';

let store = null;

class AuthStore {
  @observable email = '';
  @observable password = '';
  @observable isLoggedIn = false;

  constructor(isServer, email, password) {
    this.email = email;
    this.password = password;
  }

  @action sendCreds = async () => {
    const payload = {
      email: this.email,
      password: this.password
    };

    console.log('PAYLOAD', payload);

    const config = {
      method: 'post',
      url: '/api/auth/login',
      data: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
      }
    }

    try {
      const result = await axios.post('/api/auth/login', JSON.stringify(payload))
      console.log('RESULT FROM LOGIN', result);
    } catch(err) {
      console.error(err);
    }
  }
}

export function initAuthStore (isServer, email = '', password = '') {
  if (isServer && typeof window === 'undefined') {
    return new AuthStore(isServer, email, password);
  } else {
    if (store === null) {
      store = new AuthStore(isServer, email, password)
    }
    return store
  }
}

export default new AuthStore;