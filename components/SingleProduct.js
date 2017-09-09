import React from 'react';

const SingleProduct = ({
  getProductId,
  id,
  title,
  description,
  inventory,
  price
}) => (
  <div onClick={() => getProductId(id)}>
    <h3>{title}</h3>
  </div>
);

export default SingleProduct