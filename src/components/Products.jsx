import React, { useContext } from 'react';

import Product from './Product';

// importamos el estado
import AppContex from '../context/AppContex';

import '../styles/components/Products.css';

function Products() {
  // const { products, addToCart } = useContext(AppContex);

  const { state, addToCart } = useContext(AppContex);

  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
