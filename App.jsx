import "./server"
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import HostDashboard from './pages/Host/HostDashboard';
import Income from './pages/Host/Income';
import Reviews from "./pages/Host/Reviews";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/host' element={<HostDashboard />} />
          <Route path='/host/income' element={<Income />} />
          <Route path='/host/reviews' element={<Reviews />} />
          <Route path='/about' element={<About />} />
          <Route path='/vans' element={<Vans />}/>
          <Route path='/vans/:id' element={<VanDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

