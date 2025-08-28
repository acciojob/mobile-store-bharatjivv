// components/ProductList.js
import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h1>Mobile Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} data-testid={`product-${product.id}`}>
            <Link to={`/products/${product.id}`} data-testid="product-link">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
