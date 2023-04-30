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
    getOrders(setOrders);
  }, [setOrders]);
  
  return (
    <div className="ShoppingCart">

      <div className="ShoppingCart__items">
        
        {orders.map((order) => (
            <Order
              key={uuidv4()}
              order={order}
            />
          ))}
        
      </div>
    </div>
  );
}

export default ShoppingCart;
