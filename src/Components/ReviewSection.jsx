import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    text: "Absolutely loved the quality and design. The outfit felt elegant, comfortable, and perfect for special occasions.",
    name: "Ayesha Rahman",
  },
  {
    id: 2,
    text: "Beautiful collection with premium finishing. Delivery was smooth and the dress looked exactly like the pictures.",
    name: "Nusrat Jahan",
  },
  {
    id: 3,
    text: "A perfect blend of tradition and modern style. I received so many compliments wearing their collection.",
    name: "Sadia Islam",
  },
];

const ReviewSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#f8f5f2] p-8 rounded-2xl shadow-sm text-center"
            >
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400 text-lg" />
                ))}
              </div>

              <p className="text-gray-600 leading-7 mb-6">
                {review.text}
              </p>

              <h3 className="text-lg font-semibold text-black">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;