import React,{ Component } from 'react';
import { inject, observer } from 'mobx-react';
import { ListItemProduct } from '../components';

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
        {products.map((product, idx) => (
          <ListItemProduct {...product} key={product.id} /> 
        ))}
      </div>
    );
  }
}

export default Products;
