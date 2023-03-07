import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        {/* <Link to='/vans'>Vans</Link> */}
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/vans' element={<Vans />} /> */}
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}
function Home() {
  return (
    <div>
      <h1>You got the travel plans, we got the travel vans.</h1>
      <h2> Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h2>
      <button>Find your van</button>
    </div>
  )
}
function About() {
  return (
    <h1>About Van Life</h1>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);