import React from "react";
import banner from "../assets/banner.jpg";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#f8f5f2] pt-28 md:pt-32 px-4 md:px-10 lg:px-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-10 items-center min-h-screen">

        {/* LEFT */}
        <div className="space-y-6 lg:space-y-8">
          <p className="uppercase tracking-[5px] text-[#d48a4f] text-xs md:text-sm">
            Autumn Edit · 2026
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-tight text-[#1a0d0a]">
            Quiet luxury, <br />
            <span className="text-[#d48a4f]">stitched</span> <br />
            <span className="text-[#d48a4f]">slow.</span>
          </h1>

          <p className="text-base md:text-lg text-gray-700 max-w-md leading-relaxed">
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
        <div className="relative flex justify-center lg:justify-end items-center">
          <img
            src={banner}
            alt="main image"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-[60vh] md:h-[75vh] object-cover rounded-xl"
          />

          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-[#ede8e1] p-4 md:p-5 w-48 md:w-56 shadow-lg rounded-lg">
            <p className="uppercase text-[10px] md:text-xs tracking-[3px] text-gray-500 mb-2">
              Featured
            </p>
            <h3 className="text-lg md:text-xl font-serif text-[#1a0d0a]">
              Ivory Anarkali Maxi
            </h3>
            <p className="text-lg md:text-xl text-[#d48a4f] mt-2">$218</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;