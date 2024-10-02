import React from 'react'
import Navbar from './components/Navbar'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import {Routes, Route} from 'react-router-dom'
import './components/searchbar.css'
import Carousel from './components/Carousel'
const App = () => {
  return (

    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#7984b0_100%)]">
      </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
        <Carousel/>
      </div>
    </div>
    
  )
}

export default App
