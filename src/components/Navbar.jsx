const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="w-full h-1/6 flex items-center bg-white p-4 text-4xl select-none z-20 relative"
    >
      <a href="/" id="navbar-body" className="ml-4 flex justify-center items-center hover:scale-110 transition-all">
        <img src={`./src/img/title-logo.png`} id="navbar-text" className="h-10 mr-4" alt="" />
        <img src={`./src/img/logo-metec.png`} id="navbar-logo" className="h-10" alt="" />
      </a>
    </nav>
  );
};

export default Navbar;
