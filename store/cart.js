import { observable, action } from 'mobx';
import fetch from 'isomorphic-unfetch';

let store = null;

class CartStore {
  @observable cart;
  @observable error;
  constructor(isServer, cart, error) {
    this.cart = cart;
    this.error = error;
  }

  @action addProductToCart = async (id) => {
    const config = {
      method: 'POST',
      data: JSON.stringify({ id }),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
      }
    };

    try {
      const data = await fetch('http://localhost:3000/api/cart/new');
      const { response } = await data.json();
      console.log('RES', response)
    } catch (error) {
      this.error = error;
    }
  };


}
export function initCartStore(isServer, cart = [], error = ''){
  if (isServer && typeof window === 'undefined'){
    return new CartStore(isServer, cart, error);
  } else {
    if (store === null) {
      store = new CartStore(isServer, cart, error);
    }
    return store;
  }
}

export default new CartStore;
