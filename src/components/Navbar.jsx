import React from "react";
import ShoppingCart from "./ShoppingCart";
import { getOrdersCount } from "../controllers/orders/orders.functions";
import { useContext } from "react";
import { Context } from "../context/Context";

function Navbar() {

  const { countOrders, totalPrice } = useContext(Context);

  return (
    <div className="navbar border-neutral-500 border-2 p-4 px-4 rounded-3xl flex">
      <div className="flex-1">
        <a className="normal-case text-4xl">METEC</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
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
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="./src/img/logo-metec.png" className=""/>
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
