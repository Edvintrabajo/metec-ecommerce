const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="w-full h-1/6 flex items-center bg-white p-4 text-4xl select-none z-20 relative"
    >
      <a href="/" className="ml-4">
        <img src={`./src/img/title-logo.png`} className="h-10" alt="" />
      </a>
    </nav>
  );
};

export default Navbar;
