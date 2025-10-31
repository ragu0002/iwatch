import { SiApple } from "react-icons/si";
import NavBar from "./NavBar";
import Favs from "./Favs";

const Header = () => {
  return (
    <div className="header">
      <SiApple size={40} />
      <NavBar />
      <Favs />
    </div>
  );
};

export default Header;
