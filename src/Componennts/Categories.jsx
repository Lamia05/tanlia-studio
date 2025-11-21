
import React, {useEffect, useState} from "react";

const categories=[
  {id:1, img: "https://i.postimg.cc/VLSMNFsp/tote-bag.webp", title: "Eco-Friendly Tote Bag", description: "Reusable bag made from natural fibers, perfect for shopping.", price: "12.99", rating: 4.5, productCount: 140},
  {id:2, img: "https://i.postimg.cc/1zRDy18H/61v-WAbb-Zj-VL-SL1080.jpg", title: "Herbal Shampoo", description: "Gentle shampoo infused with natural herbs for healthy hair.", price: "15.50", rating:4.6 , productCount:130 },
  {id:3, img: "https://i.postimg.cc/28fbzNJB/amul-dark-chocolate-bar-40g-paikaree-L31z.webp", title: "Organic Dark Chocolate", description: "Rich and smooth dark chocolate made from organic cocoa.", price: "9.99", rating: 4.7, productCount:200 },
  {id:4, img: "https://i.postimg.cc/k5kMfxPM/9d5394ed04279d2a868e214dbb78636d.jpg", title: "Ceramic Coffee Mug", description: "Durable mug perfect for coffee or tea with stylish design.", price: "11.99", rating:4.5 , productCount:120 },
  {id:5, img: "https://i.postimg.cc/cCdSbh9S/KA2476-21018711.jpg", title: "Face Mask Set", description: "Set of nourishing face masks for smooth and glowing skin.", price: "18.50", rating: 4.6, productCount:100 },
  {id:6, img: "https://i.postimg.cc/ZYjtqrsp/5b832c0b-8622-45f5-918b-a997106835db-7ced5521424b7d49dbbdef8e81388d5a.webp", title: "Reusable Water Cup", description: "Eco-friendly cup made from bamboo fiber, ideal for travel.", price: "9.50", rating:4.4 , productCount: 160},
  {id:7, img: "https://i.postimg.cc/vHDjHCVY/81r0Da-MVw-HL-AC-UF894-1000-QL80.jpg", title: "Organic Coffee Beans", description: "Premium roasted coffee beans with a rich aroma and flavor.", price: "14.99", rating:4.8 , productCount: 180},
  {id:8, img: "https://i.postimg.cc/c4K9NYps/Bamboo-Cutting-And-Choping-Board-With-St-Non-Brand-995a3-321384.png", title: "Wooden Cutting Board", description: "Durable wooden cutting board for all your kitchen needs.", price: "22.50", rating:4.6 , productCount:110 },
  {id:9, img: "https://i.postimg.cc/7hwskWrc/2-scaled.jpg", title: "Aromatherapy Diffuser", description: "Essential oil diffuser to create a relaxing home environment.", price: "29.99", rating: 4.7, productCount:90 },
  {id:10, img: "https://i.postimg.cc/zBBwFY5N/images-1.jpg", title: "Organic Snack Pack", description: "Healthy snack pack with nuts, dried fruits, and seeds.", price: "12.0", rating: 4.5, productCount: 150},
];

  
const Categories=() =>{
  const[categoryData, setCategoryData]  = useState([]);
  const[showAll, setShowAll]= useState(false);
  const[loading, setLoading]= useState(false);

   useEffect(() => {
    fetch("/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
      
          setCategoryData(data);
        
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  


  const displayedCategories = showAll ? categoryData: categoryData.slice(0, 5);

  const handleShowMore=()=>{
    setLoading(true);
    setTimeout(()=>{
      setShowAll(true);
      setLoading(false);
    }, 1500);
  };


  const handleShowLes=()=> {
    setShowAll(false);
  };
    return(
        <section className="py-12 bg-white px-6 text-center">
            <h2 className="text-3xl font-bold mb-3">Shop By Category</h2>
            <p className="text-gray-600 mb-10">Explore our curated collection of sustainable products</p>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center">
            {displayedCategories.map((cat)=> (
              <div key={cat.id} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg   transition">
                <img
                 src={cat.image} 
                alt={cat.title}
                className="w-full h-44 object-cover"                                                                     
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold">{cat.title}</h3>
                  <p className="text-gray-500 text-sm">{cat.description}</p>
                </div>
              </div>
            ))}
 
  
         </div>
         {categoryData.length > 5 && (
         <button onClick={() => setShowAll(!showAll)} className="mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg">

          {showAll ? "Show Less" : "Show More"}
         </button>
         )}


        </section>
    );
};
export default Categories;

