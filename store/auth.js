import { observable } from 'mobx';

class AuthStore {
  @observable email = '';
  @observable password = '';
}

export default new AuthStore;