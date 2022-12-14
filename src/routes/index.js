import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { ProductCategory } from '../pages/ProductCategory';
import React from 'react';
import { UserInfo } from '../pages/UserInfo';

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos/:id" element={<Product />} />
      <Route path="/:path" element={<ProductCategory />} />
      <Route path="/sacola" element={<UserInfo />} />
    </Routes>
  );
};
