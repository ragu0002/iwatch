import { SiApple } from "react-icons/si";
import NavBar from "./NavBar";
import Favs from "./Favs";

const Header = () => {
  return (
    <div className="mt-1.25 flex items-center justify-between">
      <SiApple size={40} />
      <NavBar />
      <Favs />
    </div>
  );
};

export default Header;
