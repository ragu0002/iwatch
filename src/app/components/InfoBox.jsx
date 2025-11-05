import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const InfoBox = () => {
  return (
    <div className="grid h-full grid-rows-[3fr_auto_1fr] justify-stretch">
      <h1 className="row-1 self-center py-5 text-5xl leading-15 capitalize">
        <span className="font-extrabold">The perfect moment</span> Between Past
        and future.
      </h1>
      <button className="border-text row-2 justify-self-start rounded-(--border-radius-button) px-15 py-3 text-xl outline-3">
        <p className="text-xl">Bye Now</p>
      </button>
      <div className="row-3 flex items-center gap-5 self-end">
        <FaArrowLeftLong />1<FaArrowRightLong />
      </div>
    </div>
  );
};

export default InfoBox;
