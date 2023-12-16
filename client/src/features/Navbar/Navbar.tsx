import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store/store';
import { logout } from '../Auth/authSlice';

function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);

  const onClick = (): void => {
    void dispatch(logout());
  };
  return (
    <div>
      <Link className="underline" to="/">
        Клавиатура
      </Link>
      {user ? (
        <>
          <div className="underline decoration-wavy">привет, {user.name}!</div>
          <button type="button" onClick={onClick}>
            Выйти
          </button>
        </>
      ) : (
        <>
          <Link to="/registration">Регистрация</Link>
          <Link to="/login">Войти</Link>
        </>
      )}
      <Link to="/cart">Корзина</Link>
    </div>
  );
}

export default Navbar;
