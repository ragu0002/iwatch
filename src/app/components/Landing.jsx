import InfoBox from "./InfoBox";
import ProductBox from "./ProductBox";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className="grid_1-1">
      <InfoBox />
      <ProductBox />
    </div>
  );
};

export default Landing;
