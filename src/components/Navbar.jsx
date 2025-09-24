import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo */}
        <img src={assets.header_logo} alt="Logo" className="w-45 cursor-pointer" />

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7 text-white font-medium">
          <li><a href="#Header" className="hover:text-gray-400">Home</a></li>
          <li><a href="#About" className="hover:text-gray-400">About</a></li>
          <li><a href="#Projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#Testimonials" className="hover:text-gray-400">Testimonials</a></li>
        </ul>

        {/* Signup button */}
        <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
          Sign up
        </button>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="md:hidden w-7 cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-2/3 shadow-lg transform transition-transform duration-300 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-6 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium text-gray-800">
          <li><a onClick={() => setShowMobileMenu(false)} href="#Header">Home</a></li>
          <li><a onClick={() => setShowMobileMenu(false)} href="#About">About</a></li>
          <li><a onClick={() => setShowMobileMenu(false)} href="#Projects">Projects</a></li>
          <li><a onClick={() => setShowMobileMenu(false)} href="#Testimonials">Testimonials</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
