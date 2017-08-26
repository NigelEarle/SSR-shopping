import { observable, action } from 'mobx';
import axios from 'axios';

let store = null;

class ProductStore {
  @observable products = [];
  @observable error = '';

  constructor(products) {
    this.products = products;
  }
}

export function initProductStore (isServer, products = [], error = '') {
  if (isServer && typeof window === 'undefined') {
    return new ProductStore(isServer, products, error);
  } else {
    if (store === null) {
      store = new ProductStore(isServer, products, error)
    }
    return store
  }
}

export default new ProductStore;
