import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../features/Navbar/Navbar';

export default function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
