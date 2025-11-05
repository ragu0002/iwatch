"use client";
import { useState } from "react";
import Image from "./Image";
import ImageBox from "./ImageBox";

const ProductBox = () => {
  const [selectedImage, setSelectedImage] = useState("navy");
  return (
    <div className="grid grid-cols-[1fr_auto] justify-center gap-20">
      <Image width={500} height={500} img={`/${selectedImage}.png`} />
      <ImageBox setSelectedImage={setSelectedImage} />
      <div className="col-2 row-1 grid content-center justify-items-center gap-0.5">
        <div
          onClick={() => setSelectedImage("navy")}
          className={`m-0.5 h-4 w-4 rounded-full ${selectedImage === `navy` ? `bg-navy h-5 w-5 shadow-xl/30 outline-3 outline-white outline-solid` : `bg-navy outline-1 outline-white outline-solid`}`}
        ></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>

        <div
          onClick={() => setSelectedImage("ocean")}
          className={`m-0.5 h-4 w-4 rounded-full ${selectedImage === `ocean` ? `bg-ocean h-5 w-5 shadow-xl/30 outline-3 outline-white outline-solid` : `bg-ocean outline-1 outline-white outline-solid`}`}
        ></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
        <div className="h-0.5 w-0.5 rounded-full bg-white"></div>
        <div
          onClick={() => setSelectedImage("mint")}
          className={`m-0.5 h-4 w-4 rounded-full ${selectedImage === `mint` ? `bg-mint h-5 w-5 shadow-xl/30 outline-3 outline-white outline-solid` : `bg-mint outline-1 outline-white outline-solid`}`}
        ></div>
      </div>
    </div>
  );
};

export default ProductBox;
