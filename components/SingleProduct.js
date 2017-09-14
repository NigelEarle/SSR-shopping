import React from 'react';
import Link from 'next/link';

const SingleProduct = ({
  getProductId,
  id,
  title,
  description,
  inventory,
  price
}) => (

<div>
  <Link as={`/product/${id}`} href={`/product/${id}`}>
    <div>
      <h3>{title}</h3>
    </div>
  </Link>
</div>
);

export default SingleProduct