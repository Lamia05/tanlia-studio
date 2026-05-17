import React from "react";

const products = [
  {
    id: 1,
    image: "https://i.ibb.co.com/gZLwkBMd/images-6.jpg",
    title: "Bridal"
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/ZRGz57M8/IMG-20260514-WA0082.jpg",
    title: "Abayas"
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/SDKkPmSN/banner.jpg",
    title: "Anarkali"
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/fVBYS3hL/IMG-20260514-WA0068.jpg",
    title: "Saree"
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/yFqh7dy5/images-7.jpg",
    title: "Shoes"
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/qYBts2Yg/IMG-20260514-WA0050.jpg",
    title: "Art Canvas"
  },
];

const ProductSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#f8f5f2]">

    
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {products.map((item) => (
          <div
            key={item.id}
            className="relative h-[400px] rounded-2xl overflow-hidden group shadow-lg"
          >

            {/* Full image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* bottom-left text */}
            <div className="absolute bottom-4 left-4 flex flex-col items-start gap-1">

              {/* Name */}
              <h3 className="text-white text-xl font-bold">
                {item.title}
              </h3>

              {/* Button */}
              <button className="text-sm text-gray-50 px-4 py-2 font-medium">
                SHOP NOW <span>→</span>
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default ProductSection;