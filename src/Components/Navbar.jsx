import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* TOP BAR */}
      <div className="w-full bg-amber-950 text-white text-xs md:text-sm py-2 flex justify-center">
        <div className="px-4 text-center">
          FREE DELIVERY ON ORDERS OVER 1000 TK
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="text-2xl text-[#d48a4f] md:text-3xl font-bold tracking-wide">
          Velnore
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium relative">
          <a href="#">Home</a>
          <a href="#">About</a>

          {/* SHOP DROPDOWN */}
          <div className="relative group">
            <button className="cursor-pointer">Shop</button>
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-3 hidden group-hover:block min-w-[150px]">
              <a href="#" className="block py-1 hover:text-amber-700">
                Bags
              </a>
              <a href="#" className="block py-1 hover:text-amber-700">
                Dresses
              </a>
              <a href="#" className="block py-1 hover:text-amber-700">
                Shoes
              </a>
              <a href="#" className="block py-1 hover:text-amber-700">
                New In
              </a>
              <a href="#" className="block py-1 hover:text-amber-700">
                Accesories
              </a>
            </div>
          </div>

          <a href="#">Contact</a>
        </div>

        {/* DESKTOP ICONS */}
        <div className="hidden md:flex items-center gap-4 text-2xl text-gray-700">
        
          <IoSearch className="cursor-pointer"></IoSearch> 
          <FiHeart className="cursor-pointer"></FiHeart>
          <LiaShoppingBagSolid  className="cursor-pointer"></LiaShoppingBagSolid>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 font-medium text-gray-700">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About</a>

          {/* MOBILE SHOP DROPDOWN */}
          <div>
            <button
              onClick={() => setShopOpen(!shopOpen)}
              className="block w-full text-left"
            >
              Shop
            </button>

            {shopOpen && (
              <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                <a href="#" className="block">Bags</a>
                <a href="#" className="block">Dresses</a>
                <a href="#" className="block">Shoes</a>
              </div>
            )}
          </div>

          <a href="#" className="block">Contact</a>

          {/* MOBILE ICONS */}
          <div className="flex gap-4 text-2xl pt-2">
            <CiSearch />
            <RiUser3Fill />
            <CiShoppingCart />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;