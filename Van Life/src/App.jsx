import React from 'react';
import './App.css'
import {BrowserRouter, Routes , Route, Link} from "react-router-dom"
import Home from './components/Home'
import Vans from './components/Vans'
import About from './components/About'

function App() {
 

  return (
    <main className='m-0 p-0 flex flex-col h-screen'>
    <BrowserRouter>
    <nav className='py-10  w-full flex flex-shrink-0 justify-between p-4'>
    <div className='sm:text-3xl text-2xl font-bold'>
    #VANLIFE
    </div>
    <div className='flex mr-4 gap-10 items-center text-xl'>
    <Link to="/about">About </Link>
    <Link to="/vans">Vans </Link>
    </div>
    </nav>

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
     </Routes>
   
    </BrowserRouter> 
    <footer className='h-10 p-10 bg-ftColor w-full text-white flex justify-center items-center flex-shrink-0'>2022 #VANLIFE</footer>
    </main>
  )
}

export default App
