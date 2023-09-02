import React from 'react';
import './App.css'
import {BrowserRouter, Routes , Route, Link} from "react-router-dom"

//Components
import Home from './components/Home'
import Vans from './components/Vans'
import About from './components/About'
import VanDetail from './components/VanDetail'
import Dashboard from './components/Dashboard'
import Income from './components/Income'
import Reviews from './components/Reviews'
import HostVans from './pages/HostVans'
import HostVanDetail from './pages/HostVanDetail'

//Pages
import Layout from './pages/Layout'
import DashboardLayout from './pages/DashboardLayout'

//fake API with miragejs
import "./server"  



function App() { 

  return (
    <main className='m-0 p-0 flex flex-col h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            
            <Route path="host" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter> 
      <footer className='h-10 p-10 bg-ftColor w-full text-white flex justify-center items-center flex-shrink-0'>2022 #VANLIFE</footer>
    </main>
  )
}

export default App
