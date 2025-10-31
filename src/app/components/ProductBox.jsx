"use client";
import { useState } from "react";
import Image from "./Image";
import ImageBox from "./ImageBox";

const ProductBox = () => {
  const [selectedImage, setSelectedImage] = useState("navy");
  return (
    <div>
      <Image width={500} height={500} img={`/${selectedImage}.png`} />
      <ImageBox setSelectedImage={setSelectedImage} />
      <div className="colors">
        <div onClick={() => setSelectedImage("navy")} className={selectedImage === `navy` ? `navy active` : `navy`}></div>
        <div onClick={() => setSelectedImage("ocean")} className={selectedImage === `ocean` ? `ocean active` : `ocean`}></div>
        <div onClick={() => setSelectedImage("mint")} className={selectedImage === `mint` ? `mint active` : `mint`}></div>
      </div>
    </div>
  );
};

export default ProductBox;
