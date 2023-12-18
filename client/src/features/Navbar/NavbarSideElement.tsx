import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarSideElement(): JSX.Element {
  return (
    <>
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
          аксессуары
        </Link>
      </Typography>
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
          бренды
        </Link>
      </Typography>
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
        инструменты и детали
        </Link>
      </Typography>
      <Typography
        className="NavBarText"
        variant="h5"
        noWrap
        component="a"
        sx={{
          mr: 2,
          flexGrow: 1,
        }}
      >
        <Link className="NoTextDecoration" to="/repair">
        услуги сервиса
        </Link>
      </Typography>
    </>
  );
}

export default NavbarSideElement;
