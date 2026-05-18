import React from "react";
import products from "../Components/data/products";

const Collection = () => {
  return (
  <section className="w-full px-6 py-10 bg-[#f8f5f2]">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-4 space-y-2">
              <p className="text-sm text-gray-500">{item.category}</p>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-pink-600 font-bold">৳ {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Collection;