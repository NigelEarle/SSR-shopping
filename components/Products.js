import React,{ Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('productStore') @observer
class Products extends Component {

  render() {
    const {
      productStore: {
        products,
        error,
      },
    } = this.props;
    console.log(this.props);
    return (
      <div>
        {products.map((curr, idx) => <h3>{curr.title}</h3>)}
      </div>
    );
  }
}

export default Products;
