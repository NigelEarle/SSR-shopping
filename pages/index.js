import React, { Component } from 'react';
import Link from 'next/link';
import { Provider } from 'mobx-react';
import { Layout, Products } from '../components';
import { initProductStore } from '../store/product';


class Index extends Component {
   static async getInitialProps ({ req }) {
    const isServer = !!req
    const store = initProductStore(isServer);
    await store.fetchProducts();
    return { 
      products: store.products,
      error: store.error
    };
  }

  constructor(props) {
    super(props);
    this.store = initProductStore(props.isServer)
  }

  render() {
    const { products, error } = this.props
    return (
      <Layout>
        <Provider store={this.store} products={products} error={error}>
          <Products />
        </Provider>
      </Layout>
    );
  }
}

export default Index;
