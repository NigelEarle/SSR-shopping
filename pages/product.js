import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { initProductStore } from '../store/product';
import { SingleProduct } from '../components';

class Product extends Component {
  static async getInitialProps(context) {
    const isServer = !!context.req;
    const store = initProductStore(isServer);
    await store.fetchSingleProduct(parseInt(context.query.id));
    return {
      products: store.products,
      singleProduct: store.singleProduct,
      error: store.error,
      isServer,
    }
  }
  constructor(props) {
    super(props);
    this.store = initProductStore(
      props.isServer,
      props.products,
      props.singleProduct, 
      props.error
    );
  }

  render() {
    return (
      <Provider productStore={this.store}>
        <SingleProduct />
      </Provider>
    );
  }
};

export default Product;