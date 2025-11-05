import Image from "./Image";

const ImageBox = ({ setSelectedImage }) => {
  return (
    <div className="col-1 flex items-center justify-center gap-20">
      <button
        onClick={() => setSelectedImage("navy")}
        className="after:bg-navy/50 relative after:absolute after:bottom-0 after:left-0 after:z-10 after:h-[70px] after:w-[120px] after:rounded-2xl after:content-['']"
      >
        {" "}
        <Image
          width={100}
          height={100}
          img={"/navy.png"}
          classname={`z-20 relative`}
        />
      </button>
      <button
        onClick={() => setSelectedImage("ocean")}
        className="after:bg-ocean/50 relative after:absolute after:bottom-0 after:left-0 after:z-10 after:h-[70px] after:w-[120px] after:rounded-2xl after:content-['']"
      >
        {" "}
        <Image
          width={100}
          height={100}
          img={"/ocean.png"}
          classname={`z-20 relative`}
        />
      </button>
      <button
        onClick={() => setSelectedImage("mint")}
        className="after:bg-mint/50 relative after:absolute after:bottom-0 after:left-0 after:z-10 after:h-[70px] after:w-[120px] after:rounded-2xl after:content-['']"
      >
        {" "}
        <Image
          classname={`z-20 relative`}
          width={100}
          height={100}
          img={"/mint.png"}
        />
      </button>
    </div>
  );
};

export default ImageBox;
