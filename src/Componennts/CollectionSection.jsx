import React from "react";
import { FaHeart, FaArrowRight } from "react-icons/fa";

const products = [
  {
    "id": 1,
    "image": "https://i.ibb.co.com/zWvSqgWX/IMG-20260514-WA0080.jpg",
    "badge": "BESTSELLER",
    "overlayText": "",
    "category": "Festive",
    "name": "Scarlet Zari Lehenga",
    "price": "৳3500",
  },
  {
    "id": 2,
    "image": "https://i.ibb.co.com/8DkzRJtr/IMG-20260514-WA0061.jpg",
    "badge": "",
    "category": "Art Canvas",
    "name": "HandPrinted Artisan",
    "price": "৳2800",
  },
  {
    "id": 3,
    "image": "https://i.ibb.co.com/zWKWbyGW/IMG-20260514-WA0083.jpg",
    "badge": "NEW",
    "overlayText": "",
    "category": "Burqa",
    "name": "Pearl Embroidered Abaya",
    "price": "৳2200",
  },
  {
    "id": 4,
    "image":"https://i.ibb.co.com/3mxvfKkn/IMG-20260514-WA0033.jpg",
    "category": "Dress",
    "name": "Printed Crimson Salwar kameez",
    "price": "৳3500"
  },
  {
    "id": 5,
    "image": "https://i.ibb.co.com/xK7Btwpc/IMG-20260514-WA0069.jpg",
    "badge": "Editor's Pick",
    "category": "Saree",
    "name": "Midnight Maroon Saree",
    "price": "৳2800"
  },
  {
    "id": 6,
    "image":"https://i.ibb.co.com/KjJYWZ9n/IMG-20260514-WA0085.jpg",
    "category": "Abaya",
    "name": "Azure Bell-Sleeve Abaya",
    "price": "৳2200"
  },
  {

    "id": 7,
    "image": "https://i.ibb.co.com/8L2C7XnB/IMG-20260514-WA0084.jpg",
    "badge": "Out Of Stock",
    "overlayText": "",
    "category": "Abaya",
    "name": "Emerald Velvet Abaya",
    "price": "৳3500"
  },
  {
    "id": 8,
    "image": "https://i.ibb.co.com/JFQtwMDJ/IMG-20260514-WA0077.jpg",
    "category": "Dress",
    "name": "Lilac Chikankari Suit",
    "price": "৳2800"
  },
  {
    "id": 9,
    "image": "https://i.ibb.co.com/ZRGz57M8/IMG-20260514-WA0082.jpg",
    "badge": "Exclusive",
    "category": "Burqa",
    "name": "Onyx Gold-Trim Abaya",
    "price": "৳2200"
  },
  
  {
    "id": 10,
    "image": "https://i.ibb.co.com/21XRwhjY/IMG-20260514-WA0044.jpg",
    "category": "Saree",
    "name": "Olive Meadow Handpainted Saree",
    "price": "৳3500"
  },
  {
    "id": 11,
    "image": "https://i.ibb.co.com/0pbjYyFt/IMG-20260514-WA0045.jpg",
    "category": "Dress",
    "name": "HandPrinted Ocean Vine suit",
    "price": "৳2800"
  },
  {
    "id": 12,
    "image": "https://i.ibb.co.com/vxBwJQmc/IMG-20260514-WA0055.jpg",
    "category": "Art",
    "name": "Cascade Art Canvas",
    "price": "৳2200"
  },
  {
  
  
    "id": 13,
    "image": "https://i.ibb.co.com/39fdvdmg/IMG-20260514-WA0066.jpg",
    "badge": "Limited",
    "category": "Saree",
    "name": "Crimson Banarasi Saree",
    "price": "৳3500"
  },
  {
    "id": 14,
    "image": "https://i.ibb.co.com/vxmHtLPK/IMG-20260514-WA0062.jpg",
    "category": "Art",
    "name": "Handmade Sketch",
    "price": "৳2800"
  },
  {
    "id": 15,
    "image": "https://i.ibb.co.com/qYNKT2KJ/IMG-20260514-WA0041.jpg",
    "category": "Hizab",
    "name": " Dubai Cherry Hizab Combo",
    "price": "৳1000"
  },
  {
    "id": 16,
    "image": "https://i.ibb.co.com/vvmxT43P/IMG-20260517-WA0030.jpg",
    "category": "Shooes",
    "name": "Golden Pearl Heel",
    "price": "৳2800"
  },
  {
    "id": 17,
    "image": "https://i.ibb.co.com/fzxd1cPH/il-340x270-5797658193-57uz.jpg",
    "category": "Bag",
    "name": " Printed Tote Bag",
    "price": "৳1000"
  },
  





]


const CollectionSection = () => {
  return (
    <section className="px-8 md:px-16 py-20 bg-white">
      {/* heading */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-sm uppercase tracking-[3px] text-gray-500">
            New Collection
          </p>
          <h2 className="text-4xl font-semibold mt-2">
            Discover Our Signature Styles
          </h2>
        </div>

        <button className="flex items-center gap-2 text-black border-b border-black pb-1 font-medium">
          View All <FaArrowRight size={12} />
        </button>
      </div>

      {/* product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group">
            {/* image box */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* top left overlay text */}
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium">
                {product.badge}
              </div>

              {/* top text */}
              <div className="absolute top-14 left-4 text-white font-semibold text-lg">
                {product.overlayText}
              </div>

              {/* heart icon */}
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <FaHeart size={14} />
              </button>

              {/* hover add to bag */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-black text-white px-6 py-3 rounded-xl font-medium">
                  Add To Bag
                </button>
              </div>
            </div>

            {/* নিচের text */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">{product.category}</p>

                <h3 className="font-bold text-amber-950 mt-1">{product.name}</h3>
                <span className="font-medium block mt-2">{product.price}</span>
              </div>
            </div>
          
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;