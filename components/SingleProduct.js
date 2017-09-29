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
    <Link prefetch as={`/product/${id}`} href={`/product?id=${id}`}>
      <a>
        <div>
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  </div>
);

export default SingleProduct