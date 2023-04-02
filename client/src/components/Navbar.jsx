const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="w-full h-1/6 flex justify-between items-center border-2 border-white bg-white p-4 text-4xl select-none z-20 relative"
    >
      <a href="/" className="ml-4">
        <h1>METEC</h1>
      </a>
      <div id="menu" className="hidden">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
