import React from 'react';
import './App.css'
import {BrowserRouter, Routes , Route, Link} from "react-router-dom"

//Pages
import Home from './components/Home'
import Vans from './components/Vans'
import About from './components/About'
import VanDetail from './components/VanDetail'
import Layout from './pages/Layout'
import Dashboard from './components/Dashboard'
import Income from './components/Income'
import Reviews from './components/Reviews'
import DashboardLayout from './pages/DashboardLayout';

//fake API
import "./server"  



function App() { 

  return (
    <main className='m-0 p-0 flex flex-col h-screen'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="/host" element={<DashboardLayout />}>
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter> 
      <footer className='h-10 p-10 bg-ftColor w-full text-white flex justify-center items-center flex-shrink-0'>2022 #VANLIFE</footer>
    </main>
  )
}

export default App
