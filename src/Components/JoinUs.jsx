import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const JoinUs = () => {
  return (
    <section className="w-full py-16 bg-amber-950 text-center">

      <h2 className="text-5xl font-semibold mb-6 text-white">Join the atelier list</h2>
      <p className="text-gray-50 mb-8">
        Early access to drops, behind-the-loom stories, and 10% off your first order.<br></br>
        Follow us On:

      </p>

      <div className="flex justify-center gap-8 text-3xl text-gray-50">
        <FaFacebook className="hover:text-black cursor-pointer transition" ></FaFacebook>
        <FaInstagram className="hover:text-black cursor-pointer transition" ></FaInstagram>
      </div>

    </section>
  );
};

export default JoinUs;