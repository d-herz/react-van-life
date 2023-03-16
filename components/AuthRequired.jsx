import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function AuthRequired(props) {
  const auth = { token: null };

  if (!auth.token) {
    return (
      <Navigate
        to="/login"
        state={{ message: "You must login first" }}
      />
    )
  }

  return <Outlet />
    
}

export default AuthRequired
