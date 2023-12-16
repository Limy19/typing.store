import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Auth/authSlice';
import categorySlice from '../features/CategoryList/categorySlice';
import speedTestSlice from '../features/speedTest/speedTestSlice';
import productSlice from '../features/ProductList/productSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    speedTest: speedTestSlice,
    product:productSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
