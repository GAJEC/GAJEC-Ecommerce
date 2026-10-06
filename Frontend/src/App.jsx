import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail.jsx'

import Login from './components/Login/Login.jsx'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App