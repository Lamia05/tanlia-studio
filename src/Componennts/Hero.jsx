





import React from 'react'
import banner from "../assets/banner.png"

const   Hero =() => {

 return(
        <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-start px-8">

            <div>
            <img src={banner} alt="Eco Banner" className="absolute inset-0 object-cover w-full h-full" />
        </div>
            
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-2xl font-bold text-white mb-4 leading-tight">Shop Sustainably,<br></br> Live Responsibly</h1>  
        <p className="text-gray-700 mb-2">Discover thousands of eco-friendly products that make a positive impact on our planet.<br></br>Every purchase helps build a susaintable future for generations to come</p>

        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg">Start Shopping</button>

        

        </div>
        </section>
    );
};

export default Hero;





