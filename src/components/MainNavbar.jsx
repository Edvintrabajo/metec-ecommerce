import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import ShoppingButton from "./ShoppingButton";
import Navlist from "./Navlist";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function MainNavbar() {

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 600 && setOpenNav(false));
  }, []);

  return (
    <nav className="w-full p-4">
      <Navbar className="w-full px-4 py-4 rounded-lg bg-white" fullWidth color="transparent">
        <div className="px-4 flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            // className="mr-4 cursor-pointer py-1.5 font-medium"
            className="relative text-3xl laptop:text-5xl font-semibold tracking-tighter before:absolute before:inset-0 before:animate-text-wave before:bg-gradient-to-br before:from-[#00DBDE] before:to-[#FC00FF] before:bg-clip-text before:text-transparent before:content-['METEC']"

          >
            <h1>METEC</h1>
          </Typography>
          
          <div className="hidden tablet:block">{<Navlist/>}</div>
          <div className="flex w-[120px] justify-between">
            <ShoppingButton hidden={true}/>
            <Profile hidden={true}/>
          </div>
          
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent tablet:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto text-blue-gray-900 p-4">
            <hr className="border border-gray-300 mb-4"/>
            <div className="w-full flex justify-center">
              <div className="flex justify-between w-[150px]">
                <Profile />
                <ShoppingButton />
              </div>
            </div>
            <hr className="border border-gray-300 my-4"/>
            {<Navlist/>}
          </div>
        </MobileNav>
      </Navbar>
    </nav>

  );
}

export default MainNavbar;
