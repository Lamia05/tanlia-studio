import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>
)


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FAF8F5] text-[#333333] px-10 py-12 w-full h-full min-h-screen">
      
      {/* Main Footer Grid */}
      <div className="grid grid-cols-2 gap-10 border-b border-gray-700 pb-10">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl font-bold">TANLIA</h2>

          {/* Logo */}
          <div className="mt-3">
            <img
              src="/logo.png"
              alt="logo"
              className="w-16 h-16 rounded-full"
            />
          </div>

          {/* Shop Info */}
          <p className="mt-3 text-gray-400">Shop Name: Tanlia Boutique</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6">

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-2">Shop</h3>
            <ul className="text-gray-400 space-y-1">
              <li>New Arrival</li>
              <li>Trending</li>
              <li>Sale</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2">Atelier</h3>
            <p className="text-gray-400 text-sm">
              Premium handcrafted fashion design.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Contact</li>
              <li>FAQ</li>
              <li>Shipping</li>
            </ul>
          </div>

        </div>
      </div>

      {/* PARTNERSHIP SECTION */}
      <div className="mt-10">
        <h3 className="text-center font-semibold mb-4">Our Partners</h3>

        <div className="flex justify-center gap-6 flex-wrap">
          <img src="/Partner1.jpg" alt="p1"  className="w-16 h-16 object-contain"></img>/
          <img src="/Partner2.jpg" alt="p2" className="w-16 h-16 object-contain"></img>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 Tanlia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;




import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiUser3Fill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">

      {/* TOP BAR */}
      <div className="w-full bg-black text-white text-sm py-2 flex justify-center">
        <div className="bg-gray-800 px-4 py-1 rounded-md">
          Free Delivery on Orders Over 1000 TK
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full bg-white shadow-md flex items-center justify-between px-6 py-3">

        {/* LEFT MENU */}
        <div className="flex items-center gap-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a>
        </div>

        {/* BRAND NAME */}
        <div className="text-xl font-bold tracking-wide">
          MyBrand
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-4 text-2xl text-gray-700">
          <CiSearch className="cursor-pointer" />
          <RiUser3Fill className="cursor-pointer" />
          <CiShoppingCart className="cursor-pointer" />
        </div>

      </div>
    </div>
  );
};

export default Navbar;


import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FAF8F5] text-[#333333] px-10 py-12 w-full min-h-screen">
      
      {/* Main Footer Grid */}
      <div className="flex items-center justify-between gap-6 border-b border-gray-300 pb-10">

        {/* LEFT SIDE */}
        <div>

          {/* Brand Top Row */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-4xl font-bold tracking-wide">VELNORE</h1>

            {/* Nav Links */}
           
          </div>

          {/* Logo */}
          <div className="mt-5">
            <img
              src="/logo.png"
              alt="logo"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6">

          {/* Column 1 */}
          <div>
            <h3 className="font-semibold mb-2">Shop</h3>
            <ul className="text-gray-500 space-y-1">
              <li>New Arrival</li>
              <li>Trending</li>
              <li>Sale</li>
            </ul>

            <h3 className="font-semibold mb-2">Atelier</h3>
            <p className="text-gray-500 text-sm">
              Premium handcrafted fashion design.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-2">Help</h3>
            <ul className="text-gray-500 space-y-1">
              <li>Contact</li>
              <li>FAQ</li>
              <li>Shipping</li>
            </ul>
          </div>

        </div>
      </div>

      {/* PARTNERSHIP SECTION */}
      <div className="mt-10">
        <h3 className="text-center font-semibold mb-4">Our Partners</h3>

        <div className="flex justify-center gap-6 flex-wrap">
          <img src="/Partner1.jpg" alt="p1" className="w-16 h-16 object-contain" />
          <img src="/Partner2.jpg" alt="p2" className="w-16 h-16 object-contain" />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © 2026 Tanlia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;