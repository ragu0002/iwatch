import Image from "./Image";

const ImageBox = ({ setSelectedImage }) => {
  return (
    <div className="image-box">
      <button onClick={() => setSelectedImage("navy")}>
        {" "}
        <Image width={100} height={100} img={"/navy.png"} />
      </button>
      <button onClick={() => setSelectedImage("ocean")}>
        {" "}
        <Image width={100} height={100} img={"/ocean.png"} />
      </button>
      <button onClick={() => setSelectedImage("mint")}>
        {" "}
        <Image width={100} height={100} img={"/mint.png"} />
      </button>
    </div>
  );
};

export default ImageBox;
