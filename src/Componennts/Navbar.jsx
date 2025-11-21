import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RiUser3Fill } from "react-icons/ri";
import { CiShoppingCart } from "react-icons/ci";

const Navbar= () => {
  const[cartCount]= useState(3);
  return (
    <>
    <nav className ="w-full bg-white shadow-sm fixed top-0 left-0 z-50 flex justify-between items-center px-8 py-4 text-white">                                                                                           
        <div className="flex items-center gap-2 space-x-8">
            <h1 className="text-2xl font-bold italic text-green-500 text-left">Cartico</h1>
            <ul className="hidden md:flex  gap-6 font-medium text-gray-700">
                <a href=""className="hover:text-green-400">Home</a>
                <a href="" className="hover:text-green-400">Products</a>
                <a href="" className="hover:text-green-400">About</a>
                <a href=""className="hover:text-green-400">Sustainability</a>
                <a href=""className="hover:text-green-400">Contact</a>
                </ul>
                </div>

                <div className="flex items-center space-x-6 rounded full">
                  <div className="hidden sm:flex items-center border border-gray-300 hover:border-green-400 rounded-full px-4 py-2 bg-gray-50">
                    <CiSearch className="text-gray-500 text-lg mr-2 "></CiSearch>                       
                    <input type="text" placeholder="Search eco-friendly products..." className="bg-transparent focus:outline-none w-64 text-sm"></input>

                  </div>

                  <RiUser3Fill className="text-gray-700 text-xl cursor-pointer hover:text-green-500"></RiUser3Fill>

                  <div className="relative cursor-pointer">
                    <CiShoppingCart className="text-xl text-green-600"></CiShoppingCart>
                    {cartCount > 0 && (
                    
                    
                        <span className="absolute top-2 right-2 bg-green-500 text-xs px-1 rounded-full font-semibold w-5 h-5 flex items-center justify-center">
                        {cartCount}
                        </span>

                    
                    )}
                    </div>
                    </div>                                                                        
           
          

                </nav>
    </>
  );
};

export default Navbar;



