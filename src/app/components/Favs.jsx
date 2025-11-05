import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";

const Favs = () => {
  return (
    <div className="flex items-center gap-4">
      <CiSearch size={20} strokeWidth={1.5} />{" "}
      <div className="bg-text h-6 w-px" />
      <LuShoppingBag size={20} strokeWidth={1.5} />
    </div>
  );
};

export default Favs;
