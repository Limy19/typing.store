import React, { useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Registration from '../features/Auth/components/RegistrationForm';
import Login from '../features/Auth/components/LoginForm';
import Layout from './Layout';
import { RootState, useAppDispatch } from '../store/store';
import { check } from '../features/Auth/authSlice';

import MainPage from '../features/MainPage/MainPage';
import { initCategory } from '../features/CategoryList/categorySlice';
import CategoryPage from '../features/CategoryList/components/CategoryPage';

import SpeedTest from '../features/speedTest/components/SpeedTest';
import Lk from '../features/lk/components/LkPage';
import CartPage from '../features/CartPage/components/CartPage';
import ProductPage from '../features/ProductList/components/ProductPage';
import Repair from '../features/Repair/components/Repair';

function App(): JSX.Element {
 
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(check());
    void dispatch(initCategory());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/speedTest" element={<SpeedTest />} />
          <Route path="/lk" element={<Lk />} />
          <Route path="/repair" element={<Repair />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
