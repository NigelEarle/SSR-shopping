import React, { Component } from 'react';
import { initProductStore } from '../store/product';

class Product extends Component {
  // static async getInitialProps({ req }) {
  //   const isServer = !!req;
  //   const store = initProductStore(isServer);
  //   await store.fetchSingleProduct();
  //   return {
  //     product: store.product,
  //     error: store.error,
  //     isServer,
  //   }
  // }
  constructor(props) {
    super(props);
      // this.store = initProductStore(
      //   props.isServer,
      //   props.products, 
      //   props.error
      // );
  }

  render() {
    

    return (
      <div>Single Product</div>
    );
  }
};

export default Product;