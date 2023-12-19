import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from '../features/Auth/authSlice';
import categorySlice from '../features/CategoryList/categorySlice';
import speedTestSlice from '../features/speedTest/speedTestSlice';

import cartSlice from '../features/CartPage/cartSlice';

import productSlice from '../features/ProductList/productSlice';
import cardSlice from '../features/lk/cardSlice';
import repairSlice from '../features/Repair/repairSlice';

import konsructorSlice from '../features/Konstructor/konsructorSlice';

import favoritesSlice from '../features/ProductList/favoritesSlice';


const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    speedTest: speedTestSlice,
    cart: cartSlice,
    card: cardSlice,
    product: productSlice,
    repaire: repairSlice,
    konsructor: konsructorSlice,
    favorites: favoritesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
