import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from '../features/Auth/components/RegistrationForm';
import Login from '../features/Auth/components/LoginForm';
import Layout from './Layout';
import { useAppDispatch } from '../store/store';
import { check } from '../features/Auth/authSlice';
        import MainPage from '../features/MainPage/MainPage';
        import { initCategory } from '../features/CategoryList/categorySlice';
import CategoryPage from '../features/CategoryList/components/CategoryPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(check());
  }, []);
  useEffect(()=>{
dispatch(initCategory())
  },[])
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
