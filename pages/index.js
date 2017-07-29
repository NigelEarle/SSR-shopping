import React, { Component } from 'react';
import Link from 'next/link';
import { Provider } from 'mobx-react';
import { Layout, Products } from '../components';


class Index extends Component {
  //  static getInitialProps ({ req }) {
  //   const isServer = !!req
  //   const store = initStore(isServer)
  //   return { lastUpdate: store.lastUpdate, isServer }
  // }

  // constructor(props) {
  //   super(props);
  //   this.store = initStore(props.isServer)
  // }

  render() {
    return (
      <Layout>
        <Provider>
          <Products />
        </Provider>
      </Layout>
    );
  }
}

export default Index;
