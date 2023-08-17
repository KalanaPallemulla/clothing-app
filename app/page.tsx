"use client";

import { ImageGrid, Product, TopItems } from "@/components";
import React, { useEffect, useRef, useState } from "react";
import { BsFacebook, BsInstagram, BsCartDash } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Home() {
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      scrollToRef();
    }, 3000);
    const handleScroll = () => {
      if (secondRef.current) {
        const scrollPosition = window.scrollY;
        const secondRefPosition = secondRef.current.offsetTop;

        // Adjust the threshold value as needed
        const threshold = 100; // You can adjust this value

        setIsShow(scrollPosition >= secondRefPosition - threshold);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToRef = () => {
    if (secondRef.current) {
      secondRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    if (firstRef.current) {
      firstRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div
        ref={firstRef}
        className="h-screen w-screen bg-black flex flex-col justify-center items-center text-white"
      >
        <div className="flex flex-row space-x-4 items-center">
          <TopItems name="Facebook" icon={BsFacebook} />
          <div className="h-1 w-1 rounded-full bg-red-600" />
          <TopItems name="Instagram" icon={BsInstagram} />
        </div>
        <div className="py-4">
          <h1 className="md:text-6xl text-5xl font-bold text-orange-700 ">
            Verve Vista
          </h1>
        </div>
        <div className="text-center text-sm font-light px-4 md:px-0 opacity-60">
          Discover your dream clothing{" "}
          <span className="text-orange-300 ">Designs - Brands</span> with us. We
          are here to full fill your dreams!
        </div>
        <div>
          <ImageGrid />
        </div>
      </div>
      <div ref={secondRef} className="h-auto w-screen px-10">
        <Product />
      </div>
      <div className="circle w-10 h-10 border-2 border-orange-700 rounded-full fixed top-4 right-4 flex justify-center items-center">
        <BsCartDash className="text-orange-700 font-bold" size={20} />
      </div>
      {isShow && (
        <div
          onClick={scrollToTop}
          className="circle w-10 h-10  fixed bottom-16 right-4"
        >
          <AiOutlineArrowUp
            className="text-black font-bold cursor-pointer"
            size={20}
          />
        </div>
      )}
    </>
  );
}
