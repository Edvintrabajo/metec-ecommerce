import React from "react";
import "../Cards.css";
import { deleteOrder, updateOrder } from "../controllers/orders/orders.functions";

function Order({ order }) {
  return (
    <div className="ShoppingCart__item p2 flex">
      <div className="col">
        <div className="ShoppingCart__item__image h-20 w-20">
          <img
            className="rounded-lg"
            src={order.image}
            alt="product"
          />
        </div>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="ShoppingCart__item__details flex h-20 w-3/4 flex-row text-left">
          <div className="flex w-2/3 flex-col align-middle">
            <p>{ order.name }</p>
            <p>Unidades: { order.unidades }</p>
            <p>{ order.price } €</p>
          </div>
          <div className="flex w-1/3 items-end">
            <button className="h-10 text-center" onClick={ deleteOrder(order.id) }>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
