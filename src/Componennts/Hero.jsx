import React from "react";
import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-[#f8f5f2] px-6 md:px-12 lg:px-20 flex items-center">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 items-center">
        
        {/* LEFT */}
        <div className="space-y-8">
          <p className="uppercase tracking-[6px] text-[#d48a4f] text-sm">
            Autumn Edit · 2026
          </p>

          <h1 className="text-5xl md:text-7xl font-serif leading-tight text-[#1a0d0a]">
            Quiet luxury, <br />
            <span className="text-[#d48a4f]">stitched</span> <br />
            <span className="text-[#d48a4f]">slow.</span>
          </h1>

          <p className="text-xl text-gray-700 max-w-md leading-relaxed">
            Hand-embroidered abayas, festive anarkalis and heirloom sarees
            designed for timeless elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-amber-950 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
              Shop Now
            </button>

            <button className="px-6 py-3 border-2 border-black text-black rounded-lg font-semibold hover:bg-black hover:text-white transition">
              OUR STORY
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-full flex items-center">
          <img
            src={banner}
            alt="main image"
            className="w-full h-[80vh] object-cover rounded-lg"
          />

          <div className="absolute bottom-6 right-6 bg-[#ede8e1] p-6 w-64 shadow-lg">
            <p className="uppercase text-xs tracking-[4px] text-gray-500 mb-2">
              Featured
            </p>
            <h3 className="text-2xl font-serif text-[#1a0d0a]">
              Ivory Anarkali Maxi
            </h3>
            <p className="text-xl text-[#d48a4f] mt-2">$218</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;