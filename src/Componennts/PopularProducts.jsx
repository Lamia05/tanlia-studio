import React, {useState} from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const products=[
  {id:1, img:"https://i.postimg.cc/NfW27GHm/The-Bamboo-Bottle.webp" , title: "Eco-Friendly Water Bottle", description: "Reusable water bottle made from sustainable materials.", price: "19.99", rating:4.7 , productCount: 200, category: "Top Sales"},
  {id:2, img: "https://i.postimg.cc/gJCryNxH/Air-Pods-Pro.jpg", title: "Wireless Earbuds", description: "High-quality earbuds with noise cancellation and long battery life.", price: "49.99", rating:4.6 , "category": "Top Sales", productCount:150},
  {id:3, img: "https://i.postimg.cc/V6DDd05b/DGZG-0G-n-jpg.webp", title: "Smart LED Lamp", description: "Adjustable color and brightness lamp controlled via mobile app.", price: "35.50", rating:4.8 , "category": "Top Sales", productCount: 90},
  {id:4, img: "https://i.postimg.cc/MHg0Q7w1/t-shirt.webp", title: "Organic Cotton T-Shirt", description: "Soft and breathable cotton t-shirt made from organic fibers.", price: "25.00", rating: 4.5, "category": "Top Sales", productCount: 180},
  {id:5, img: "https://i.postimg.cc/X7F1gJzt/VC-Serum-81.jpg", title: "Vitamin C Serum", description: "Brightening serum that reduces dark spots and improves skin texture.", price: "29.99", rating:4.6, "category": "Skin Care", productCount:120 },
  {id:6, img: "https://i.postimg.cc/RVQQFn8J/1600459402.avif", title: "Moisturizing Face Cream", description: "Hydrating cream for all skin types with natural ingredients.", price: "22.50", rating:4.4 , "category": "Skin Care", productCount:150 },
  {id:7, img: "https://i.postimg.cc/5yfykjm8/Hydrating-Gentle-Face-Cleanser.avif", title: "Gentle Face Cleanser", description: "Non-drying cleanser that removes dirt and makeup effectively.", price: "18.99", rating:4.5 , "category": "Skin Care", productCount:130},
  {id:8, img:"https://i.postimg.cc/BQX4ZxtK/08ec1174ec082c251e1475537c51a525.jpg", title: "Sunscreen SPF50", description: "Lightweight sunscreen with high protection against UV rays.", price: "24.99", rating:4.7, "category": "Skin Care", productCount:100},
  {id:9, img: "https://i.postimg.cc/brdcJhYd/Organic-Green-Tea-min.webp", title: "Organic Green Tea", description: "Refreshing green tea with natural antioxidants.", price: "14.99", rating: 4.6, "category": "Food & Drink", productCount: 200},
  {id:10, img: "https://i.postimg.cc/GmwV0YyN/chocolate-almond-butter-12-fi.jpg", title: "Almond Butter", description: "Smooth and creamy almond butter made from roasted almonds.", price: "12.50", rating: 4.5, "category": "Food & Drink",productCount:160 },
  {id:11, img:"https://i.postimg.cc/pTHKRWZJ/pure-organic-natural-bee-honey-712.jpg" , title: "Organic Honey", description: "Pure and natural honey sourced from organic farms.", price: "10.99", rating:4.8 , "category": "Food & Drink", productCount:180 },
  {id:12, img: "https://i.postimg.cc/BQTbfTz7/dark-chocolate-sea-salt-granola-671441.webp", title: "Granola Mix", description: "Healthy granola mix with oats, nuts, and dried fruits.", price: "8.99", rating: 4.4, "category": "Food & Drink", productCount:140},
  {id:13, img:"https://i.postimg.cc/Gh7N2N61/8.webp", title: "Stainless Steel Knife Set", description: "Durable knives with ergonomic handles for safe cutting.", price: "39.99", rating:4.7 ,  "category":"Kitchen Essentials", productCount:90 },
  {id:14, img: "https://i.postimg.cc/xdSPT3j1/bw12871eu7-f1-99535.jpg", title: "Non-Stick Frying Pan", description: "High-quality frying pan with even heat distribution.", price: "29.99", rating: 4.5, "category":"Kitchen Essentials", productCount: 120},
  {id:15, img: "https://i.postimg.cc/L8FPz4cL/download.jpg", title: "Silicone Baking Mat", description: "Reusable non-stick mat for baking and cooking.", price: "15.99", rating:4.6,  "category":"Kitchen Essentials", productCount:150 },
  {id:16, img: "https://i.postimg.cc/NMK8dJp3/6f.jpg", title: "Glass Storage Jars", description: "A set of airtight glass jars for storing dry ingredients.", price: "24.50", rating: 4.4, "category":"Kitchen Essentials", productCount: 130},
  {id:17, img: "https://i.postimg.cc/1R6w4NTp/bedsheets-2.jpg", title: "Cotton Bed Sheet Set", description: "Soft and breathable bed sheets for a comfortable sleep.", price: "49.99", rating:4.7 , "category":"Home & Living", productCount:80},
  {id:18, img:"https://i.postimg.cc/MGCX89zL/scentedcanx.webp", title:"Scented Candles Set", description: "Set of scented candles to create a cozy home atmosphere.", price: "19.99", rating:4.5, "category":"Home & Living", productCount:120 },
  {id:19, img: "https://i.postimg.cc/wTjqZChT/image-1024.jpg", title: "Wall Art Frame", description: "Decorative frame to enhance your living room walls.", price: "29.50", rating: 4.6,"category":"Home & Living", productCount:100 },
  {id:20, img: "https://i.postimg.cc/bvTfyYQJ/images-2.jpg", title: "Indoor Plant Pot", description: "Ceramic pot for indoor plants to add freshness to your home.", price: "14.99", rating: 4.8, "category":"Home & Living", productCount: 90,}

];

const categories= ["Top Sales", "Kitchen Essentials", "Home & Living", "Skin Care", "Food & Drink"]

export default function PopularProducts() {
    const[activeCategory, setActiveCategory]= useState ("Top Sales");

    const filteredProducts= products.filter(
        (product) => product.category ===activeCategory

    );

    return(
        <div className="bg-gray-50 py-10 px-6">
            <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h2>
            <p className="text-gray-500 mb-8"> Discover eco-friendly products organized by category</p>
            </div>

            
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
               <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-md font-semibold transition-all ${
              activeCategory === cat
                ? "bg-green-100 text-green-600 border-green-500"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-green-50"
            }`}
          >
        {cat}

                </button>
            ))}
             </div>


             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {filteredProducts.map((item) => (
                    <div key={item.id} className="relative bg-white border rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300 w-full max-w-xs text-left">
                        
                        <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs  font-bold px-2 py-1 rounded-z-10">
                            Best Seller
                            </div>


                            <div className="absolute top-2 right-2 hover:text-red-500 text-gray-400 cursor-pointer">

                                <AiOutlineHeart></AiOutlineHeart>
                                </div>

                                <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl">
                                </img>


                                <div className="p-4 text-let">
                                    <h3 className="text-sm text-gray-800 font-semibold mb-1">{item.title}</h3>

                                    <div className="flex items-center text-yellow-500 text-sm mb-2">
                                      <AiFillStar className="mr-1"></AiFillStar>

                                      <span className=" text-gray-500 text-xs ml-1">{item.productCount} reviews</span>
                                    </div>

                                    
                                    <p className="text-lg font-bold text-gray-800">${item.price}</p>
                                    </div>

                                    
                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition">Add to cart

                                        </button>


                                    </div>
                                
                ))}


                    </div>
                    </div>
                    

        
    );
    
};
