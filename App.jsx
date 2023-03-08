import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from './pages/Vans';

import "./server"

import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function App() {
  // State Array for incoming Vans data
  const [vans, setVans]  = React.useState([])

  // Fetch to "api" relative path because same domain
  React.useEffect(()=> {
    async function getVans() {
      const res = await fetch(`/api/vans`);

      const data = await res.json()

      setVans(data)
    }
    getVans()
    console.log(vans)
  }, [])

  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to="/">#VANLIFE</Link>
        <nav>
          <Link to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={
          <Vans
            vans={vans}
          />
        }/>
      </Routes>
    </BrowserRouter>
  )
}

