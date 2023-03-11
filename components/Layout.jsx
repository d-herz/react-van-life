import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
  return (
    <div className='site-wrapper'>
      <Header />
      <Outlet />
      <Footer />
    
    </div>
  )
}

export default Layout
