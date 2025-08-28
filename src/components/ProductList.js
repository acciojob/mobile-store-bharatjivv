import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h1>Mobile Store</h1>
      <div className="col-12">
        {products.map((product) => (
          <div key={product.id} className="product-item" data-testid={`product-${product.id}`}>
            <Link to={`/products/${product.id}`}>
              <div className="product-card">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;