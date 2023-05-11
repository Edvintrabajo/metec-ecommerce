import React from "react";
import ShoppingCart from "./ShoppingCart";
import { useContext } from "react";
import { Context } from "../context/Context";
import { BiUser } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { auth } from "../config/firebase";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineForm } from "react-icons/ai";
import { sendOrders } from "../controllers/orders/orders.functions";
import { logOut } from "../controllers/register-login/functions";
import { showAlert } from "../controllers/general/general.functions";
import { AiOutlinePoweroff } from "react-icons/ai";
function Navbar() {
  const { setCountOrders, countOrders, setTotalPrice, totalPrice, setOrders } = useContext(Context);

  const handleSendOrders = () => {
    if (auth?.currentUser === null) {
      showAlert("You must be logged to checkout", "warning");
    } else {
      sendOrders();
      setOrders([]);
      setCountOrders(0);
      setTotalPrice(0);
    }
  };

  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className="w-full p-4">
      <div className="navbar flex rounded-3xl border border-neutral-400 p-4">
        <div className="flex-1">
          <a
            href="/"
            className="relative text-5xl font-semibold tracking-tighter before:absolute before:inset-0 before:animate-text-wave before:bg-gradient-to-br before:from-[#00DBDE] before:to-[#FC00FF] before:bg-clip-text before:text-transparent before:content-['METEC']"
          >
            <h1>METEC</h1>
          </a>
        </div>
        <div className="flex-none">

          <div className="dropdown-end dropdown">
            <label
              tabIndex={0}
              className="btn-ghost btn-circle btn border-neutral-500 transition-all hover:border-transparent"
            >
              <div className="indicator rounded-full p-3 ">
                <MdOutlineShoppingCart className="scale-150" />
                <span className="badge badge-sm indicator-item border-neutral-500">
                  {countOrders}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact bg-base-100 shadow-2xl w-[300px] top-16 -left-[170px] laptop:-left-[220px] laptop:w-[350px]"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{countOrders} Items</span>
                <hr className="mb-2"/>
                <ShoppingCart />
                <hr className="mt-2"/>
                <span className="text-info">Subtotal: {totalPrice},00 €</span>
                <div className="card-actions">
                  <button
                    className="btn-primary btn-block btn"
                    onClick={() => handleSendOrders()}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dropdown-end dropdown ml-5">
            {auth?.currentUser?.email ? (
              <>
                <label
                  tabIndex={0}
                  className="btn-ghost btn-circle avatar btn border-neutral-500 shadow-2xl transition-all hover:border-transparent"
                >
                  <div className="w-10 rounded-full">
                    <img
                      src={`https://robohash.org/${auth?.currentUser?.email}`}
                      alt="avatar"
                      className="scale-125 rounded-full"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge text-xs">Coming Soon</span>
                    </a>
                  </li>
                  <li>
                    <a className="justify-between">
                      Settings
                      <span className="badge text-xs">Coming Soon</span>

                    </a>
                  </li>
                  <li>
                    <a className="justify-between hover:text-danger" onClick={() => {handleLogOut()}}>
                      Logout
                      <AiOutlinePoweroff className="scale-150 text-white" />
                      </a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <label
                  tabIndex={0}
                  className="btn-ghost btn-circle avatar btn border-neutral-500 shadow-2xl transition-all hover:border-transparent"
                >
                  <div className="w-10 rounded-full p-3">
                    <BiUser className=" m-auto scale-150" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
                >
                  <li className="hover:text-edit">
                    <a href="/login" className="justify-between">
                      Sign in
                      <FiLogIn className="scale-150 text-white" />
                    </a>
                  </li>
                  <li className="hover:text-info">
                    <a href="/login" className="justify-between">
                      Sign up
                      <AiOutlineForm className="scale-150 text-white" />
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
