import React from "react";
import ShoppingCart from "./ShoppingCart";
import { getOrdersCount } from "../controllers/orders/orders.functions";
import { useContext } from "react";
import { Context } from "../context/Context";
import { BiUser } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
function Navbar() {

  const { countOrders, totalPrice } = useContext(Context);

  return (
    <div className="navbar border-neutral-500 border-2 p-4 px-4 rounded-3xl flex">
      <div className="flex-1">
        <a className="normal-case text-4xl">METEC</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle border-neutral-500 transition-all hover:border-transparent">
            <div className="indicator rounded-full p-3">
                <MdOutlineShoppingCart className="scale-150"/>
              <span className="badge badge-sm indicator-item border-neutral-500">{ countOrders }</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-72 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{ countOrders } Items</span>
              <ShoppingCart />
              <span className="text-info">Subtotal: ${ totalPrice }</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end ml-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-neutral-500 transition-all hover:border-transparent">
            <div className="w-10 rounded-full p-3">
              <BiUser className=" scale-150 m-auto" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
