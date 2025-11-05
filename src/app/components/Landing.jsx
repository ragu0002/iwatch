import InfoBox from "./InfoBox";
import ProductBox from "./ProductBox";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-between">
      <InfoBox />
      <ProductBox />
    </div>
  );
};

export default Landing;
