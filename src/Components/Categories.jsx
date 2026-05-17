import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setCategoryData(data))
      .catch((err) => console.log(err));
  }, []);

  const displayedCategories = showAll
    ? categoryData
    : categoryData.slice(0, 5);

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowAll(true);
      setLoading(false);
    }, 1500);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <section className="py-12 bg-white px-6 text-center">
     

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {displayedCategories.map((cat) => (
          <div
            key={cat.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={cat.img}
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

      {categoryData.length > 5 && !loading && (
        <button
          onClick={showAll ? handleShowLess : handleShowMore}
          className="mt-10 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

export default Categories;