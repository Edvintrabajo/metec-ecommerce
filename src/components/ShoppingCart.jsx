import React from "react";
import Order from "./Order";
import { useContext } from "react";
import { Context } from "../context/Context";
import { useEffect } from "react";
import { getOrders } from "../controllers/orders/orders.functions";
import { v4 as uuidv4 } from "uuid";

function ShoppingCart() {

  const { setOrders, orders } = useContext(Context);

  useEffect(() => {
    setOrders(getOrders());
  }, []);
  
  return (
    <div className="ShoppingCart ">

      <div className="ShoppingCart__items max-h-[500px] tablet:max-h-[200px] desktop:max-h-[500px] overflow-y-scroll">
        {orders.length === 0 ? (
          <p className="text-base font-semibold my-4 text-center">Empty cart</p>
        ) : (
          orders.map((order) => (
            <Order
              key={uuidv4()}
              order={order}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
