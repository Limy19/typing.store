import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarSideElement(): JSX.Element {
  return (
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
      <Link className="NoTextDecoration" to="/">
        ABOUT
      </Link>
    </Typography>
  );
}

export default NavbarSideElement;
