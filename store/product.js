import { observable, action } from 'mobx';
import fetch from 'isomorphic-unfetch';

let store = null;

class ProductStore {
  @observable products;
  @observable singleProduct;
  @observable error;

  constructor(isServer, products, singleProduct, error) {
    this.products = products;
    this.singleProduct = singleProduct
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

  @action fetchSingleProduct = async (id) => {
    if (!this.products.length) {
      try {
        const data = await fetch(`http://localhost:3000/api/products/${id}`);
        const { product } = await data.json();
        this.singleProduct = product;
      } catch (error) {
        this.error = error;
      }
    } else {
      this.singleProduct = await Promise.resolve(this.products.filter(product => id === product.id)[0]);
    }
  };
}

export function initProductStore (isServer, products = [], singleProduct = {}, error = '') {
  if (isServer && typeof window === 'undefined') {
    return new ProductStore(isServer, products, singleProduct, error);
  } else {
    if (store === null) {
      store = new ProductStore(isServer, products, singleProduct, error)
    }
    return store
  }
}

export default new ProductStore;
