import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('productStore') @observer
class SingleProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      productStore: {
        singleProduct,
        products
      }
    } = this.props;
    return (
      <div>
        <h1>{singleProduct.title}</h1>
        <h3>{singleProduct.description}</h3>
        <p>{singleProduct.inventory}</p>
      </div>
    );
  }
}

export default SingleProduct;
