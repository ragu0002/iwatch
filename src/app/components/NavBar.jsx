import Nav from "./Nav";

const NavBar = () => {
  return (
    <div className="navigation">
      <Nav text="Mac" />
      <Nav text="iPhone" />
      <Nav text="iPad" />
      <Nav text="iWatch" type="header_button" />
      <Nav text="Support" />
    </div>
  );
};

export default NavBar;
