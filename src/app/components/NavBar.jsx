import Nav from "./Nav";

const NavBar = () => {
  return (
    <div className="flex gap-4 py-10">
      <Nav text="Mac" />
      <Nav text="iPhone" />
      <Nav text="iPad" />
      <Nav text="iWatch" className={"bg-text text-background rounded-2xl"} />
      <Nav text="Support" />
    </div>
  );
};

export default NavBar;
