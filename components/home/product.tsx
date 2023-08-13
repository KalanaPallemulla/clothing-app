import React from "react";
import { ProductCard } from "..";
const product = () => {
  return (
    <div className="flex justify-center items-center w-screen flex-col mt-10">
      <div>
        <h1 className="font-semibold text-3xl font-serif text-orange-600">
          Products
        </h1>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-32 gap-8 px-10 mt-10 mb-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default product;
