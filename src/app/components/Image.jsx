import Image from "next/image";

export default function Page({ width, height, img }) {
  return <Image src={img} width={width} height={height} alt="Picture of the author" />;
}
