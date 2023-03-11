import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function HostLayout(props) {
  return (
    <div>
      <nav className='host-nav'>
        <Link to='/host'>Dashboard</Link>
        <Link to='/host/income'>Income</Link>
        <Link to='/host/reviews'>reviews</Link>
      </nav>
      <Outlet />

    </div>
  )
}

export default HostLayout
