import React from "react";
import ShoppingCart from "./ShoppingCart";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../context/Context";
import { auth } from "../config/firebase";
import { sendOrders } from "../controllers/orders/orders.functions";
import { showAlert } from "../controllers/general/general.functions";

function ShoppingButton({hidden = false}) {
    
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
    <div className={!hidden ? "flex-none" : "flex-none hidden tablet:inline-block"}>
      <div className="dropdown-end dropdown">
        <label
          tabIndex={0}
          className="btn-ghost btn-circle btn m-1 border-neutral-500 transition-all hover:border-transparent"
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
          className="card dropdown-content text-white card-compact top-16 -left-[170px] w-[300px] bg-base-100 shadow-2xl laptop:-left-[220px] laptop:w-[350px]"
        >
          <div className="card-body">
            <span className="text-lg font-bold">{countOrders} Items</span>
            <hr className="mb-2" />
            <ShoppingCart />
            <hr className="mt-2" />
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
    </div>
  );
}

export default ShoppingButton;
