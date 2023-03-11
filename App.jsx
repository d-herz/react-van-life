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
import HostLayout from "./components/HostLayout";
import Income from './pages/Host/Income';
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import Reviews from "./pages/Host/Reviews";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id' element={<VanDetail />} />
          
          <Route path='host' element={<HostLayout />} >
            <Route index element={<HostDashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetails />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

