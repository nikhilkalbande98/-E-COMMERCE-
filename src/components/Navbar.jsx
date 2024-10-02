import React from 'react'
import logo from "../assets/PICTURES/logo.webp"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    
    
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <div class="relative">
  <button id="hamburger" class="flex items-center px-3 py-2 border rounded text-white border-black-400 hover:text-white hover:bg-gray-600">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  </button>
  </div>

          
            <a href="/"aria-label="Home" className="mx-2" width={50} height={33} alt="logo">
            <img src={logo} className="mx-2" width={80} height={80} />
            </a>
        </div>
        <div class="search-bar">
            <div class="flex rounded-full border-2 border-black-100 overflow-hidden max-w-md mx-auto font-[sans-serif] search-bar" style={{ width: '600px' }}>
    <input type="text" placeholder="Search For Products and More..."
        class="w-full outline-none bg-white text-sm px-5 py-3" />
    <button type='button' class="flex items-center justify-center bg-black-500 hover:bg-white-600 px-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="18px" class="fill-white">
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
    </button>
</div>
</div>
<div class="search-icon">
<div class="flex justify-center items-center search-icon" style={{ display: 'none' }}>
    <button type='button' class="bg-black-500 hover:bg-white-600 p-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="18px" class="fill-white">
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
    </button>
</div>
</div>
        <div className="m-8 flex items-center justify-center gap-4 text-x">
              <Link to="/"><span class="font-mono font-bold tracking-[1px] hover:text-white">Home </span></Link>
              <Link to="/Login"><span class="font-mono font-bold tracking-[1px] hover:text-white"> LogIn</span><FontAwesomeIcon icon={faSignInAlt} size="x"/></Link>
              <Link to="/"></Link>
              <Link to="/Cart"><span class="font-mono font-bold tracking-[1px] hover:text-white"><FontAwesomeIcon icon={faCartShopping} size="x" /></span></Link>
        </div>
    </nav>
  )
}

export default Navbar
