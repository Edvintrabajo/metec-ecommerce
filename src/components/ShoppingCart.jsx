import React from "react";
import Order from "./Order";
import { getOrders } from "../controllers/orders/orders.functions";

function ShoppingCart({ orders }) {

  console.log(getOrders())

  return (
    <div className="ShoppingCart">

      <div className="ShoppingCart__items">
        
        {orders.map((order) => (
            <Order
              key={order.id}
              order={order}
            />
          ))}
        
      </div>
    </div>
  );
}

export default ShoppingCart;
