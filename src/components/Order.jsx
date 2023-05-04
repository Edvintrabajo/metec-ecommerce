import React from "react";
import { deleteOrder, updateOrder, getOrderIndex } from "../controllers/orders/orders.functions";
import { Context } from "../context/Context";
import { useContext } from "react";
import { getOrdersCount, getTotalOrders } from "../controllers/orders/orders.functions";


function Order({ order }) {

  const { setOrders, orders, setCountOrders, setTotalPrice } = useContext(Context);

  const handleDeleteOrder = (id) => {
    const index = getOrderIndex(id);
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    deleteOrder(index);
    var count = getOrdersCount();
    setCountOrders(count);
    var total = getTotalOrders();
    setTotalPrice(total);
  };

  return (
    <div className="ShoppingCart__item p2 flex mb-5">
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
            <button className="h-10 text-center" onClick={ () => handleDeleteOrder(order.id) }>X</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
