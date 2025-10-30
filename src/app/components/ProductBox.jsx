"use client";
import { useState } from "react";
import Image from "./Image";
import ImageBox from "./ImageBox";

const ProductBox = () => {
  const [selectedImage, setSelectedImage] = useState("/navy.png");
  return (
    <div>
      <Image width={500} height={500} img={selectedImage} />
      <ImageBox selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </div>
  );
};

export default ProductBox;
