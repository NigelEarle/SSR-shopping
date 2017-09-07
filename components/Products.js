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

    return (
      <div>
        {products.map((curr, idx) => (
          <h3>{curr.title}</h3> 
        ))}
        <h1>Render all products</h1>
      </div>
    );
  }
}

export default Products;
