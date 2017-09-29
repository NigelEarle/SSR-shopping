import { observable, action } from 'mobx';
import fetch from 'isomorphic-unfetch';

let store = null;

class ProductStore {
  @observable products;
  @observable error;

  constructor(isServer, products, error) {
    this.products = products;
    this.error = error;
  };

  @action fetchProducts = async () => {
    try {
      const data = await fetch('http://localhost:3000/api/products');
      const { products } = await data.json();
      this.products = products;
    } catch(error) {
      this.error = error;
    }
  };

  fetchSingleProduct = (id) => {
    if (!this.products) {
      // use iso-fetch for req
    }
    // return Promise.resolve(this.products.filter(product => id === product.id)[0]);
  };
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
