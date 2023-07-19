import React from 'react'
import './index.css'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import Layout from "../components/shared/Layout.jsx"
import Dashboard from "../components/Dashboard.jsx"
import Products from '../components/Products'


function App() {

  return (
  <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />}/>
              <Route path="product" element={<Products />}/>
          </Route>
      </Routes>
  </Router>
  )
}

export default App
