import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Products from '../components/Products/Products';

const MyRouter: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MyRouter;