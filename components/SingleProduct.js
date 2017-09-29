import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('productStore') @observer
class SingleProduct extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    console.log(this.props)
    return (
      <div>Product</div>
    );
  }
}

export default SingleProduct;
