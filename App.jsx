import "./server"
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader} from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import HostDashboard from './pages/Host/HostDashboard';
import HostLayout from "./components/HostLayout";
import Income from './pages/Host/Income';
import HostVans from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import Reviews from "./pages/Host/Reviews";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='vans' element={<Vans />} loader={vansLoader}/>
    <Route path='vans/:id' element={<VanDetail />} />

    <Route path='host' element={<HostLayout />} >
      <Route index element={<HostDashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='reviews' element={<Reviews />} />
      <Route path='vans' element={<HostVans />} />

      <Route path='vans/:id' element={<HostVanDetails />} >
        <Route index element={<HostVanInfo />} />
        <Route path="pricing" element={<HostVanPricing />} />
        <Route path="photos" element={<HostVanPhotos />} />
      </Route>
    </Route>

    <Route path="*" element={<NotFound />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

