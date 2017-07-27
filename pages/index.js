import { Component } from 'react';
import Link from 'next/link';
import { Provider } from 'mobx-react';
import { Layout, Products } from '../components';


class Index extends Component {
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
