import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import type { RootState } from '../../store/store';
import { useAppDispatch } from '../../store/store';
import { logout } from '../Auth/authSlice';




function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useSelector((store: RootState) => store.auth.user);
  
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
        <span>ABOUT</span>
      </div>
      <div className="center">
        <span>TYPETYPE.STORE...</span>
      </div>

      {user ? (
        <div className="right">
          <span className='CARD'>ACCOUNT</span>
          {/* <Link to={'/logout'}> </Link> */}
          <span>
            <button className="NODecorationButton" type="button" onClick={onClick}>
              CARD (0)
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
