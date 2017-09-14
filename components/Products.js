import React,{ Component } from 'react';
import { inject, observer } from 'mobx-react';
import { SingleProduct } from '../components';

@inject('productStore') @observer
class Products extends Component {


  getProductId = (id) => {
    const { productStore: { getSingleProduct } } = this.props;
    getSingleProduct(id)
    .then(console.log);
  }

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
          <SingleProduct
            {...product}
            key={product.id}
            getProductId={this.getProductId}
          />
        ))}
      </div>
    );
  }
}

export default Products;
