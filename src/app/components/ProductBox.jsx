"use client";
import { useState } from "react";
import Image from "./Image";
import ImageBox from "./ImageBox";

const ProductBox = () => {
  const [selectedImage, setSelectedImage] = useState("navy");
  return (
    <div className="grid grid-cols-[1fr_auto] justify-center">
      <Image width={500} height={500} img={`/${selectedImage}.png`} />
      <ImageBox setSelectedImage={setSelectedImage} />
      <div className="col-2 row-1 grid justify-evenly gap-20 self-center">
        <div
          onClick={() => setSelectedImage("navy")}
          className={`h-4 w-4 rounded-full ${selectedImage === `navy` ? `bg-navy outline-3 outline-white outline-solid` : `bg-navy`}`}
        ></div>
        <div
          onClick={() => setSelectedImage("ocean")}
          className={`h-4 w-4 rounded-full ${selectedImage === `ocean` ? `bg-ocean outline-3 outline-white outline-solid` : `bg-ocean`}`}
        ></div>
        <div
          onClick={() => setSelectedImage("mint")}
          className={`h-4 w-4 rounded-full ${selectedImage === `mint` ? `bg-mint outline-3 outline-white outline-solid` : `bg-mint`}`}
        ></div>
      </div>
    </div>
  );
};

export default ProductBox;
