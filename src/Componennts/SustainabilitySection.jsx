import React from "react";
import { FaLeaf } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

const SustainabilitySection = () => {
  
  return (
    <section className="bg-green-600 text-white py-16 px-6 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-4xl mb-3 font-bold">Our Sustainability</h2>
      <p className="text-white/90 mb-12 max-w-2xl max-auto">
        Making a positive impact on our planet, one order at a time
      </p>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-white/20 p-6 rounded-full text-4xl">
            <FaTruck />
            </div>
            <h3 className="font-semibold text-xl">Carbon-Neutral Shipping</h3>
            <p className="text-sm text-white/90 max-w-xs">We offset 100% of our shipping emissions through varified carbon reduction projects. Every delivery helps fight climate change.</p>
            <p className="text-3xl font-bold mt-3">2.5M+</p>
            <p className="text-sm">tone of CO2 offset</p>
          </div>

          
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-white/20 p-6 rounded-full text-4xl">
            <FaRecycle />

            </div>
            <h3 className="font-semibold text-xl">Tree-Planting inatiative</h3>
            <p className="text-sm text-white/90 max-w-xs">All our packaging is made from recyled materials and 100% biodegradable. Zero plastic waste in every shipment For every order placed, we plant a tree in partnership with global reforestation organization. Growing forests, growing hope.</p>
            <p className="text-3xl font-bold mt-3">500k+</p>
            <p className="text-sm">plastic-free packages</p>
          </div>


          
          <div className="flex flex-col items-center space-y-3">
            <div className="bg-white/20 p-6 rounded-full text-4xl">
            <FaLeaf />
            </div>
            <h3 className="font-semibold text-xl">Carbon-Neutral Shippong</h3>
            <p className="text-sm text-white/90 max-w-xs">For every order placed, we plant a tree in partnership with global reforestation organization. Growing forests, growing hope.</p>
            <p className="text-3xl font-bold mt-3">1.2M+</p>
            <p className="text-sm">trees planted</p>
          </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
    