import React from 'react'
import logo from "../assets/PICTURES/logo.webp"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/"aria-label="Home" className="mx-2" width={50} height={33} alt="logo">
            <img src={logo} className="mx-2" width={100} height={100} />
            </a>
        </div>
    </div>
  )
}

export default Navbar
