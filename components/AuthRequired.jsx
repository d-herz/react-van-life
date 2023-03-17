import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function AuthRequired() {

  const isLoggedIn = localStorage.getItem("loggedin");
  let location = useLocation()

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
          message: "You must login first"
        }}
        replace
      />
    )
  }
  return <Outlet />
}

export default AuthRequired
