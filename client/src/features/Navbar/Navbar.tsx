import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket, KeyboardAltRounded } from '@mui/icons-material';
import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { logout } from '../Auth/authSlice';
import NavbarSideElement from './NavbarSideElement';

function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);

  const onClick = (): void => {
    void dispatch(logout());
  };
  return (
    <AppBar>
      <Toolbar>
        <IconButton sx={{ mr: 2 }}>
          <Link className="NoTextDecoration" to="/">
            <KeyboardAltRounded sx={{ color: 'white' }} />
          </Link>
        </IconButton>
        <Typography
          className="NavBarText"
          variant="h5"
          noWrap
          component="a"
          sx={{
            mr: 2,
          }}
        >
          <Link className="NoTextDecoration" to="/">
            клавиатуры
          </Link>
        </Typography>
        <NavbarSideElement />
        {user ? (
          <>
            <div className="underline decoration-wavy">привет, {user.name}!</div>
            <button type="button" onClick={onClick}>
              выйти
            </button>
          </>
        ) : (
          <>
            <Typography
              variant="h5"
              noWrap
              component="a"
              className="NavBarText"
              sx={{
                mr: 2,
              }}
            >
              <Link className="NoTextDecoration" to="/registration">
                регистрация
              </Link>
            </Typography>
            <Typography
              variant="h5"
              noWrap
              component="a"
              className="NavBarText"
              sx={{
                mr: 2,
                
              }}
            >
              <Link className="NoTextDecoration" to="/login">
                войти
              </Link>
            </Typography>
          </>
        )}

        <IconButton>
          <Link className="NoTextDecoration" to="/cart">
            <ShoppingBasket sx={{ color: 'white' }} />
          </Link>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
