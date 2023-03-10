import React from 'react';


function Header(props) {
  return (
    <header>
      <Link className='site-logo' to="/">#VANLIFE</Link>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </nav>
    </header>
  )
}

export default Header
