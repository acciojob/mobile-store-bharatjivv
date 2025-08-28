// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { initialProducts } from './data';
import AdminPanel from './AdminPanel';
import ProductDetails from './ProductDetails';
import ProductList from './ProductList';


function App() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/admin">Admin Panel</Link>
      </nav>
      <Switch>
        <Route exact path="/" render={() => <ProductList products={products} />} />
        <Route path="/products/:id" render={(props) => <ProductDetails {...props} products={products} />} />
        <Route path="/admin" render={() => <AdminPanel products={products} setProducts={setProducts} />} />
		<Route path="/admin/products/:id" render={(props) => <ProductDetails {...props} products={products} />} />
      </Switch>
    </Router>
  );
}

export default App;

