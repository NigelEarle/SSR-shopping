import { observable, action } from 'mobx';
import axios from 'axios';

let store = null;

class ProductStore {
  @observable products;
  @observable error;

  constructor(isServer, products, error) {
    this.products = products;
    this.error = error
  }

  @action fetchProducts = async () => {
    try {
      const { data: { products } } = await axios.get('http://localhost:3000/api/products')
      this.products = products;
    } catch(error) {
      this.error = error;
    }
  };

  fetchSingleProduct = (productId) => {
    return this.products.filter(current => current.id === productId);
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
