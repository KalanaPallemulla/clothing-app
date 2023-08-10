"use client";
import { ImageGridProps } from "@/types/homeTypes";
import React from "react";
import HomeImage_1 from "@/public/homeImage_1.jpg";
import Image from "next/image";

const images = [
  HomeImage_1,
  HomeImage_1,
  HomeImage_1,
  HomeImage_1,
  HomeImage_1,
];

const imageGap = (index: any) => {
  if (index === 0) {
    return "mt-0";
  } else if (index % 2 === 1) {
    return "mt-10";
  } else {
    return "mt-0";
  }
};

const imageGrid: React.FC<ImageGridProps> = () => {
  return (
    <div className="flex flex-row gap-2 md:gap-10 mt-16">
      {images.map((image, index) => (
        <div
          key={index}
          className={`md:w-40 md:h-40 w-16 h-16 ${imageGap(index)}`}
        >
          <Image src={image} alt="Loading..." className="rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default imageGrid;
