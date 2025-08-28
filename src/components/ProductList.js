// components/ProductList.js
import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div>
      <h1>Mobile Store</h1>
      <div>


      <div>
      <h1>Mobile Store</h1>
      <div className="col-12">
        {products.map((product, i) => (
          <div key={`col-${i}`}>
            <Link to={`/products/${product.id}`}>
              <div className="row">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}

export default ProductList;
