import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout(props) {
  return (
    <>
      <Header />
      <Outlet />
    
    </>
  )
}


export default Layout
