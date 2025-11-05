const Nav = ({ text, className }) => {
  return (
    <div className={`px-10 py-0.5 ${className}`}>
      <p className="text-lg font-medium">{text}</p>
    </div>
  );
};

export default Nav;
