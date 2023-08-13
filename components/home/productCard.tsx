import React from "react";

const ProductCard = () => {
  return (
    <div className="md:w-96 md:h-96 sm:w-72 sm:h-72 w-full h-auto rounded-xl group relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/homeImage_1.jpg')] transition-opacity duration-300 opacity-100 group-hover:opacity-80"></div>
      <div className="absolute inset-0  transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex justify-center items-center bg-white bg-opacity-30">
        <div className=" rounded-xl font-bold text-xl font-serif p-2 text-orange-800 cursor-pointer">
          Show details
        </div>
        <div className="bottom-4 left-4 absolute">
          <h1 className=" font-bold text-md font-serif  text-gray-700 ">
            Price: 3200 LKR
          </h1>
          <h1 className=" font-bold text-xs font-serif  text-gray-700 ">
            Sizes: S M L XL
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
