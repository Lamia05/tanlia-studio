import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer= () => {

     return (
        <footer className="bg-gray-900 text-white">
            <div className="bg-green-100 text-center py-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Join Our Eco Community</h2>
                <p className="text-gray-600 mb-6">Get exclusive eco-tips, sustainable product updates, and special
          offers delivered to your inbox</p>
                <div className="flex justify-center items-center gap-3 mb-6">
                    <input type="Email" placeholder="Enter your email address" className="px-4 py-2 rounded-lg border border-gray-300 w-72 focus:outline-none"></input>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg">Subscribe</button>

                </div>

                <div className="flex justify-center space-x-4 text-gray-700">
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                     <FaInstagram></FaInstagram>
                     <FaYoutube></FaYoutube>



                </div>
            </div>


            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6 py-12">
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">Cartico</h3>
                    <p className="text-sm text-gray-400">
                        Making sustainable shopping accessible to everyone. Join us in
            creating a greener future for our planet.

                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-3">Customer Service</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Contact Us</li>
                            <li>Shipping Info</li>
                            <li>Returns & Exchanges</li>
                            <li>Size Guide</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-3">Product Categories</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Organic Food</li>
                            <li>Eco Beauty</li>
                            <li>Sustainable Fashion</li>
                            <li>Green Home</li>
                            <li>Zero Waste</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>About</li>
                            <li>Sustainability</li>
                            <li>Press</li>
                            <li>Careers</li>
                            <li>Wholesale</li>
                        </ul>
                    </div>
                    </div>

                    <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
                        © 2024 EcoCart. All rights reserved. |{" "}
        <a href="#" className="hover:text-green-500">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:text-green-500">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};
                    
export default Footer;


  
