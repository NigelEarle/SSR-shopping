import React, { Component } from 'react';
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
      error: store.error,
      isServer
    };
  }

  constructor(props) {
    super(props);
    this.store = initProductStore(
      props.isServer,
      props.products, 
      props.error
    );
  }

  render() {
    return (
      <Layout>
        <h1>Welcome To SSR Shopping!</h1>
        <Provider productStore={this.store}>
          <Products />
        </Provider>
      </Layout>
    );
  }
}

export default Index;
