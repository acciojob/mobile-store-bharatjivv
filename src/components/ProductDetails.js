import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function ProductDetails({ products }) {
  const { id } = useParams();
  const history = useHistory();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div data-testid="not-found">Product not found</div>;

  return (
    <div>
      <h2 data-testid="product-name">{product.name}</h2>
      <img 
        src={product.image} 
        alt={product.name} 
        data-testid="product-image" 
      />
      <p data-testid="product-description">{product.description}</p>
      <p data-testid="product-price">Price: ${product.price}</p>
      <button className="btn" onClick={() => history.push('/')} data-testid="back-button">Back</button>
    </div>
  );
}

export default ProductDetails;