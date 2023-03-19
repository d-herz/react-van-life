import "./server"
import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Login, { action as loginAction } from "./pages/Login";
import Layout from './components/Layout';
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader} from './pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader} from './pages/Vans/VanDetail';

import HostLayout from "./components/HostLayout";
import HostDashboard from './pages/Host/HostDashboard';
import Income from './pages/Host/Income';
import Reviews from "./pages/Host/Reviews";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetails from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";

import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import AuthRequired from "./components/AuthRequired";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route 
      path="login"
      element={<Login />}
      action={loginAction}
    />
    <Route
      path='vans'
      element={<Vans />}
      errorElement={<Error />}
      loader={vansLoader}
    />
    <Route
      path='vans/:id'
      element={<VanDetail />}
      loader={vanDetailLoader}
    />

    <Route element={<AuthRequired />}>
      <Route path='host' element={<HostLayout />} >
        <Route index element={<HostDashboard />} />
        <Route path='income' element={<Income />} />
        <Route path='reviews' element={<Reviews />} />
        <Route
          path='vans'
          element={<HostVans />}
          loader={hostVansLoader}
        />

        <Route path='vans/:id' element={<HostVanDetails />} >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
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

