import Image from "next/image";

export default function Page({ width, height, img, classname }) {
  return (
    <Image
      src={img}
      width={width}
      height={height}
      className={classname}
      alt="Picture of the author"
    />
  );
}
