import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FAF8F5] text-gray-700 px-10 py-12">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-300">

        {/* BRAND SECTION */}
        <div>
          {/* Name */}
          <h1 className="text-3xl font-bold tracking-wide">
            VELNORE
          </h1>

          {/* Logo under name */}
          <img
            src="/logo.png"
            alt="logo"
            className="w-28 h-28 mt-3 rounded-full object-cover"
          />

          {/* Text under logo */}
          <p className="mt-3 text-sm text-gray-500">
            Modern fashion for everyday elegance.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h3 className="font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>All Products</li>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
            <li>New Arrivals</li>
            <li>Sale</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h3 className="font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Lookbook</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* PARTNERS */}
<div className="mt-10 md:col-span-4">
  <h3 className="text-center font-semibold mb-4">Our Partners</h3>

  <div className="flex justify-center items-center gap-8 flex-wrap">
    <img src="/Partner1.png" alt="Partner 1" className="w-20 h-20 object-contain" />
    <img src="/Partner2.jpg" alt="Partner 2" className="w-20 h-20 object-contain" />
  </div>
</div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © 2026 Velnore. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;