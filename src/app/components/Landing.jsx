import InfoBox from "./InfoBox";
import ProductBox from "./ProductBox";

const Landing = () => {
  return (
    <div className="grid grid-cols-2 justify-between pb-10">
      <InfoBox />
      <ProductBox />
    </div>
  );
};

export default Landing;
