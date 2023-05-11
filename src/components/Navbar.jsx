import React from "react";
import ShoppingCart from "./ShoppingCart";
import { useContext } from "react";
import { Context } from "../context/Context";
import { MdOutlineShoppingCart } from "react-icons/md";
import { auth } from "../config/firebase";
import { sendOrders } from "../controllers/orders/orders.functions";
import { showAlert } from "../controllers/general/general.functions";
import Profile from "./Profile";

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
          
          <Profile />

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
