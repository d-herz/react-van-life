import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AuthRequired() {

  const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must login first" }}
        replace
      />
    )
  }
  return <Outlet />
}

export default AuthRequired
