import NavBar from "./NavBar";
import Favs from "./Favs";

const Header = () => {
  return (
    <div className="header">
      <p>Logo</p>
      <NavBar />
      <Favs />
    </div>
  );
};

export default Header;
