import React from 'react'
import Navbar from './Navbar'
import headerImg from '../assets/bg_img.jpg'

const Header = () => {
  return (
    <header
      id="Header"
      className="relative min-h-screen w-full bg-cover bg-center bg-black/40 bg-blend-multiply overflow-hidden"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="container mx-auto mt-4 px-6 md:px-20 lg:px-32 flex flex-col justify-center items-center text-center text-white min-h-screen">
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
          Find the space that feels like
          home
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-200 max-w-2xl">
          PureSpace Realty connects you with dream homes and smart investments —
          built on trust, guided by passion.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded hover:bg-white hover:text-gray-900 transition"
          >
            View Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
