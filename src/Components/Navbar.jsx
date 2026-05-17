
import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiUser3Fill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">

      {/* TOP BAR */}
      <div className="w-full bg-amber-950 text-white text-sm py-2 flex justify-center">
        <div className="text-white px-4 py-1">
          FREE DELIVERY ON ORDERS OVER 1000 TK
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
        <div className="text-3xl font-bold tracking-wide">
          Velnore
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