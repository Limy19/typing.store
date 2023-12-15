import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Registration from '../features/Auth/components/RegistrationForm';
import Login from '../features/Auth/components/LoginForm';
import MainPage from '../features/MainPage/MainPage';
import CategoryList from '../features/CategoryList/components/CategoryList';
import { useAppDispatch } from '../store/store';
import { initCategory } from '../features/CategoryList/categorySlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch()
  useEffect(()=>{
dispatch(initCategory())
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        {/* <Route path='/' element={<CategoryList/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
