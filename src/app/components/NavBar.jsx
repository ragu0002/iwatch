import Nav from "./Nav";

const NavBar = () => {
  return (
    <div className="flex gap-1.25">
      <Nav text="Mac" />
      <Nav text="iPhone" />
      <Nav text="iPad" />
      <Nav text="iWatch"/>
      <Nav text="Support" />
    </div>
  );
};

export default NavBar;
