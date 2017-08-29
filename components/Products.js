import React,{ Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('store') @observer
class Products extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Render all products</h1>
      </div>
    );
  }
}

export default Products;
