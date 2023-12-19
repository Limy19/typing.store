import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { logout } from '../Auth/authSlice';

function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  const cart = useSelector((store: RootState) => store.cart.cartItems);

  const navigate = useNavigate();
  const onClick = (): void => {
    void dispatch(logout());
  };
  return (
    <div className="navbar">
      <div className="left">
        <span>
          <Link to="/" className="NoTextDecoration">
            PRODUCTS
          </Link>
        </span>
        <div className="dropdown">
          <button className="dropbtn" type="button">
            <span className="CARD">
              <Link className="NoTextDecoration" to="/about">
                ABOUT
              </Link>
            </span>
          </button>
          <div className="dropdown-content">
            <Link to="/konstructor"> CONSTRUCTOR </Link>
            <Link to ='/repair'> REPAIR</Link>
          </div>
        </div>
      </div>
      <div className="center">
        <span className="spanCenter">TYPETYPE.STORE...</span>
      </div>

      {user ? (
        <div className="right">
          <div className="dropdown">
            <button className="dropbtn" type="button">
              <span className="CARD">
                <Link className="NoTextDecoration" to="/lk">
                  ACCOUNT
                </Link>
              </span>
            </button>
            <div className="dropdown-content">
              <Link to="/speedTest"> TYPETEST </Link>
              <a href="#" onClick={onClick}>
                LOGOUT
              </a>
            </div>
          </div>

          <span>
            <button className="NODecorationButton" type="button">
              <Link className="NoTextDecoration" to="/cart">
                {cart.length === 0 ? `CARD (0)` : `CARD (${cart.length})`}
              </Link>
            </button>
          </span>
        </div>
      ) : (
        <div className="right">
          <span>
            <Link className="NoTextDecoration" to="/registration">
              REGISTRATION
            </Link>
          </span>
          <span>
            <Link className="NoTextDecoration" to="/login">
              LOGIN
            </Link>
          </span>
        </div>
      )}
    </div>
  );
}

export default Navbar;

// onClick={onClick}
